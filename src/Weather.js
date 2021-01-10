import React from 'react'
import { Component } from 'react'

class Weather extends Component {
    render(){
    return (
        <div style={{textAlign: 'center', marginBottom: '60%'}}>
            { this.props.city &&
                <div className="pesh">
                    <p>Location: {this.props.city}, {this.props.country}</p>
                    <p>Temperature: {this.props.temp}</p>
                    <p>Sunrise (Восход солнца): {this.props.sunrise}</p>
                    <p>Sunset (заход солнца): {this.props.sunset}</p>
                </div>
            }
        </div>
    )
        }
}

export default Weather
