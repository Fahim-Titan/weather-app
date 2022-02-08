export default api = {
    weatherURL = (apiKey, city) => {
        return `api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}`
    }
}