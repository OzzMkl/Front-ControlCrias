import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
//servicios
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ToastService } from 'src/app/services/toast.service';
//modelos
import { Empleado } from 'src/app/models/empleado';
//ngbootstrap
import{NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-registra-empleado',
  templateUrl: './registra-empleado.component.html',
  styleUrls: ['./registra-empleado.component.css']
})
export class RegistraEmpleadoComponent implements OnInit {

  //variables de servicios
  public roles:any;
  //model
  public empleado:Empleado;

  constructor( public _empleadoService: EmpleadoService,private _router: Router, public toastService: ToastService) {
    this.empleado = new Empleado (0,'','','','','',0);
   }

  ngOnInit(): void {
    this.getRoles();
  }

  //consultamos todos los roles para mostrarlos en el form
  getRoles(){
    this._empleadoService.getRoles().subscribe(
      response =>{
        this.roles = response.roles;
        //console.log(this.roles)
      }, error =>{
        console.log(error)
      }
    )
  }

  guardarEmpleado(FormRegistraEmpleado:any){

    this._empleadoService.agregaEmpleado(this.empleado).subscribe(
      response => {
        
          console.log(response);
          this.toastService.show('Empleado registrado correctamente', { classname: 'bg-success text-light', delay: 3000 });
          this._router.navigate(['']);
        
      }, error => {
        this.toastService.show('Algo salio mal',{classname: 'bg-danger text-light', delay: 6000})
        console.log(error);
      }
    );





    
  }
}
