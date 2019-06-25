import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  texto = 'ciudad de Madrid';
  id: any = 1;
  fecha: object = new Date();
  importe = 1236.678;
  aciertos = .097467;
  actor: object = {
    nombre: 'Robert',
    apellidos: 'De Niro',
    edad: 75
  };
  cantidad = 15757234.578678474;
  valor = 2;

  ngOnInit() {
    this.id = '000' + Number(this.id);
  }

  redondeo(n: number) {
    this.valor += n;
  }
}
