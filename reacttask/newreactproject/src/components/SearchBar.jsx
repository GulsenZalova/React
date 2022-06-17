import React, { Component } from 'react'

export default class SearchBar extends Component {

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
                  onChange={this.props.searchmovieprops}
                  className='form-control' 
                   placeholder='Search a movie'
                   />

              </div>
           </div>
      </form>
    )
  }
}
