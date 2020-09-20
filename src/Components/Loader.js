import React from 'react';
import {Spinner} from 'react-bootstrap';


const Loader=()=>
{
    return(
        <div style={{textAlign:"center",margin:"10px"}}>
  <Spinner animation="grow" size="lg" />
  </div>
)
}

export default Loader;