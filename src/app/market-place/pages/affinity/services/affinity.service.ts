import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable} from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffinityService {

  constructor(private http:HttpClient) { 

  }


 /**
     Obtiene listado de productos disponibles e id para una selección
     de destino por región
   * @param data:string ,  url con parámetros enviados
   */
  public getProduct = (data:string): Observable<any>  =>{
    return this.http.get(data, {responseType: 'text'})
      .pipe(
        map((str: string)=>{
          console.log(str);
        }),
        catchError((error)=> {
          console.log(error);
          return error;     
        })
      );
  }

   /**
    * ver cotizaciones
   * @param url:string ruta del documento
   * @returns: string planes de cobertura
   */

  public getCotacao(url:string): Observable<any> {
    return this.http.get( url).pipe(
      map( (resp: string) => {
      console.log(resp);  
      return resp;
      }),
      catchError((error)=> {
        console.log(error);
        return error;     
      })
    );
  }
  
   /**Ejecutar pasos del proceso de emisión
   * @param data:string parámetros de consulta enviados por url
   * @returns: json de respuesta proveniente del servicio
   */
  public getProcess = (data:string): Observable<any>  => {
      console.log(data);//
      return this.http.get(data, {responseType: 'text'})
        .pipe(
          map((xmlString: string)=>{
            console.log(xmlString);
            const parser = new DOMParser();
            const srcDOM = parser.parseFromString(xmlString, "application/xml");
            const asJson= this.Xxml2json(srcDOM);
            return asJson;
          }),
          catchError((error)=> {
            console.log(error);
            return error;     
          })
        );
    }

  /**Convierte un dato xml en json
   * @param srcDom:any dato en xml 
   * @returns: Object , Retorna objeto en json
   */

  private Xxml2json = (srcDOM:any) : Object => {
      let children = [...srcDOM.children];
      if (!children.length) {
       return srcDOM.innerHTML
     }
      let jsonResult = {};
      for (let child of children) {
      let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;
      if (childIsArray) {
        if (jsonResult[child.nodeName] === undefined) {
        jsonResult[child.nodeName] = [this.Xxml2json(child)];
        } else {
        jsonResult[child.nodeName].push(this.Xxml2json(child));
       }
      } else {
      jsonResult[child.nodeName] = this.Xxml2json(child);
    }
  }
    return jsonResult;
  }
  
}
