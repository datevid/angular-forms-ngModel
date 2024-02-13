import { Component } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { Character } from '../../interface/Interfaz';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ListadoComponent,FormularioComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {
  characterList:Character[]=[
    {name:"David", power:10}
  ]
}
