import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import weatherMap from 'openWeatherMap';

class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }

  }
  handleSearch(name){
    this.setState({isLoading: true})
    weatherMap.getTemp(name)
      .then(data => {
        const {name} = data;
        const {temp} = data.main;
        this.setState({
          isLoading: false,
          name,
          temp
        })
      },
      err => {
        this.setState({
          isLoading: false
        });
        console.log(err);
      });
}

  render(){
    // pulling vars off setState
    const { isLoading, name, temp } = this.state;
    let renderMessage = () => {
      if(isLoading){
        return <h3>fetching weather</h3>
      } else if(temp && name) {
        return <WeatherMessage feels={temp} place={name}/>
      }
    }
    return(
      <div>
        <h3>Get Weather</h3>
        <WeatherForm search={this.handleSearch.bind(this)}/>
        {renderMessage()}
      </div>
    )
  }
}

export default Weather;
