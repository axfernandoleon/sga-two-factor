import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dataApi: DataApiService
  ) { }

  public notas = [];
  public nota = '';

  ngOnInit() {
    this.dataApi.getAllNotas().subscribe(notas => {
      console.log('Notas', notas);
      this.notas = notas;
    });
  }
}

