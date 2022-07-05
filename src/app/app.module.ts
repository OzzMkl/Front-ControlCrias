import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistraCriaComponent } from './components/registra-cria/registra-cria.component';
import { VerCriasComponent } from './components/ver-crias/ver-crias.component';
import { RegistraEmpleadoComponent } from './components/registra-empleado/registra-empleado.component';
import { ToastContainerComponent } from './components/toast/toast-container/toast-container.component';
import { ProveedorPipe } from './pipes/proveedor.pipe';
import { VerCriasModuloComponent } from './components/ver-crias-modulo/ver-crias-modulo.component';
import { VerCriasEnfermasComponent } from './components/ver-crias-enfermas/ver-crias-enfermas.component';
import { VerCriasTodoComponent } from './components/ver-crias-todo/ver-crias-todo.component';
import { NombreCriaPipe } from './pipes/nombre-cria.pipe';
import { NombreProveedorPipe } from './pipes/nombre-proveedor.pipe';
import { IdCriaPipe } from './pipes/id-cria.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    InicioComponent,
    RegistraCriaComponent,
    VerCriasComponent,
    RegistraEmpleadoComponent,
    ToastContainerComponent,
    ProveedorPipe,
    VerCriasModuloComponent,
    VerCriasEnfermasComponent,
    VerCriasTodoComponent,
    NombreCriaPipe,
    NombreProveedorPipe,
    IdCriaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
