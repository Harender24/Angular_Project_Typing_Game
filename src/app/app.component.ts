import { Component } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText: string = lorem.sentence();
  inputValue: string = '';
  result: string = '';
  onInput(value: string) {
    this.inputValue = value
    console.log(this.randomText);
    console.log(value)
  }
  onCompare(randomLetter: string, inputLetter: string) {
    if (!inputLetter) {
      return 'pending';
    }

    return randomLetter === inputLetter ? 'correct' : 'incorrect';
  }
}
