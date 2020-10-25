import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.component.html',
  styleUrls: ['./virtualscroll.component.css']
})
export class VirtualscrollComponent implements OnInit {


  // Esto es una referencia a un elmento html, con el cual voy a podeer acceder a todos sus metodos y propiedades.
  @ViewChild(CdkVirtualScrollViewport) viewport:CdkVirtualScrollViewport;


  personas = Array(500).fill(0);


  constructor() { }

  ngOnInit(): void {
  }

  irFinal(){
    this.viewport.scrollToIndex(this.personas.length);
  }
  irMedio(){
    this.viewport.scrollToIndex(this.personas.length/2);
  }
  irInicio(){
    this.viewport.scrollToIndex(0);
  }
}
