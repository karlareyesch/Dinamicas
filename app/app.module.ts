import {NgModule} from '@angular/core';
import {AppComponent }  from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule,FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import {Http,Headers} from '@angular/http';

//import {MaterialModule} from './MaterialAll/all';

import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdButtonModule} from '@angular2-material/button';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdRadioModule} from '@angular2-material/radio';
import {MdSliderModule} from '@angular2-material/slider';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdListModule} from '@angular2-material/list';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdCardModule} from '@angular2-material/card';
import {MdCoreModule} from '@angular2-material/core';
import {MdIconModule} from '@angular2-material/icon';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar';
import {MdInputModule} from '@angular2-material/input';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip';
import {MdMenuModule} from '@angular2-material/menu';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle';

import {HomeComponent} from './home/home.component';
import {RoutesAppRoutes} from './routesApp.routes';
import {DinamicasComponent} from './dinamicas/dinamicas.component';
import {LoginComponent} from './login/login.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {ParejasDetalleComponent} from './parejas/parejadetalle.component';
import {ParejasListComponent} from './equipo-interno/equipointernolista.component';
import {ParejasService} from './equipo-interno/equipointerno.service';
import {DinamicasService} from './dinamicas/dinamicas.service';
import {LoginService} from './login/login.service';
import {AuthenticationService} from './login/authentication.service'
import {AuthGuard} from './login/auth.guard'

import { fakeBackendProvider } from './login/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
 



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,  
    RouterModule.forRoot(RoutesAppRoutes),
    MdButtonToggleModule.forRoot(),
    MdButtonModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdRadioModule.forRoot(),    
    MdSidenavModule.forRoot(),
    MdListModule.forRoot(),   
    MdGridListModule.forRoot(),
    MdCardModule.forRoot(),
    MdCoreModule.forRoot(),
    MdIconModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdProgressBarModule.forRoot(),
    MdInputModule.forRoot(),
    MdTabsModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdTooltipModule.forRoot(),
    MdMenuModule.forRoot(),        
    MdSliderModule.forRoot(),
    MdSlideToggleModule.forRoot(),
      ],
  
  declarations: [
    AppComponent, 
    HomeComponent,
    DinamicasComponent,
    LoginComponent,
    UsuariosComponent,
    ParejasDetalleComponent,
    ParejasListComponent
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [    
    ParejasService,DinamicasService,LoginService, 
    AuthenticationService ,
    AuthGuard,   
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ]
})
export class AppModule {}










