import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*importo la variable de entorno de desarrollo, allí se encuentra la ruta del json que contiene la data de la página home*/ 
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Inmobiliaria } from './models/home';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})

 
export class DataLoadHomeService {
  //guarda de manera local la data que viene del api. 
  private dataLocal:Inmobiliaria[] = []; 

  private urlApi:string = environment.urlApi;
  constructor(private httpClient:HttpClient) { }

  
  /*método res, para traer la data correspondiente a inmobiliaria*/ 
  getsInmobiliaria():Observable<Inmobiliaria[]>{
  
    /*
      consultamos si dataLocal no esta vacía, en caso de ser así quiere decir que ya se cargaron los datos que vienen desde la api, con lo cual no es necesario volver hacer una consulta a la misma sino que retornamos los datos que se encuentran en dataLocal. 
    */
    if(this.dataLocal.length != 0){
      return new Observable((observer) => {
        console.log("data local");
        return observer.next(this.dataLocal);
      })
    }
    

    // realicé este bloque al código para simular una petición a la api. 
    let i = 5000000000; 
    while(i > 0 ) {
        i--; 
        if(i == 1) {console.log("petición a la api")}
    }
    /*
      hace una petición a la api, guardamos la data en la variable dataLocal y a la vez retornamos cómo respuesta lo que viene desde la api. 
    */
    return this.httpClient.get(`${this.urlApi}/inmobiliaria.json`).pipe(map( inmobiliaria => this.dataLocal = inmobiliaria as Inmobiliaria[]));
    
   }
}
