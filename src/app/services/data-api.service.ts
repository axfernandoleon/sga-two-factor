import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { NotaInterface } from '../models/nota';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) {
      this.notasCollection = afs.collection<NotaInterface>('notas');
      this.notas = this.notasCollection.valueChanges();
    }

  private notasCollection: AngularFirestoreCollection<NotaInterface>;
  private notas: Observable<NotaInterface[]>;

  getAllNotas() {
    return this.notas;
    // = this.notasCollection.snapshotChanges()
    // .pipe(map())
  }

  addNota() {

  }

  updateNota() {

  }

  deleteNota() {

  }
}
