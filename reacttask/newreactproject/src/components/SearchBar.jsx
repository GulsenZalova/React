import React, { Component } from 'react'

export default class SearchBar extends Component {

state={
  searchQuery:""
}

stopupdate=(event)=>{
  event.preventDefault()
}
  render() {
    return (
      <form onSubmit={this.stopupdate}>
           <div className='form-row mb-5 mt-5'>
              <div className='col-12'>
                  <input 
                  type="text" 
                  onChange={(event)=> this.setState({searchQuery: event.target.value})}
                  className='form-control' 
                   placeholder='Search a movie'
                   value={this.state.searchQuery}
                   />

              </div>
           </div>
      </form>
    )
  }
}
