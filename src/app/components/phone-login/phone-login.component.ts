
import { WindowService } from './../../services/window.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

export class PhoneNumber {
  country: string;
  // area: string;
  // prefix: string
  line: string

  get e593(){
    const num = this.country + this.line
    return `+${num}`
  }
}

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {

  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;

  constructor(
    private win : WindowService,
    private router: Router
    ) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }

  sendLoginCode(){
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e593;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {
              this.windowRef.confirmationResult = result;
            })
            .catch(error => console.log(error));
  }

  verifyLoginCode() { 
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {
                    // this.user = result.user;
                    this.onLoginRedirect();
                  })
                  .catch (error => console.log(error, "Codigo incorrecto"));
  }


  onLoginRedirect(): void{
    // this.router.navigate(['admin/phone-login']);
    this.router.navigate(['admin/lista-notas']);
  }

  redirecciona(): void {
    if (this.verificationCode.length > 6) {
      alert('Error Codigo Incorrecto')
      console.log('error')
    } else{
      
    }
    this.router.navigate(['admin/lista-notas']);
    
  }
}
