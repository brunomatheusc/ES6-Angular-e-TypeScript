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
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  constructor() { }

  ngOnInit() {
    this.atualizaRodada();
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta(){
    if (this.resposta == this.rodadaFrase.frasePtBr){
      alert('A tradução está correta');
      
      this.rodada++;
      this.progresso += (100 / this.frases.length);
      
    } else {
      alert('A tradução está errada');
    }
    
    if (this.rodada >= this.frases.length){
      alert('Você acertou todas as frases');
      return;
    } else {
      this.atualizaRodada();
    }
  }

  atualizaRodada(){
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
