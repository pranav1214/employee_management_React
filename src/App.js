import React, {Component} from 'react';
import Cards from './Components/Card';
import {Spinner} from 'react-bootstrap';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';

const name = "Pranav";

class App extends Component{
  constructor(){
    super();

    this.state={
      isLoggedIn:false
    }
  }

onLoginHandle=()=>{
  this.setState({isLoggedIn:true})
}

render()
{
  return(
    <div>
      {
        (this.state.isLoggedIn)?<Dashboard/>:<LoginForm onLogin={this.onLoginHandle}/>
      }
    </div>
  )
}
}


export default App;