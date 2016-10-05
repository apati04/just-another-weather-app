import React, {Component} from 'react';

class WeatherForm extends Component {

  render(){

    return (
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          let location = this.refs.location.value;
          if(location.length > 0){
            this.refs.location.value = "";
            this.props.search(location);
          }
        }}>
          <input type="search" placeholder="Search weather by city" ref="location"/>
          <button className="button expanded hollow" type="submit">Get Weather</button>
        </form>
      </div>
    )
  }
}






export default WeatherForm;
