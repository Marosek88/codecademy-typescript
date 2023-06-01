import { City, Cities, Weather } from './interfaces'

const cities = [
    { name: "Warsaw", lat: "52.25", long: "21.00" },
    { name: "Dublin", lat: "53.35", long: "-6.25" },
    { name: "Glasgow", lat: "55.85", long: "-4.25" },
    { name: "Gran Tarajal", lat: "28.21", long: "-14.02" },
    { name: "Rio Gallegos", lat: "-51.62", long: "-69.23" }
] as Cities

async function getWeather(city: City): Promise<Weather> {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.long}&current_weather=true`);
    const resJson = await res.json();
    return resJson as Weather;
}

function displayProcessedWeather(city: string, temperature: number, windspeed: number) {
    // TODO: write a function that will display (using console.log) each line of weather matrix as follows:
    // City: Warsaw, Temperature: 10 C, Wind speed: 15 km/h Gentle Breeze

    // Note: "Gentle Breeze" is a descriptive value of a wind force based on wind speed
    // Use https://www.rmets.org/metmatters/beaufort-wind-scale to map wind speeds to descriptive values
    // Hint: you can create another function that accepts wind speed and returns descriptive value
}

const processWeather = async () => {
    let weatherMatrix: [city: string, temperature: number, windspeed: number][] = new Array()

    for (let city of cities) {
        const cityWeather = await getWeather(city)
        weatherMatrix.push([city.name, cityWeather.current_weather.temperature, cityWeather.current_weather.windspeed])
    }

    // TODO: replace below line with a loop that iterates through weatherMatrix items 
    // and uses them in displayProcessedWeather function
    console.log(weatherMatrix);
};

processWeather();