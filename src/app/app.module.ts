import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/Material';

import { AppComponent } from './app.component';
import { DinamicasCliRoutingModule} from './app-routing.module';
import { DinamicasComponent} from './dinamicas/dinamicas.component';
import { HomeComponent } from './home/home.component';
import { ParejasComponent } from './parejas/parejas.component';
import { ParejasDetalleComponent } from './parejas/parejas-detalle/parejas-detalle.component'; 
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';

import { AuthenticationService } from './shared/authentication.service'
import { AuthGuard } from './shared/auth.guard'
import { fakeBackendProvider } from './shared/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component'; 

import { ParejaService } from './parejas/shared/pareja.service';
import { DinamicaService } from './dinamicas/shared/dinamicas.service';
import { DinamicasDetalleComponent } from './dinamicas/dinamicas-detalle/dinamicas-detalle.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioLoginComponent,
    ParejasComponent,
    UsuarioListComponent,
    ParejasDetalleComponent,
    DinamicasComponent,
    DinamicasDetalleComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DinamicasCliRoutingModule,
    MaterialModule.forRoot(),
 
  ],
  providers: [DinamicaService,ParejaService,AuthGuard, AuthenticationService, fakeBackendProvider,
              MockBackend, BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
