import React, { Component } from 'react'
import LogoutButton from "./Logout"
import LoginButton from './Login'
import Greeting from './Greeting'

export default class Formcontrol extends Component {
  constructor(props){
    super(props)
    this.handleLoginClick=this.handleLoginClick.bind(this)
    this.handleLogoutClick=this.handleLogoutClick.bind(this)
    this.state=({isLoggedIn: false})
  }
  
  handleLoginClick(){
    this.setState({isLoggedIn:true})
  }
  handleLogoutClick(){
    this.setState({isLoggedIn:false})
  }
  
  render() 
  {
    const isLoggedIn =this.state.isLoggedIn
    let button;
    
    if(isLoggedIn){
      button= <LogoutButton onClick={this.handleLogoutClick}/>
    }else{
      button=<LoginButton onClick={this.handleLoginClick}/>
    }
    return (
      <div>
       <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}
