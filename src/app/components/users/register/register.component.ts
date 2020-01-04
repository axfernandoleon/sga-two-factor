import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  onAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      this.authService.isAuth().subscribe( user => {
        if (user){
          user.updateProfile({
            displayName: ''
          }).then(() => {
          }).catch((error) =>  console.log('error', error));
        }
      });
    }).catch(err => console.log('err', err.message));
  }

  onLoginGogle(): void{
    this.authService.loginGoogleUser()
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => console.log('err', err));
  }

  onLoginRedirect(): void{
    this.router.navigate(['admin/lista-notas']);
  }

}
