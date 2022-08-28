import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*importo la variable de entorno de desarrollo, allí se encuentra la ruta del json que contiene la data de la página home*/ 
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Inmobiliaria, Home } from './models/home';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})

 
export class DataLoadHomeService {

  private urlApi:string = environment.urlApi;
  constructor(private httpClient:HttpClient) { }

  
  /*método res, para traer la data correspondiente a inmobiliaria*/ 
  getsInmobiliaria():Observable<Inmobiliaria[]>{
    
    return this.httpClient.get(`${this.urlApi}/inmobiliaria.json`).pipe(map( inmobiliaria => inmobiliaria as Inmobiliaria[]));
    
   }
   
   getHome():Observable<Home[]>{
    
      return this.httpClient.get<Home[]>(`${this.urlApi}/home.json`).pipe(map( (home) => home));
   }
   
}
