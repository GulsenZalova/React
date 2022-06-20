import React, { Component } from 'react'

export default class Classcomponent extends Component {
  state={
    counter: 0
  } 
artır=()=>{
    this.setState({counter : this.state.counter+1})
}

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={()=>this.artır()}>Artır</button>
      </div>
    )
  }
}
