import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    Life1: number;
    Life2: number;

    constructor(public alertCtrl: AlertController) {
        this.Life1 = 20;
        this.Life2 = 20;
    }

    ionViewDidLoad() {
        this.startingLife();
    }

    startingLife() {
        let alert = this.alertCtrl.create({
            message: 'Choose Your Starting Life!',
            inputs: [{
                name: 'Life',
                placeholder: 'Starting Life'
            },],
            buttons: [{ text: 'Okay', handler: (data) => this.setLife(data.Life)}]

        });
        alert.present();
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

    set20() {
        this.Life1 = 20;
        this.Life2 = 20;
    }

    set30() {
        this.Life1 = 30;
        this.Life2 = 30;
    }

    set40() {
        this.Life1 = 40;
        this.Life2 = 40;
    }

    setLife(a) {
        this.Life1 = a;
        this.Life2 = a;
    }
}
