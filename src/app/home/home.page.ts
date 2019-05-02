import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    Life1: number;
    Life2: number;

    constructor() {
        this.Life1 = 20;
        this.Life2 = 20;
    }

    AddNumber1() {
        this.Life1++;
    }
    AddNumber2() {
        this.Life2++;
    }

    TakeNumber1() {
        this.Life1--;
    }
    TakeNumber2() {
        this.Life2--;
    }


    Reset() {
        this.Life1 = 20;
        this.Life2 = 20;
    }


}
