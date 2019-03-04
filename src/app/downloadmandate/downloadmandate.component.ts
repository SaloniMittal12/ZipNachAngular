import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloadmandate',
  templateUrl: './downloadmandate.component.html',
  styleUrls: ['./downloadmandate.component.css']
})
export class DownloadmandateComponent implements OnInit {

  columnDefs = [
    {headerName: 'All', field: 'All', sortable: true, filter: true , width: 150},
    {headerName: 'Mandate ID', field: 'MandateID', sortable: true, filter: true , width: 325},
    {headerName: 'Name', field: 'Reference1', sortable: true, filter: true , width: 300},
    {headerName: 'Date Of Mandate', field: 'BankliveonENACH', sortable: true, filter: true , width: 305},
    {headerName: 'Mandate Printed', field: 'Amount', sortable: true, filter: true , width: 305 },
    {headerName: 'Mandate Scan', field: 'SingleSignatory', sortable: true, filter: true , width: 325},
    {headerName: 'Reference', field: 'ToDateMandatoryforENACH', sortable: true, filter: true , width: 300},
    {headerName: 'Amount', field: 'AccountNumber', sortable: true, filter: true , width: 305},
    {headerName: 'Account Number', field: 'BankName', sortable: true, filter: true },
    {headerName: 'IFSC/MICR', field: 'IFSC', sortable: true, filter: true , width: 325},
    {headerName: 'Bank Name', field: 'CustomerName', sortable: true, filter: true , width: 300},
    {headerName: 'Frequence', field: 'PhoneNumber', sortable: true, filter: true , width: 200},
    {headerName: 'Debit Type', field: 'EmailID', sortable: true, filter: true , width: 305},
    {headerName: 'Debit To', field: 'EmailID', sortable: true, filter: true , width: 305},
    {headerName: 'Created On', field: 'EmailID', sortable: true, filter: true , width: 305}
    
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
