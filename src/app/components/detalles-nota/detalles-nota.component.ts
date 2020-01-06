import { ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../services/data-api.service';
import { NotaInterface } from './../../models/nota';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-detalles-nota',
  templateUrl: './detalles-nota.component.html',
  styleUrls: ['./detalles-nota.component.css']
})
export class DetallesNotaComponent implements OnInit {

  constructor(
    private dataApi: DataApiService,
    private route: ActivatedRoute 
  ) { }

  public nota: NotaInterface = {};


  ngOnInit() {
    const idNota = this.route.snapshot.params['id'];
    this.getDetalles(idNota);
  }

  getDetalles(idNota: string):void {
    this.dataApi.getOneNota(idNota).subscribe( nota => {
      this.nota = nota;
    });
  }

}
