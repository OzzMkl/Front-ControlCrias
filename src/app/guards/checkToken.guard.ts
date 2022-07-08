import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//servicios
import { EmpleadoService } from '../services/empleado.service';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenGuard implements CanActivate {

  //variables
  public check: boolean = false

  constructor(private _empleadoService: EmpleadoService, private _router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      //traemos los datos del localStorage
      const token = this._empleadoService.getToken()
      
      //Verificamos si existe el token
      if(token != null){
        this.check = true
      } else{
        this._router.navigate(['/login'])
      }

    return this.check;
  }
  
}
