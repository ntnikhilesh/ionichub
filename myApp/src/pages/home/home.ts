import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherProvider} from '../../providers/weather/weather'
import {Storage} from '@ionic/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location:{
    city:string
  }
  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider, private storage: Storage) {

  }



 

  ionViewCanEnter() {
    console.log('ionViewCanEnter HomePage');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  ionViewWillEnter(){
    console.log('ionViewWillEnter HomePage');
    this.storage.get('location').then((val)=>{
      console.log('locatin from storage',val)
      if(val != null){
        this.location=JSON.parse(val);
      }else{
        this.location={
          city:'Miami'
        } 
      }
      this.weatherProvider.getWeather(this.location.city).subscribe(data=>{
        console.log('res1 :',data)
        this.weather=data;
      })
    })
   
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter HomePage');
  
}


  ionViewCanLeave() {
    console.log('ionViewCanLeave HomePage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave HomePage');
  }
  
  ionViewDidLeave() {
    console.log('ionViewDidEnter HomePage');
  }


  ionViewWillUnload() {
    console.log('ionViewWillUnload HomePage');
  }





}
