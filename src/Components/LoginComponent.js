import React, { Component } from 'react';
import { postMethod } from '../services/apiMethodCallsService';
import { Redirect } from 'react-router-dom';

class LoginComponent extends Component {
  constructor(){
    super();
    this.state = {
      success: ''
    }
  }

  fetchData = () => {
    var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    if(!this.refs.email.value || !this.refs.password.value) {
      alert(`Email or Password can't be empty`);
    }else if(this.refs.password.value.length < 8) {
      alert(`Password should be 8 character long`);
    }else if (this.refs.email.value.match(mailformat)){
        const data = {
        email: this.refs.email.value,
        password: this.refs.password.value
      }

      postMethod('https://as-api.niflr.co/api/sign_in', data)
      .then(response => {
          this.setState({
            success: response.success,
          });
          localStorage.setItem('token', (response.token) ? response.token : '' );
          if(this.state.success === true){
            this.props.history.push('/categories');
          } 
      })
    }else{
       alert(`Email address is wrong`);
    }
  } 

  handleClick = (e) => {
    e.preventDefault();
    this.fetchData();
  }

  render() {
    if(localStorage.getItem('token') !== '') {
       //this.props.history.push('/categories');
      return <Redirect pus to='/categories'/>
    }
    return (
      <div className="Login">
          {(this.state.success === false) && <p>Either email or password is wrong!</p>}
        <div>
            <input ref="email" placeholder="User email"></input>
        </div>
        <div>
            <input ref="password" placeholder="Password" type="Password"></input>
        </div>
        <div>
            <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
