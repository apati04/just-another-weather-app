import React, { Component } from 'react';
import Nav from 'Nav';

export default ({children}) =>{
      return(
        <div>
        <Nav/>
        <h6>Main Component</h6>
        {children}
        </div>
  )
};
