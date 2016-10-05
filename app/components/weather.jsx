import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import weatherMap from 'weatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(location) {
    this.setState({isLoading: true, errorMessage: undefined})
    weatherMap.getTemp(location)
      .then(temp => {
        this.setState({
          isLoading: false,
          location,
          temp
        })
      }, err => {
        this.setState({
          isLoading: false,
          errorMessage: err.message
        });
      });
}

  render(){
    // pulling vars off setState
    let { isLoading, location, temp, errorMessage } = this.state;
    let renderMessage = () => {
      if(isLoading){
        return <h3 className="text-center">Fetching Weather</h3>
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
    let renderError = () => {
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage} />
        )
      } else {
      }
    }
    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm search={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}

export default Weather;
