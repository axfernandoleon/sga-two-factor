import { Component, OnInit } from '@angular/core';
import { NotaInterface } from './../../../models/nota';
import { DataApiService } from './../../../services/data-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit {

  constructor(
    private dataApi: DataApiService
  ) { }

  private notas: NotaInterface[];

  ngOnInit() {
    this.getListNotas();
  }

  getListNotas() {
    this.dataApi.getAllNotas()
      .subscribe(notas => {
        this.notas = notas;
      });
  }

  onDeleteNota(idNota: string): void {
    const confirmacion = confirm('Seguro que deseas Eliminar?')
    if (confirmacion) {
      this.dataApi.deleteNota(idNota);
    }
  }

  onPreUpdateNota(nota: NotaInterface){
    this.dataApi.selectedNota = Object.assign({}, nota);
  }
}
