import axios from 'axios';

const ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?'
const UNITS = 'units=imperial';

const API_KEY = '36ceeaff702235485e9a16966fa0b6a2'

module.exports = {
  getTemp(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${ROOT_URL}q=${encodedLocation},us&appid=${API_KEY}&${UNITS}`;

    return axios.get(requestUrl).then( res=> {
        if(res.data.cod&& res.data.message){
          throw new Error( res.data.message);
        } else {
          return res.data;
        }
      },(res)=>{
      throw new Error(res.data.message);
      });
  }
}
