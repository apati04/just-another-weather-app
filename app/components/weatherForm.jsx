import React, {Component} from 'react';

class WeatherForm extends Component {

  render(){
    const { search } = this.props;

    return (
      <div>
        <form onSubmit={
          (e)=>{
            e.preventDefault();
            // call parent function
            let searchText = this.refs.location.value;
            if(searchText.length > 0){
              this.refs.location.value = '';
              search(searchText);
            }
          }}>
          <input type="text" ref="location"/>
          <button className="button expanded hollow" type="submit">Get Weather</button>
        </form>
      </div>
    )
  }
}






export default WeatherForm;
