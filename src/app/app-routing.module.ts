import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetallesNotaComponent } from './components/detalles-nota/detalles-nota.component';
import { ListaNotasComponent } from './components/admin/lista-notas/lista-notas.component'
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page04Component } from './components/page04/page04.component';

//Rutas
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'offers', component: OffersComponent}, //Solo usuarios autenticados
  {path: 'notas:/id', component: DetallesNotaComponent},
  {path: 'admin/lista-notas', component: ListaNotasComponent},//Solo usuarios autenticados
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent}, //Solo usuarios autenticados
  {path: '**', component: Page04Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
