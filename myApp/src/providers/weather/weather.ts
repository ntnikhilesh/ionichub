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

  getWeather(city){
   return this.http.get('https://api.apixu.com/v1/current.json?key=4e5599d1e315484eb7984938181006&q='+city+'')
  }

}
