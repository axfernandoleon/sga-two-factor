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

  getListNotas(){
    this.dataApi.getAllNotas()
    .subscribe(notas => {
      this.notas = notas;
    });
  }

  onDeleteNota(){
    console.log('BORRAR LIBRO');
  }



}
