import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { global } from "./global"; 

@Injectable({
  providedIn: 'root'
})
export class CriaService {

  public url:string = global.url;
  public headers: any = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')

  constructor(public _http: HttpClient) { }

  getCorrales():Observable<any>{
    return this._http.get(this.url+'indexCorral', {headers:this.headers} );
  }
  getCriasTodo():Observable<any>{
    return this._http.get(this.url+'indexCria', {headers:this.headers} );
  }
  getCriasSanas():Observable<any>{
    return this._http.get(this.url+'indexCriaSanas', {headers:this.headers} );
  }
  getCriasEnfermas():Observable<any>{
    return this._http.get(this.url+'indexCriaEnfermas', {headers:this.headers} );
  }
  getCriasFinadas():Observable<any>{
    return this._http.get(this.url+'indexCriaFinadas', {headers:this.headers} );
  }
  getCriaID(id_cria:number):Observable<any>{
    return this._http.get(this.url+'busca-cria/'+id_cria,{headers:this.headers});
  }
  getSensorID(id_sensor:number):Observable<any>{
    return this._http.get(this.url+'busca-sensor/'+id_sensor,{headers:this.headers});
  }
  agregaCria(cria:any):Observable<any>{
    let json = JSON.stringify(cria);
    let params = 'json='+json;
    return this._http.post(this.url+'registra-cria',params,{headers:this.headers})
  }
  registraSensor(sensor:any,id_cria:number):Observable<any>{
    let json = JSON.stringify(sensor);
    let params = 'json='+json;
    return this._http.post(this.url+'registra-sensor/'+id_cria,params,{headers:this.headers})
  }
  actualizaSensor(sensor:any,id_sensor:any):Observable<any>{
    let json = JSON.stringify(sensor);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.put(this.url + 'actualiza-sensor/'+id_sensor,params,{headers: headers});
  }
  agregaCuarentena(id_cria:number):Observable<any>{
    return this._http.put(this.url + 'agrega-cuarentena/'+id_cria,{headers: this.headers});
  }
  quitaCuarentena(id_cria:number):Observable<any>{
    return this._http.put(this.url + 'quita-cuarentena/'+id_cria,{headers: this.headers});
  }
}
