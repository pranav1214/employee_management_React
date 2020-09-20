import React from 'react';
import {Form, Button} from 'react-bootstrap';




const LoginForm =(props)=>
{
    const {onLogin}=props;

    return(
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email Address: </Form.Label>
    <Form.Control type="email" placeholder="Enter Email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password: </Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button onClick={()=>onLogin()} variant="primary" >
    LOGIN
  </Button>
</Form>
    )
}


export default LoginForm;