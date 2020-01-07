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
  public nombres: string = '';
  public apellidos: string = '';
  ngOnInit() {
  }

  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.authService.isAuth().subscribe(user => {
          console.log(user.uid);
          const data = {
            id: user.uid,
            email: user.email,
            nombres: this.nombres + " " + this.apellidos
          };
          this.authService.updateUserData(user, data);
          if (user) {
            user.updateProfile({
              displayName: ''
            }).then(() => {
            }).catch((error) => console.log('error', error));
          }
        });
      }).catch(err => console.log('err', err.message));
  }

  onLoginGogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        const data = {
          id: res.user.uid,
          email: res.user.email,
          nombres: res.user.displayName,

        };
        this.authService.updateUserData(res.user, data);

        this.onLoginRedirect();
      }).catch(err => console.log('err', err));
  }
  onLoginRedirect(): void {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.authService.isUserRol(auth.uid).subscribe(userRole => {

          const isAdmin = Object.assign({}, userRole.rol).hasOwnProperty('admin');
          const isDocente = Object.assign({}, userRole.rol).hasOwnProperty('docente');
          if (isDocente) {
            this.router.navigate(['admin/lista-notas']);
          } else if (isAdmin) {
            this.router.navigate(['admin/roles']);
          } else {

          }

        })
      }
    })


  }

}
