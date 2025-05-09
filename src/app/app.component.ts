import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CabecalhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formulario!: FormGroup;


  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      equipe: ['', Validators.required],
    });
  }

  equipes = [
    {label: 'Atrium', value: 'Atrium'},
    {label: 'Atos jiu-jitsu', value: 'Atos'},
    {label: 'Alliance jiu-jitsu',value: 'Alliance'},
    {label: 'Barão JJ',value: 'Barão'},
    {label: 'BPM JJ',value: 'BPM'},
    {label: 'Caio Terra',value: 'Caio'},
    {label: 'Carlson Gracie',value: 'Gracie'},
    {label: 'Check Mat',value: 'Check'},
    {label: 'Gracie Humaita',value: 'Humaita'},
    {label: 'Gracie Barra',value: 'Barra'},
    {label: 'GFTeam',value: 'GFT'},
    {label: 'Nova União',value: 'Nova União'},
    {label: 'Outra',value: 'Outra'}
  ]

    onSubmit() {
    if (this.formulario)
      if (this.formulario.valid) {
        console.log('Dados enviados:', this.formulario.value);
      } else {
        this.formulario.markAllAsTouched();
      }
  }
}
