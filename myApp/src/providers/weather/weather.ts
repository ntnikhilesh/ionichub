import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
