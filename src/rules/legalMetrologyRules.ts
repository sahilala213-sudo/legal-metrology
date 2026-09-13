import { Rule } from '../types';
export const legalMetrologyRules: Rule[] = [
 {id:'PRODUCT_IDENTITY',name:'Product Identity',description:'Name or identity of the packaged commodity should be declared.',required:true,severity:'HIGH',field:'productName',recommendation:'Add a clear product or commodity name.'},
 {id:'NET_QUANTITY',name:'Net Quantity',description:'Net quantity should be clearly declared in a standard unit.',required:true,severity:'HIGH',field:'netQuantity',recommendation:'Add net quantity with a standard unit, e.g. 500 g or 1 L.'},
 {id:'MRP_DECLARATION',name:'Maximum Retail Price',description:'MRP should be clearly declared in Indian Rupees.',required:true,severity:'HIGH',field:'mrp',recommendation:'Ensure MRP is clearly displayed in Indian Rupees.'},
 {id:'MANUFACTURER_PACKER',name:'Manufacturer or Packer Details',description:'Manufacturer or packer identity should be present.',required:true,severity:'HIGH',field:'manufacturer',recommendation:'Add manufacturer or packer name.'},
 {id:'COMPLETE_ADDRESS',name:'Complete Address Information',description:'A complete manufacturer or packer address should be declared.',required:true,severity:'HIGH',field:'manufacturerAddress',recommendation:'Add complete manufacturer or packer address.'},
 {id:'CUSTOMER_CARE',name:'Customer Care Information',description:'Customer care information should be provided.',required:true,severity:'MEDIUM',field:'customerCare',recommendation:'Add customer care contact information.'},
 {id:'CONTACT_DETAILS',name:'Contact Details',description:'A customer phone number or email should be provided.',required:true,severity:'MEDIUM',field:'phone',recommendation:'Add customer care phone number or email address.'},
 {id:'PACKING_DATE',name:'Manufacturing / Packing Date',description:'Manufacturing or packing date may be applicable.',required:false,severity:'LOW',field:'manufacturingDate',recommendation:'Where applicable, add the manufacturing or packing date.'},
 {id:'IMPORTER_DETAILS',name:'Importer Details',description:'Imported products should name the importer.',required:true,severity:'HIGH',field:'importer',conditional:'imported',recommendation:'Add importer name and address for the imported product.'},
 {id:'COUNTRY_OF_ORIGIN',name:'Country of Origin',description:'Imported products should declare country of origin.',required:true,severity:'HIGH',field:'countryOfOrigin',conditional:'imported',recommendation:'Declare the country of origin.'}
];
