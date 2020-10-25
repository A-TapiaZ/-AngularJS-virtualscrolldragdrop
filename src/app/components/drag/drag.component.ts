import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../../models/pais.model';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  Listapaises:Pais[]=[];

  constructor(private http:HttpClient) { 
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (paises:Pais[]) => {
        this.Listapaises=paises
        console.log(this.Listapaises);
      })
  }

  ngOnInit(): void {    
  }

  drop(evento:CdkDragDrop<any>){
    
    // console.log(evento);

    // este es uno de los metodos de la libreria cdkdrop,el cual cambia el orden del array dependiendo de donde el usuario ponga el item en la lista.
    moveItemInArray(this.Listapaises,evento.previousIndex,evento.currentIndex);

    // Ya despues de haber hecho esto lo que queda es guardalo(actualizarlo) donde sea que lo estemos almacenando.

  }
}
