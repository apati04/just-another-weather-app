import React, {Component} from 'react';



export default (props)=>{
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Here are the tools and resources used to build this app</p>
      <ul>
      <li><a href="http://foundation.zurb.com/">Foundation</a> - CSS Framework</li>
        <li><a href="https://facebook.github.io/react/">React</a> - UI</li>
        <li><a href="http://openweathermap.org/">Open Weather Map</a> - Weather API</li>
        </ul>
    </div>
  )
}
