import {NgModule} from '@angular/core';
import {AppComponent }  from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule,FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {Http} from '@angular/http';
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

import {HomeComponent} from './Home/home.component';
import {RoutesAppRoutes} from './routesApp.routes';
import {DinamicasComponent} from './Dinamicas/dinamicas.component';
import {LoginComponent} from './Login/login.component';
import {ParejasDetalleComponent} from './parejadetalle.component';
import {ParejasListComponent} from './equipointernolista.component';
import {ParejasService} from './equipointerno.service';
import {DinamicasService} from './Dinamicas/dinamicas.service';

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
    //MaterialModule,   
      ],
  
  declarations: [
    AppComponent, 
    HomeComponent,
    DinamicasComponent,
    LoginComponent,
    ParejasDetalleComponent,
    ParejasListComponent
  ],
  bootstrap: [
    AppComponent,
  ],
  //providers: [    
  //  provideRouter(RoutesAppRoutes),ParejasService,DinamicasService
//  ]
})
export class AppModule {}










