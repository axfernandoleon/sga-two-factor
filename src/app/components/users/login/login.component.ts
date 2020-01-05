import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
    ) { }

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  onLogin(): void{
    console.log('email', this.email);
    console.log('password', this.password);
    this.authService.loginEmailUser(this.email, this.password)
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.message));
  }

  onLoginGogle(): void{
    this.authService.loginGoogleUser()
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => console.log('err', err));
  }

  onLogout(){
    this.authService.logoutUser();
  }

  onLoginRedirect(): void{
    this.router.navigate(['admin/lista-notas']);
    
  }

}
