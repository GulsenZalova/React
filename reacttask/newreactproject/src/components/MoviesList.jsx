import React, { Component } from 'react'

export default class Movieslist extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-lg-4'>
            <div className='card mb-4 shadow-sm'>
                <img src="https://m.media-amazon.com/images/I/51NTDn8HT6L.jpg" className='card-img-top'    alt="Sample Movie" />
                <div className='card-body'>
                    <h5 className='card-title'>Sample Movie</h5>
                    <p className='card-text'>Smple Movie Description</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <button type='button' className='btn btn-md btn-outline-danger'>Delete</button>
                        <h2><span className='badge bg-info'>8</span></h2>
                    </div>

                </div>
            </div>
        </div>
      </div>
    )
  }
}
