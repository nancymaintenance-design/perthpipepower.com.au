param([int]$Start=1,[int]$End=103,[ValidateSet('groq','openrouter')][string]$Provider='groq',[int]$SpacingSeconds=35)
$ErrorActionPreference='Stop'
$translationRoot=Join-Path $PSScriptRoot '../.superpowers/sdd/2026-10-16-bilingual-local-editor/translations'
for($batchNumber=$Start;$batchNumber -le $End;$batchNumber++){
 $batchId=$batchNumber.ToString('000')
 $resultPath=Join-Path $translationRoot "result-$batchId.json"
 if(Test-Path -LiteralPath $resultPath){Write-Output "Existing $batchId";continue}
 $inputPath=Join-Path $translationRoot "input-$batchId.txt"
 $raw=& 'C:/Users/UFTR/.codex/free-models/invoke-free-model.ps1' -Provider $Provider -InputFile $inputPath -MaxTokens 4096
 $response=$raw|ConvertFrom-Json
 if($response.finish_reason -ne 'stop'){throw "Incomplete translation batch $batchId"}
 $content=$response.content.Trim() -replace '^```(?:json)?\s*','' -replace '\s*```$',''
 $translated=$content|ConvertFrom-Json -AsHashtable
 $inputText=Get-Content -LiteralPath $inputPath -Raw
 $source=$inputText.Substring($inputText.IndexOf("`n")+1)|ConvertFrom-Json -AsHashtable
 if($source.Count -ne $translated.Count){throw "Translation key count mismatch $batchId"}
 foreach($entry in $source.GetEnumerator()){
  if(!$translated.ContainsKey($entry.Key) -or $translated[$entry.Key] -isnot [string] -or [string]::IsNullOrWhiteSpace($translated[$entry.Key])){throw "Translation key mismatch $batchId"}
 }
 # Generated provider artifacts are private scratch, never executable input.
 [System.IO.File]::WriteAllText($resultPath,($response|ConvertTo-Json -Depth 20),[System.Text.UTF8Encoding]::new($false))
 Write-Output "Translated $batchId with $($response.model), tokens $($response.usage.total_tokens)"
 if($batchNumber -lt $End -and $SpacingSeconds -gt 0){Start-Sleep -Seconds $SpacingSeconds}
}
