import { Component } from '@angular/core';
import {IncrementerService} from './incrementer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music GCSE Vocab';

  constructor(private incrementer: IncrementerService) {

  }

  paddlePushed(message) {
    this.incrementer.changeMessage(message);
  }


}

