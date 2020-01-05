import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from './../../services/data-api.service';
import { NotaInterface } from './../../models/nota';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  // @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveNota(notaForm: NgForm): void{
    if (notaForm.value.id == null) {
      //nuevo
      this.dataApi.addNota(notaForm.value); 
    } else {
      // modificar
      this.dataApi.updateNota(notaForm.value);
    }
    notaForm.resetForm();
    // this.btnClose.nativeElement.click();
  }

}
