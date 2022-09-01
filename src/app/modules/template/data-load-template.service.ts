import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inmobiliaria } from './models/template';

@Injectable({
  providedIn: 'root'
})
export class DataLoadTemplateService {
  private urlApi:string = environment.urlApi;
  constructor(private httpClient:HttpClient) { }

  getsInmobiliaria():Observable<Inmobiliaria[]>{
    return this.httpClient.get<Inmobiliaria[]>(`${this.urlApi}/inmobiliaria.json`);
   }

}
