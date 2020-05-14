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
        condition: {};
        wind_mph: number;
        feelslike_f: number;
        uv: number;
    };
}
