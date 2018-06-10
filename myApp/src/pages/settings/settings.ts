import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city:string;
  state:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
 this.storage.get('location').then((val)=>{
   if(val!= null){
     let location=JSON.parse(val);
     this.city=location.city;
     this.state=location.state;
   }else{
    this.city='Miami';
    this.state='FL';
   }
 })
  }



  ionViewCanEnter() {
    console.log('ionViewCanEnter SettingsPage');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter SettingsPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter SettingsPage');
  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave SettingsPage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave SettingsPage');
  }
  
  ionViewDidLeave() {
    console.log('ionViewDidLeave SettingsPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload SettingsPage');
  }

  saveForm(){
    let location={
      city:this.city
    }
    console.log('Location',location);

    //set data to ionic storage
    this.storage.set('location',JSON.stringify(location));

    this.navCtrl.push(HomePage);
  }







}
