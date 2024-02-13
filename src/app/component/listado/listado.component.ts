import { Component, Input } from '@angular/core';
import { Character } from '../../interface/Interfaz';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  @Input()
  characterList:Character[]=[]
}
