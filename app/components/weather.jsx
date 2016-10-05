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
  componentDidMount(){
    let {location} = this.props.location.query;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  componentWillReceiveProps({location}){
    let navSearch = location.query.location;
    if(navSearch && navSearch.length > 0){
      this.handleSearch(navSearch);
      window.location.hash = '#/';
    }
  }
  handleSearch(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    })
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
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm search={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}

export default Weather;
