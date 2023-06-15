import { Injectable } from '@angular/core';
import { TOKEN,URL,USER  } from './constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of,forkJoin } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Viajes } from '../interfaces/viajes';

@Injectable({
  providedIn: 'root'
})
export class IkarusService {

  

constructor(private http: HttpClient) { }

 /** 
  * Consulta de vuelos disponibles según destino 
  * @param data:Viajes objeto de consulta por destino y aerolínea
  * @returns: url con resultado de vuelos disponibles para destino seleccionado
  */

public postFlight(data:Viajes): Observable<any> {
    let headers = new HttpHeaders({'Token': TOKEN.PRAIA });
    let options = { headers: headers };
    let url = URL.IKARUS+USER.PRAIA
    return this.http.post(url, data,options).pipe(
      retry(3),
        map(
          resp => {
            console.log(resp);
            return resp;
        }),
        catchError(this.handleError<any>())
    );
}

/** 
  * Consultar vuelos para 2 trayectos
  * @param data1:Viajes ruta 1 a consultar
  * @param data2:Viajes ruta 2 a consutlar
  * @returns: string url resultados de vuelos disponibles 

  */
public requestDataTrip(data1:Viajes,data2:Viajes): Observable<string[]> {
    let response1 = this.postFlight(data1);
    let response2 = this.postFlight(data2);
    return forkJoin([response1, response2]);
}

/** 
  * Consulta lista de destinos y vuelos disponibles a partir de url obtenida
  * @param url:string lista de vuelos o destinos
  * @returns: objeto resultados de vuelos o destinos obtenidos

  */
public getFlight(url:string): Observable<any> {
    return this.http.get( url).pipe(
     retry(3),
     map( (resp: string) => {
     return resp;
    })
  )
}

protected getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Token', TOKEN.PRAIA);
    return headers;
}

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Token': TOKEN.PRAIA
  })
};


private handleError<T>(result?: T) {
  return (error: any): Observable<T> => {
    console.log(error); 
    return of(result as T);
  };
 }
}
