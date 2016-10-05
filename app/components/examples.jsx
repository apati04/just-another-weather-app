import React from 'react';
import { Link } from 'react-router';


export default (props)=>{
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are examples to try out:</p>
      <ol>
        <li><Link to='/?location=Cypress'>Cypress, CA</Link></li>
        <li><Link to='/?location=Rio'>Rio, Brazil</Link></li>
      </ol>
    </div>

  )
}
