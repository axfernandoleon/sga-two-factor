import { NotaInterface } from './../models/nota';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { }

  private notasCollection: AngularFirestoreCollection<NotaInterface>;
  private notas: Observable<NotaInterface[]>;
  private notaDoc: AngularFirestoreDocument<NotaInterface>;
  private nota: Observable<NotaInterface>;
  public selectedBook: NotaInterface = {
    id: null
  };



  getAllNotas() {
    this.notasCollection = this.afs.collection<NotaInterface>('notas');
    return this.notas = this.notasCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as NotaInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneNota(idNota: string) {
    this.notaDoc = this.afs.doc<NotaInterface>(`notas/${idNota}`);
    return this.nota = this.notaDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists == false) {
        return null;
      } else {
        const data = action.payload.data() as NotaInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  } 

  addNota(nota: NotaInterface): void {
    this.notasCollection.add(nota);
  }

  updateNota(nota: NotaInterface): void {
    let idNota = nota.id;
    this.notaDoc = this.afs.doc<NotaInterface>(`notas/${idNota}`);
    this.notaDoc.update(nota);
  }

  deleteNota(idNota: string): void {
    this.notaDoc = this.afs.doc<NotaInterface>(`notas/${idNota}`);
    this.notaDoc.delete();

  }
}
