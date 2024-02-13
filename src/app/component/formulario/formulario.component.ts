import { Component, NgModule } from '@angular/core';
import { Character } from '../../interface/Interfaz';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  character:Character;
  formgroup:FormGroup;
  name:string;
  constructor(private formBuilder:FormBuilder){
    this.character={name:"pepe1",power:11}
    this.name="hola"
    this.formgroup=this.formBuilder.group({
      apellido:new FormControl("Leon")
    })
  }
  
}
