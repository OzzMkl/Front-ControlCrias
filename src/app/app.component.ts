import { Component, DoCheck, OnInit } from '@angular/core';
import { EmpleadoService } from './services/empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck{

  public identity:any;
  public token:any;
  title = 'front-crias.com';

  constructor( public _empleadoService : EmpleadoService ){
    this.loadUser();
  }
  ngOnInit(){
    // console.log('web carada correctaetne');
  }
  ngDoCheck(){
    this.loadUser();
  }
  loadUser(){
    this.identity = this._empleadoService.getIdentity();
    this.token =  this._empleadoService.getToken();
  }
}
