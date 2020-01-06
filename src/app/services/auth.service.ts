import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private afsAuth: AngularFireAuth, private db: AngularFirestore
  ) { }


  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData)
          console.log("Hola", userData);

          // this.updateUserData(credential.user);
        },
          err => reject(err));
    });
  }

  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  loginGoogleUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logoutUser() {
    return this.afsAuth.auth.signOut();
  }

  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  listRoles() {
    return this.db.collection('roles').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const id = a.payload.doc.id;
          return id;
        })
      )
    );
  }

  updateUserData(user, data) {
    const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${user.uid}`);
    return userRef.set(data, { merge: true })
  }
}
