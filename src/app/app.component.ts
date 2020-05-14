import { Component } from '@angular/core';
import { IWeather } from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  location: string;
  weatherDetails: IWeather;
}
