import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulkmandate',
  templateUrl: './bulkmandate.component.html',
  styleUrls: ['./bulkmandate.component.css']
})
export class BulkmandateComponent implements OnInit {


  columnDefs = [
    {headerName: 'Sr.No', field: 'make', sortable: true, filter: true },
    {headerName: 'Activity Name', field: 'ActivityName', sortable: true, filter: true , width: 325},
    {headerName: 'Uploaded By', field: 'UploadedBy', sortable: true, filter: true , width: 300},
    {headerName: 'Uploaded On', field: 'UploadedOn', sortable: true, filter: true , width: 305}
]

rowData = [
    { make: '1', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '2', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '3', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '4', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '5', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '6', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '7', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '8', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '9', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '10', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '11', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '12', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '13', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '14', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '15', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '16', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '17', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '18', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '19', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' },
    { make: '20', ActivityName: 'HFC_Oct 30 2018  2:28PM', UploadedBy: 'ankush@gmail.com' , UploadedOn:'25/02/2019' }
];
  constructor() { }

  ngOnInit() {
  }

}
