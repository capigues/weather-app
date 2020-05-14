import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWeather } from '../weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  // Input and Output
  public weatherDetails;
  public showWeather = false;
  @Input() location;
  @Output() childEvent = new EventEmitter();


  constructor(private __weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  // Outputting location to app.component via (childEvent) in app.component
  sendLocation(location) {
    if (location === '') {
      alert('Enter a city to get the temperature');
      this.showWeather = false;
    } else {
      this.childEvent.emit(location);
      this.__weatherService.getWeatherDetails(location).subscribe(data => {
      this.weatherDetails = data;
      this.showWeather = true;
      });
    }
  }

}
