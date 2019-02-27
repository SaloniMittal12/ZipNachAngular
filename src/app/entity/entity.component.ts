import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
  /*gridData = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        UnitPrice: 18,
        UnitsInStock: 39,
        Discontinued: false
    },
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18,
      UnitsInStock: 39,
      Discontinued: false
    },
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18,
      UnitsInStock: 39,
      Discontinued: false
    },
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18,
      UnitsInStock: 39,
      Discontinued: true
    }];*/

    columnDefs = [
      {headerName: 'Make', field: 'make', sortable: true, filter: true },
      {headerName: 'Model', field: 'model', sortable: true, filter: true },
      {headerName: 'Price', field: 'price', sortable: true, filter: true}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor() { }

  ngOnInit() {
  }
}
