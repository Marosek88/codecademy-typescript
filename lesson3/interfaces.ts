interface City {
    name: string;
    lat: string;
    long: string
}

interface Cities extends Array<City> { }

interface Weather {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_weather: {
        temperature: number,
        windspeed: number,
        winddirection: number,
        weathercode: number,
        is_day: number,
        time: string
    };
};

export {
    City,
    Cities,
    Weather,
}