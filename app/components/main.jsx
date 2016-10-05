import React, { Component } from 'react';
import Nav from 'Nav';

export default ({children}) =>{
      return(
        <div>
        <Nav/>
          <div className="row">
            <div className="columns medium-6 large-4 small-centered">
              {children}
            </div>
          </div>
        </div>
  )
};
