import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
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
  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.atualizaRodada();
    this.iniciarTentativas();
  }

  ngOnDestroy(){
    console.log("Painel destruído");
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta(){
    // Verifica se acertou a tradução
    if (this.resposta == this.rodadaFrase.frasePtBr){
      // Incrementa a rodada e atualiza a porcentagem do progresso
      this.rodada++;
      this.progresso += (100 / this.frases.length);
      
      // Verifica se é a última rodada
      if (this.rodada >= this.frases.length){
        this.iniciarTentativas();
        this.encerrarJogo.emit('vitoria');
        return;
      } else {
        this.atualizaRodada();
      }
    } else {
      this.tentativas--;

      if (this.tentativas == -1){
        this.iniciarTentativas();
        this.encerrarJogo.emit('derrota');
      }
    }    
  }

  atualizaRodada(){
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

  iniciarTentativas(){
    this.tentativas = this.frases.length - 1;
  }
}
