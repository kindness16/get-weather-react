import React, { Component } from 'react'
import WeatherForm from './WeaterForm'
import Weather from './Weather'
import './App.css'
const Api = 'b4b4d6e25b29a6eac35bdf7ca61610cd'
class App extends Component {
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        weather: undefined,
        error: ''
    }
    getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}`)
            const data = await api_url.json()

            let sunset = data.sys.sunset
            let date = new Date()
            date.setTime(sunset)
            let sunset_date = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds()
            let sunrise = data.sys.sunrise
            let dates = new Date()
            dates.setTime(sunrise)
            let sunrise_date = dates.getHours() + ':' + dates.getMinutes() + ":" + dates.getSeconds()
            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: ''
            })
        } else {
            alert('Вы не ввели город')
        }
    }

    render() {
        return (
            <div className="main">
                <div>
                    <h1 className="main-text">Weahter Application</h1>
                    <h3 style={{textAlign: 'center', color: 'blue'}}>Find out the weather in your city</h3>
                </div>
                <div>
                    <WeatherForm weatherMethod={this.getWeather} />
                    <Weather
                        temp={this.state.temp}
                        city={this.state.city}
                        country={this.state.country}
                        sunrise={this.state.sunrise}
                        sunset={this.state.sunset}
                        error={this.state.error}
                    />
                </div>
            </div>
        )
    }
}
export default App