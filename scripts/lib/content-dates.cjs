function contentDate(previous, sha256, suppliedDate) {
  if (previous?.sha256 === sha256) return previous;
  if (!suppliedDate) throw new Error('Changed content requires its actual modification date (YYYY-MM-DD).');
  const date = new Date(suppliedDate);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(suppliedDate) || !Number.isFinite(date.getTime()) || date.toISOString().slice(0,10)!==suppliedDate) throw new Error('Invalid modification date.');
  if (previous?.lastmod > suppliedDate) throw new Error('Modification date cannot be earlier than the previous content date.');
  return {sha256,lastmod:suppliedDate};
}
module.exports={contentDate};
