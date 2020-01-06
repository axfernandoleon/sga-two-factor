import { Component, OnInit } from '@angular/core';
import { NotaInterface } from './../../../models/nota';
import { DataApiService } from './../../../services/data-api.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit {
  isDocente: boolean;

  constructor(
    private dataApi: DataApiService,
    private authService: AuthService
  ) { }

  private notas: NotaInterface[];

  ngOnInit() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.authService.isUserRol(auth.uid).subscribe(userRole=> {
            this.isDocente= Object.assign({}, userRole.rol).hasOwnProperty('docente')
            
            if (this.isDocente) {
              this.getListNotas();
            }
            
        })
      }
    })
    
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
