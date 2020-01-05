import { NgForm } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { NotaInterface } from './../../models/nota';
import { DataApiService } from './../../services/data-api.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private dataApi: DataApiService
  ) { }

  ngOnInit() {

  }

  onSaveNota(notaForm: NgForm): void{
    this.dataApi.addNota(notaForm.value);
  }

}
