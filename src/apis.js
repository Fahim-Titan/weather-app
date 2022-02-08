export default {
    weatherURL: (apiKey, city) => {
        return `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}`
    }
}