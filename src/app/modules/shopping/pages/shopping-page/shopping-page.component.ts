import { Component, OnInit } from '@angular/core';
import { DataLoadShoppingService } from '../../data-load-shopping.service';

import { Property } from '../../models/shopping';
import { Location } from '../../models/location';
import { TypeProperty } from '../../models/typeProperty';


@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {

  property:Property[] = [];
  location:Location[] = [];
  typeProperty:TypeProperty[] = [];

  constructor(private dataLoadShoppingService : DataLoadShoppingService) { }

  ngOnInit(): void {
    this.getLocation(); 
    this.getProperty();
    this.getTypeProperty();
  }

 
  getLocation() {
    this.dataLoadShoppingService
      .getLocation()
        .subscribe(location => {
          this.location = location;
          console.log("método de shopping-page el cual muestra todas las localidades", this.location);
        })
  }

  getTypeProperty() {
    this.dataLoadShoppingService
      .getTypeProperty()
        .subscribe(typeProperty => {
          this.typeProperty = typeProperty; 
          console.log("método de shopping-page el cual muestra los tipos de propiedades", this.typeProperty);

        })
  }
  getProperty() {
    this.dataLoadShoppingService
      .getProperty()
        .subscribe(property => {
          this.property = property; 
          console.log("método de shopping-page el cual muestra todas las propiedades", this.property);
        })
  }
}
