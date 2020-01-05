import { Component, OnInit, TemplateRef } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import { UserInterface } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  users: Observable<any>;
  roles: Observable<any>;
  aux;
  modalRef: BsModalRef;
  rolRef;
  idRef;
  alerts: any[] = [{
    type: 'success',
    msg: "Cargado todos los datos",
    timeout: .01
  }];
  constructor(private db: AngularFirestore, private modalService: BsModalService, private auth: AuthService) {


  }

  ngOnInit() {
    this.listUser();
    this.listRoles();
  }

  listUser() {
    this.users = this.db.collection('users').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data() as UserInterface;
          return { id, ...data };
        })
      )
    );
  }

  listRoles() {
    this.auth.listRoles().subscribe(res => this.aux = res)
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
    this.db
      .collection("users")
      .doc(this.idRef)
      .update({
        rol: this.rolRef
      });
    // Actualiza la tabla de roles
    this.db.collection("roles").doc(this.rolRef).update({ [this.idRef]: true });
    
    // this.db.collection('roles', (ref) => ref.where(this.idRef, '==', true).limit(1)).get().subscribe(users => {
    //   console.log(users.size);
      
    //   if (users.size == 0) {
        
    //     console.log("listo");
        
    //   }else {
    //     console.log("ya tiene el rol");
        
    //   }
    // });
 
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
  }
  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
  decline() {
    this.modalRef.hide();
  }
}
