import { Component, OnInit } from '@angular/core';
import { FrasesService } from '../frases.service';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.scss']
})
export class FraseComponent implements OnInit {
  frases:any[] = [];
  frase: any = "";

  constructor(private frasesService: FrasesService) { }

  ngOnInit(): void {
    this.getFrase()
  }

  getFrase() {
    this.frasesService.getFrases().subscribe(data => {
      this.frases.push(data);
      this.frase = this.frases[0][this.random(0,49)].frase;
    });

  }

  random(min: number, max: number): number{
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

}
