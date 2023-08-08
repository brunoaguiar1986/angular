import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introducao';
  nome = "Bruno"
  vetor = ["São Paulo", "Corinthians", "Santos", "Palmeiras"];

  dados: any;
  ngOnInit() {
  fetch('assets/dados.json')
      .then(response => response.json())
      .then(data => {
        // Aqui você pode acessar os valores dentro do objeto "nomes"
        console.log(data);
        
        this.dados = data.nomes;
      });
      
}
}
