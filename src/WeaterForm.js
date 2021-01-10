import React from 'react'
import { Component } from 'react'

class WheaterForm extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <form onSubmit={this.props.weatherMethod}>
                    <input style={{border: 'none', outline: 'none', width: '300px', height: '40px', borderRadius: '10px 10px'}} type="text" name="city" placeholder="search-city" />
                    <button className="btn" style={{border: 'none', width: '40px', height: '40px', borderRadius: '10px 10px'}}><i class="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}

export default WheaterForm
