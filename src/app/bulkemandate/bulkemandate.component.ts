import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulkemandate',
  templateUrl: './bulkemandate.component.html',
  styleUrls: ['./bulkemandate.component.css']
})
export class BulkemandateComponent implements OnInit {
 
  columnDefs = [
    {headerName: 'All', field: 'All', sortable: true, filter: true , width: 150},
    {headerName: 'Mandate ID', field: 'MandateID', sortable: true, filter: true , width: 325},
    {headerName: 'Reference 1', field: 'Reference1', sortable: true, filter: true , width: 300},
    {headerName: 'Bank live on ENACH', field: 'BankliveonENACH', sortable: true, filter: true , width: 305},
    {headerName: 'Amount<=ENACH max. trx value', field: 'Amount', sortable: true, filter: true , width: 305 },
    {headerName: 'Single Signatory', field: 'SingleSignatory', sortable: true, filter: true , width: 325},
    {headerName: 'To Date Mandatory for ENACH', field: 'ToDateMandatoryforENACH', sortable: true, filter: true , width: 300},
    {headerName: 'Account Number', field: 'AccountNumber', sortable: true, filter: true , width: 305},
    {headerName: 'Bank Name', field: 'BankName', sortable: true, filter: true },
    {headerName: 'IFSC/MICR', field: 'IFSC', sortable: true, filter: true , width: 325},
    {headerName: 'Customer Name', field: 'CustomerName', sortable: true, filter: true , width: 300},
    {headerName: 'Phone Number', field: 'PhoneNumber', sortable: true, filter: true , width: 200},
    {headerName: 'Email ID', field: 'EmailID', sortable: true, filter: true , width: 305}
    
]

rowData = [
    { All: '1', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '2', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '3', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '4', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '5', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '6', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '7', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '8', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '9', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '10', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '11', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '12', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '13', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '14', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '15', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '16', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '17', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '18', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '19', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' },
    { All: '20', MandateID: '85', Reference1: '25' , BankliveonENACH:'True' , Amount: 'True' , SingleSignatory:'True' , ToDateMandatoryforENACH:'NA' , AccountNumber:'78788744554222' , BankName:'HDFC' , IFSC:'HDFC 000001', CustomerName:'Ankush Tomer' , PhoneNumber:'8956785452' , EmailID:'ankush@gmail.com' }
];
  constructor() { }

  ngOnInit() {
  }

}
