import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
//servicios
import { ProveedorService } from 'src/app/services/proveedor.service';
import { CriaService } from 'src/app/services/cria.service';
import { ToastService } from 'src/app/services/toast.service';
//ngbootstrap
import { NgbModal, ModalDismissReasons, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
//models
import { Proveedor } from 'src/app/models/proveedor';
import { Cria } from 'src/app/models/cria';

@Component({
  selector: 'app-registra-cria',
  templateUrl: './registra-cria.component.html',
  styleUrls: ['./registra-cria.component.css']
})
export class RegistraCriaComponent implements OnInit {

  //variables servicios
  public proveedores:Array<Proveedor>;//getProveedores
  public corrales:any;//getCorrales
  public cria: Cria;
  //cerrar modal
  closeResult ='';
  //pagination
  page=1;
  pageSize=2;
  //pipe
  buscaProveedor ='';
  //calendario
  model!: NgbDateStruct;

  constructor(private modalService:NgbModal, public _proveedorService:ProveedorService, public _criaService:CriaService,
              private _router: Router, public toastService: ToastService) {
    this.proveedores=[]
    this.cria= new Cria(0,'','',null,0,0,0,0,0,null,0,1,'','')
   }

  ngOnInit(): void {
    this.getProveedores()
    this.getCorrales()
  }

  getProveedores(){
    this._proveedorService.getProveedores().subscribe(
      response=>{
        this.proveedores = response.proveedores
        console.log(this.proveedores)
      }
    )
  }
  getCorrales(){
    this._criaService.getCorrales().subscribe(
      response=>{
        this.corrales = response.corrales
      },error =>{
        console.log(error)
      }
    );
  }
  seleccionaProveedor(id_proveedor:number,nombreProveedor:string){
    this.cria.id_proveedor = id_proveedor
    this.cria.nombreProveedor = nombreProveedor
  }
  guardaCria(FormRegistraCria:any){
    this.cria.fecha = this.model.year+'-'+this.model.month+'-'+this.model.day;//concatenamos la fecha del datepicker
    console.log(this.cria)
    this._criaService.agregaCria(this.cria).subscribe(
      response =>{
        if(response[0].status = 'success'){
          console.log(response);
          this.toastService.show('Cria registrada correctamente', { classname: 'bg-success text-light', delay: 3000 });
          this._router.navigate(['ver-crias-modulo/ver-crias'])
        }
      }, error =>{
        console.log(error)
      }
    );
  }
  // Modal
  open(content:any) {//abre modal
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    
    
  }
  private getDismissReason(reason: any): string {//cierra modal con teclado ESC o al picar fuera del modal
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
