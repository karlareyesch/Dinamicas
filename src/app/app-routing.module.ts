import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { DinamicasComponent } from './dinamicas/dinamicas.component';
import { DinamicasDetalleComponent } from './dinamicas/dinamicas-detalle/dinamicas-detalle.component';
import { HomeComponent } from './home/home.component';
import { ParejasComponent} from './parejas/parejas.component';
import { ParejasDetalleComponent} from './parejas/parejas-detalle/parejas-detalle.component';
import { UsuarioLoginComponent} from './usuario/usuario-login/usuario-login.component';

import { AuthGuard } from './shared/auth.guard'


const routes: Routes = [
 { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},  
  { path: 'login', component: UsuarioLoginComponent},
  { path: 'parejas', component: ParejasComponent },
  { path: 'pareja/:id', component: ParejasDetalleComponent },
  { path: 'dinamicas', component: DinamicasComponent},
  { path: 'dinamicas/:id', component: DinamicasDetalleComponent},
 // { path: 'usuarios',component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class DinamicasCliRoutingModule {}