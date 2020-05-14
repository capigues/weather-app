export interface IWeather {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    };
    current: {
        temp_f: number;
        is_day: boolean;
        condition: {
            icon: string;
        };
        wind_mph: number;
        humidity: number;
        feelslike_f: number;
        vis_miles: number;
    };
}
