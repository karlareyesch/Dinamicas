import { ParejasListComponent } from './equipointernolista.component';
import { ParejasDetalleComponent } from './parejadetalle.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home/home.component';
import { DinamicasComponent } from './Dinamicas/dinamicas.component';


export const RoutesAppRoutes = [
//  { path: '',component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},  
  { path: 'login', component: LoginComponent},
  { path: 'parejas', component: ParejasListComponent },
  { path: 'pareja/:id', component: ParejasDetalleComponent },
  { path: 'dinamicas', component: DinamicasComponent},
]