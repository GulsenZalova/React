import React, { Component } from 'react'

export default class Classcomponent extends Component {
  state={
    counter: 0,
    counter2:0,
    timer:0
  } 

componentDidMount(){
    console.log("component yükləndi")
}
componentDidUpdate(prevsProps,prevsState){
    if(prevsState.counter !== this.state.counter){
        console.log("component update olundu")
    }else if(prevsState.counter2 !== this.state.counter2){
        console.log("component update olundu")
    }
}

componentDidMount(){
    const myTimer=setInterval(()=>{
        this.setState({timer: this.state.timer+1})
    },1000)
}

componentWillUnmount(){
    clearInterval(this.mytimer)
}

componentDidUpdate(){
    console.log("Timer:" + this.state.timer)
}
artır=()=>{
    this.setState({counter : this.state.counter+1})
}
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Counter: {this.state.counter}</p>
        <p>Counter2:{this.state.counter2}</p>
        <button onClick={()=>this.artır()}>Artır</button>
        <button onClick={()=>this.setState({counter2:this.state.counter2+1})}>Artır 2</button>
      </div>
    )
  }
}
