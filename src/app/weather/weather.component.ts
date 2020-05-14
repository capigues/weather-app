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
  @Input() userLocation;
  @Output() childEvent = new EventEmitter();


  constructor(private __weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  // Outputting location to app.component via (childEvent) in app.component
  sendLocation(location) {
    this.childEvent.emit(location);
    this.__weatherService.getWeatherDetails(location).subscribe(data => {
      this.weatherDetails = data;
    });
  }

}
