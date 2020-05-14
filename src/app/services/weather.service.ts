import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeather } from '../weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  _url = 'http://api.weatherapi.com/v1/current.json?key=4d535ac98b264585aa5232300201305&q=';

  constructor(private http: HttpClient) { }

  // Getting the weather for location from Weather API

  getWeatherDetails(location): Observable<IWeather[]> {
    return this.http.get<IWeather[]>(`${this._url}${location}`);
  }
} 
