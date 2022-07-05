import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistraEmpleadoComponent } from './components/registra-empleado/registra-empleado.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistraCriaComponent } from './components/registra-cria/registra-cria.component';
import { VerCriasComponent } from './components/ver-crias/ver-crias.component';
import { VerCriasModuloComponent } from './components/ver-crias-modulo/ver-crias-modulo.component';
import { VerCriasTodoComponent } from './components/ver-crias-todo/ver-crias-todo.component';
import { VerCriasEnfermasComponent } from './components/ver-crias-enfermas/ver-crias-enfermas.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout/:sure', component: LoginComponent},
  {path: 'registra-empleado', component: RegistraEmpleadoComponent},
  {path: 'registra-cria', component: RegistraCriaComponent},
  {path: 'ver-crias-modulo', component: VerCriasModuloComponent,
    children:
    [
      {path: 'ver-crias', component: VerCriasTodoComponent},
      {path: 'ver-crias-sanas', component: VerCriasComponent},
      {path: 'ver-crias-enfermas', component: VerCriasEnfermasComponent},
    ]},
  
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
