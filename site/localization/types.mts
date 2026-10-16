export type Locale = 'en-AU' | 'zh-Hans';
export type FieldKind = 'text' | 'image' | 'alt' | 'link' | 'seoTitle' | 'seoDescription';
export interface EditableField { id:string; pageId:string; kind:FieldKind; sourcePath:string; sourceHash:string; value:string; locked:boolean; shared:boolean }
export interface LocaleBundle { schemaVersion:1; locale:Locale; baseHash:string; values:Record<string,string> }
