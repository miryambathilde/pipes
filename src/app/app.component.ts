import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero: number = 32.345677;
  porcentaje: number = 0.254589;
  precio: number = 128901;
  fechaActual: Date = new Date();
  miString: string = 'Hola que tal';
  alumnos: any = [];
  animales: any = [];

  miPromesa: Promise<any>;
  miString2: string = 'en un lugar de la mancha';

  miString3: string =
    'En un lugar de la mancha de cuyo nombre no puedo acordarme';

  constructor(private httpClient: HttpClient) {
    this.alumnos = [
      { nombre: 'Miryam', nota: 8 },
      { nombre: 'Sergio', nota: 9 },
      { nombre: 'Luca', nota: 7 },
      { nombre: 'Oliver', nota: 10 },
      { nombre: 'Lola', nota: 7 }
    ];

    this.animales = ['perro', 'gato', 'periquito', 'tortuga'];

    this.miPromesa = this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .toPromise();
  }

  ngOnInit() {
    setInterval(() => {
      this.fechaActual = new Date();
    });
  }
}
