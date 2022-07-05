import { Component, OnInit } from '@angular/core';
//servicios
import { CriaService } from 'src/app/services/cria.service';
import { ToastService } from 'src/app/services/toast.service';
//ngbootstrap
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

//modelo
import { Sensor } from 'src/app/models/sensor';

@Component({
  selector: 'app-ver-crias-todo',
  templateUrl: './ver-crias-todo.component.html',
  styleUrls: ['./ver-crias-todo.component.css']
})
export class VerCriasTodoComponent implements OnInit {

  //variable servicio
  public crias:any;//getcrias
  public criasC:Array<any>
  public detallesCria:Array<any>;//buscaCriaID
  public sensor:Sensor;
  public senso:any
  clasificacion:string ="";
  ultimaActualizacion:string="";
  //spinner
  public isLoading: boolean = true;
  //pipes
  tipoBusqueda: number = 1;
  nombreCria=''
  nombreProveedor=''
  idCria=''
  //cerrar modal
  closeResult ='';

  constructor(public _criaService: CriaService,private modalService:NgbModal, public toastService: ToastService) {
    this.detallesCria=[]
    this.criasC=[]
    this.sensor = new Sensor (0,0,'',0,0)
   }

  ngOnInit(): void {
    this.getTodoCrias()
  }

  getTodoCrias(){
    
    this._criaService.getCriasTodo().subscribe(
      response=>{
        if(response.status = 'success'){
          this.crias = response.crias
          this.isLoading = false
          /**** Creamos nuevo arrary con la clasificacion de las crias*/
          for(let cr in this.crias){
            let cont=0
            if(this.crias[cr]['peso'] >= 15 && this.crias[cr]['peso'] <= 25){
              cont++;
            }
            if(this.crias[cr]['colorMusculo'] >= 3 && this.crias[cr]['colorMusculo'] <= 5){
              cont++;
            }
            if(this.crias[cr]['marmoleo'] == 1 || this.crias[cr]['marmoleo'] == 2){
              cont++;
            }

            switch(cont){
              case 0: this.criasC.push({...this.crias[cr],clasificacion:'GRASA TIPO 2'})
                    break;
              case 1: this.criasC.push({...this.crias[cr],clasificacion:'GRASA TIPO 2'})
                    break;
              case 2: this.criasC.push({...this.crias[cr],clasificacion:'GRASA TIPO 2'})
                    break;
              case 3: this.criasC.push({...this.crias[cr],clasificacion:'GRASA TIPO 1'})
                    break;
            }
            //console.log(this.c)
            //console.log(this.crias[cr]['nombre'])
          }
          /*** */
        }
      },error =>{
        console.log(error)
      }
    );
  }
  seleccionTipoBusqueda(e:any){//Limpiar input del tipo de busqueda
    this.nombreCria='';
    this.idCria='';
    this.nombreProveedor='';
  }

  buscaCriaID(id_cria:number){
    this.clasificacion="";
    let contador=0;
    this._criaService.getCriaID(id_cria).subscribe(
      response =>{
        if(response.status == 'success'){

          this.detallesCria = response.cria

          if(this.detallesCria[0]['peso'] >= 15 && this.detallesCria[0]['peso'] <= 25){
            contador++;
          }
          if(this.detallesCria[0]['colorMusculo'] >= 3 && this.detallesCria[0]['colorMusculo'] <= 5){
            contador++;
          }
          if(this.detallesCria[0]['marmoleo'] == 1 || this.detallesCria[0]['marmoleo'] == 2){
            contador++;
          }
          
           switch(contador){
            case 0: this.clasificacion="GRASA TIPO 2"
                   break;
             case 1: this.clasificacion="GRASA TIPO 2"
                   break;
             case 2: this.clasificacion="GRASA TIPO 2"
                   break;
             case 3: this.clasificacion="GRASA TIPO 1"
                   break;
           }
          
          //console.log(this.detallesCria)
        }
      }, error =>{
        console.log(error)
      }
    )
  }
  registraSensor(FormRegistraSensor:any){
    if(this.sensor.id_sensor == 0 || this.sensor.id_sensor == null){
      this._criaService.registraSensor(this.sensor,this.detallesCria[0]['id_cria']).subscribe(
        response=>{
          
          this.buscaCriaID(this.detallesCria[0]['id_cria'])
            this.toastService.show('Sensor registrado correctamente', { classname: 'bg-success text-light', delay: 3000 });
          
        }, error =>{
          console.log(error)
        }
      )
    } else{
      this._criaService.actualizaSensor(this.sensor,this.sensor.id_sensor).subscribe(
        response =>{
          this.toastService.show('Sensor actualziado correctamente', { classname: 'bg-success text-light', delay: 5000 }); 
        }, error =>{
          console.log(error)
        }
      )
    }
    
  }
  registraCuarentena(id_cria:number){
    this._criaService.agregaCuarentena(id_cria).subscribe(
      response =>{
        this.toastService.show('Cuarentena registrada correctamente', { classname: 'bg-success text-light', delay: 3000 });
        this.criasC=[]
        this.getTodoCrias()
      }
    )
  }
  quitaCuarentena(id_cria:number){
    this._criaService.quitaCuarentena(id_cria).subscribe(
      response =>{
        this.toastService.show('Cuarentena quitada correctamente', { classname: 'bg-success text-light', delay: 3000 });
        this.criasC=[]
        this.getTodoCrias()
      }
    )
  }
  // Modal
  open(content:any) {//abre modal detalles cria lg
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  
  }
  openEditaSensor(content:any) {//abre modal detalles cria lg
    this.ultimaActualizacion = this.detallesCria[0]['updated_at'];
    if(this.detallesCria[0]['id_sensor'] != null){
      this._criaService.getSensorID(this.detallesCria[0]['id_sensor']).subscribe( 
        response =>{
          this.senso = response.sensor

          this.sensor.id_sensor = this.senso[0]['id_sensor']
          this.sensor.freCardiaca = this.senso[0]['freCardiaca']
          this.sensor.freRespiratoria = this.senso[0]['freRespiratoria']
          this.sensor.preSanguinea = this.senso[0]['preSanguinea']
          this.sensor.temperatura = this.senso[0]['temperatura']
          
        }, error =>{
          console.log(error)
        }
      )
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  
  }
  private getDismissReason(reason: any): string {//cierra modal con teclado ESC o al picar fuera del modal

    this.sensor.id_sensor = 0
    this.sensor.freCardiaca = 0
    this.sensor.freRespiratoria = 0
    this.sensor.preSanguinea =""
    this.sensor.temperatura = 0
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
