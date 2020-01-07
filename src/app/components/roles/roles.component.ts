import { Component, OnInit, TemplateRef } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import { UserInterface } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  [x: string]: any;
  users: Observable<any>;
  roles: Observable<any>;
  aux;
  modalRef: BsModalRef;
  rolRef;
  idRef;
  isAdmin;
  alerts: any[] = [{
    type: 'success',
    msg: "Cargado todos los datos",
    timeout: .01
  }];
  constructor(private db: AngularFirestore, private modalService: BsModalService, private authService: AuthService) {


  }

  ngOnInit() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.authService.isUserRol(auth.uid).subscribe(userRole=> {
            this.isAdmin= Object.assign({}, userRole.rol).hasOwnProperty('admin')
            console.log(this.isAdmin);
    
            if (this.isAdmin) {
              this.listUser();
              this.listRoles();
            }
            
        })
      }
    })
  }

  listUser() {
    this.users = this.authService.listUser();
  }

  listRoles() {
    this.authService.listRoles().subscribe(res => this.aux = res)
  }

  openModal(template: TemplateRef<any>, rol, id) {
    this.modalRef = this.modalService.show(template);
    this.rolRef = rol;
    this.idRef = id;
  }
  getID() {
    return this.idRef
  }
  confirm() {
    // Asigna el Rol
    const data = {
      rol: {
        [this.rolRef]: true
      }
    };
    const user = {
      uid: this.idRef
    }
    this.authService.updateUserData(user, data);

    this.modalRef.hide();
    this.alerts.push({
      type: 'info',
      msg: "Rol Actualizado",
      timeout: 3000
    });
  }

  deleteAccount(id) {
    this.db
      .collection("users")
      .doc(id)
      .delete();
    // this.auth.deleteUser(id);
  }
  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
  decline() {
    this.modalRef.hide();
  }
}
