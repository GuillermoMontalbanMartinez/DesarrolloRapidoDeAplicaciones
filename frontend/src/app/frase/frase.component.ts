import { Component, OnInit } from '@angular/core';
import { FrasesService } from '../frases.service';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.scss']
})
export class FraseComponent implements OnInit {
  frases:string[] = [];
  frase: string = "";

  constructor(private frasesService: FrasesService) { }

  ngOnInit(): void {
    this.getFrase()
  }

  getFrase() {
    this.frasesService.getFrases().subscribe(data => {
      this.frases.push(data);
    });
    console.log(this.frases);
    console.log(this.frases[this.random(0, this.frases.length - 1)]);
    this.frase =  this.frases[this.random(0, this.frases.length - 1)];
    console.log(this.frase);
  }

  random(min: number, max: number): number{
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

}
