import { Injectable } from '@angular/core';
import { URL} from './constants';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import * as qs from 'qs';
import { Observable, of} from  'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Assist365Service {

  constructor(private http: HttpClient) { }


 /**
    * Obtener productos, países y link de documento
   * @param url:string endoint a consultar
   *  @param data:object, objeto opcional enviado vía query string
   * @returns: number Listado de productos disponibles, países o link de documento
   */
 public getAssits(url:string,data?: Object):Observable<any>{
    let params = qs.stringify(data);
    if (params.length) {
        params = '?' + params;
    }
    console.log(params);
    return this.http.get<any[]>(URL.ASSIST365+url+params).pipe(
      map( (resp: any) => {
      console.log(resp);  
      return resp;
      } )
    );
   }


   /**
    *  Envía registro de datos del beneficiario para emisión de la póliza
   * @param url:string endoint a consultar
   *  @param data:object,objeto datos personales de beneficiario 
   * @returns: id del documento generado

   */
  public postAssits(url:string, data:Object):Observable<string>{
    let headers = new HttpHeaders();
    headers.append('accept','application/x-www-form-urlencoded');
    headers.append('Content-Type','Application/x-www-form-urlencoded');
    return this.http.post<any[]>(URL.ASSIST365+url,data, {headers: headers}).pipe(
        map(
          resp => {
            console.log(resp);
            return resp;
           }
          ),
        catchError(this.handleError<any>())
    );
   } 

   protected parseResponse(r: any): any {
    if (r.success !== true) {
        throw new Error(r.message);
    }
    return r.data;
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
  };
}

}
