export const normalizeText=(t:string)=>t.replace(/\s+/g,' ').trim(); export const lines=(t:string)=>t.split(/\n+/).map(x=>x.trim()).filter(Boolean);
