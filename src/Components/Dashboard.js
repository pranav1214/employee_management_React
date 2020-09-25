import React, { Component } from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import EmployeeList from './EmployeeList';
import Loader from './Loader';

class Dashboard extends Component
{
    constructor()
    {
        super();

        this.state={
            allUsers:[],
            users:[],
            loading:true
        }
    }

onInputChange(e)
{
    const searchValue=e.target.value.toLowerCase();

    const result= this.state.allUsers.filter((user)=>
    {
        const {name, mail,picture}=user;
        const fullName=`${name.title} ${name.first} ${name.last}`
        const isIncluded=fullName.toLowerCase().includes(searchValue);

        if(isIncluded)
        return true;

        return false;
    });

    this.setState({
        users:result
    })
}

componentDidMount()
{
    fetch("https://randomuser.me/api/?results=50")
    .then(data=>data.json())
    .then(data=>{
        this.setState({
            loading:false,
            users:data.results,
            allUsers:data.results
        })
    })
}
showEmployeeList()
{
    if(this.state.loading)
    return <Loader/>

    if(this.state.users.length)
    return <EmployeeList users={this.state.users}/>

    return <div><h3>No Employess Found!!</h3></div>
}

render()
{
    return(
        <div  style={{textAlign:"center"}}>
        <div style={{margin:"15px"}} >
        <h1>Employee Dashboard</h1>
        <InputGroup onChange={(e)=>this.onInputChange(e)} className="mb-3">
          <FormControl
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </div>

        {this.showEmployeeList()}
        </div>
    )
}
}

export default Dashboard;
