import { ParejasListComponent } from './equipo-interno/equipointernolista.component';
import { ParejasDetalleComponent } from './parejas/parejadetalle.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DinamicasComponent } from './dinamicas/dinamicas.component';
import { UsuariosComponent} from './usuarios/usuarios.component';
import { AuthGuard } from './login/auth.guard';


export const RoutesAppRoutes = [
//  { path: '',component: HomeComponent},
  
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},  
  { path: 'login', component: LoginComponent},
  { path: 'parejas', component: ParejasListComponent },
  { path: 'pareja/:id', component: ParejasDetalleComponent },
  { path: 'dinamicas', component: DinamicasComponent},
  { path: 'usuarios',component: UsuariosComponent}

  
 // { path: '**', redirectTo: '' }
]