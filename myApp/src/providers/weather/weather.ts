import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {


  apiKey='';
  
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    
  }

  getWeather(){
   return this.http.get('http://api.wunderground.com/api/0def10027afaebb7/conditions/q/CA/San_Francisco.json')
  }

}
