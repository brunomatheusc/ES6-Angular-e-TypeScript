import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public jogoEmAndamento: boolean = true;
  title = 'app1';

  public encerrarJogo(tipo: string){
    this.jogoEmAndamento = false;
    console.log(tipo);
  }
}
