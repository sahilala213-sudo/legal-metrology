export type Confidence = 'High' | 'Medium' | 'Low';
export interface Field { value: string; confidence: Confidence; }
export interface ExtractedData { productName: Field; brandName: Field; mrp: Field; netQuantity: Field; unit: Field; manufacturer: Field; manufacturerAddress: Field; packer: Field; packerAddress: Field; importer: Field; importerAddress: Field; countryOfOrigin: Field; manufacturingDate: Field; expiryDate: Field; bestBefore: Field; customerCare: Field; phone: Field; email: Field; batchNumber: Field; licenseNumber: Field; imported: boolean; }
export type RuleStatus = 'PASS'|'WARNING'|'FAIL';
export interface Rule { id:string; name:string; description:string; required:boolean; severity:'HIGH'|'MEDIUM'|'LOW'; field:keyof ExtractedData; conditional?: 'imported'; recommendation:string; }
export interface RuleResult { rule:Rule; status:RuleStatus; detail:string; }
export interface Analysis { score:number; status:string; results:RuleResult[]; recommendations:string[]; missing:string[]; }
export interface Scan { id:string; date:string; image?:string; ocrText:string; ocrConfidence:number; data:ExtractedData; analysis:Analysis; }
