import {Component, OnInit} from '@angular/core';
import * as vocabData from '../assets/data.json';
import {IncrementerService} from '../incrementer.service';


interface Card {
  id_vocab: number;
  title_vocab: string;
  description_vocab: string;
}

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  data: Card[] = [];
  cardIndex = 0;
  frontShowing = true;

  constructor(private incrementer: IncrementerService) {
    for (let i = 0; i < vocabData.data.length; i++) {
      this.data.push(vocabData.data[i]);
    }
    this.data = this.shuffle(this.data);
  }

  ngOnInit(): void {
    this.incrementer.currentMessage.subscribe(message => {
        switch (message) {
          case 'up': {
            this.frontShowing = true;
            this.cardIndex++
            break;
          }
          case 'down': {
            this.frontShowing = true;
            this.cardIndex--
            break;
          }
          case 'flip': {
            this.frontShowing = !this.frontShowing;
            break;
          }
          default: {
            break;
          }
        }
      }
    );
  }

  shuffle(array) {
    let j: number;
    let x: number;
    let i: number;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  }

}
