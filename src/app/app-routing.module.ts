import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetallesNotaComponent } from './components/detalles-nota/detalles-nota.component';
import { ListaNotasComponent } from './components/admin/lista-notas/lista-notas.component'
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page04Component } from './components/page04/page04.component';
import { RolesComponent } from './components/roles/roles.component';
import { AuthGuard } from "./guards/auth.guard";

//Rutas
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'nota/:id', component: DetallesNotaComponent},
  {path: 'admin/lista-notas', component: ListaNotasComponent, canActivate: [AuthGuard]},//Solo usuarios autenticados
  {path: 'admin/roles', component: RolesComponent , canActivate: [AuthGuard]}, //Solo usuarios autenticados
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent , canActivate: [AuthGuard]}, //Solo usuarios autenticados
  // {path: '**', component: Page04Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
