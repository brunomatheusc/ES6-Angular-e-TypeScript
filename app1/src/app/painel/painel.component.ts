import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Array<Frase> = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string;

  constructor() { }

  ngOnInit() {
  }

  atualizaResposta(resposta: Event): void {
    const text = (<HTMLInputElement>resposta.target).value;
    this.resposta = text;
  }
}
