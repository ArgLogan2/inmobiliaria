import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Property } from './models/shopping';
import { Location } from './models/location';
import { TypeProperty } from './models/typeProperty';

@Injectable({
  providedIn: 'root'
})
export class DataLoadShoppingService {

  private urlApi:string = environment.urlApi;
  constructor(private httpClient:HttpClient) { }


  /*método res, para traer la data correspondiente a las propiedades*/
  getProperty():Observable<Property[]> {

    return this.httpClient.get<Property[]>(`${this.urlApi}/shopping.json`).pipe(map( (property) => property));

  }

  /*********** 
   * 
   *
   * TODO
   *   Falta desarrollar el método getProperty que permita realizar un filtrado de las propiedades por tipo de propiedades y localidades a la cual pertenece.
   * 
   * 
   * 
  */


  /*método res, para traer la data correspondiente a los tipos de propiedades*/
  getTypeProperty():Observable<TypeProperty[]> {
    return this.httpClient.get<TypeProperty[]>(`${this.urlApi}/typeProperty.json`).pipe(map( (typeProperty) => typeProperty));
  }
  /*
  método res, para traer la data correspondiente a las localidades
  */
  getLocation():Observable<Location[]> {
    return this.httpClient.get<Location[]>(`${this.urlApi}/location.json`).pipe(map( (location) => location));
  }
}
