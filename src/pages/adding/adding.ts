import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Transaction } from '../../database';

/*
  Generated class for the Adding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html'
})
export class Adding {

	model : Transaction;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.model = new Transaction(null, "");
  }

  save(){
  	this.model.save();
  }

}
