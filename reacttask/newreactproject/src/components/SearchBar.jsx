import React  from "react";

class SearchBar extends React.Component{
    render(){
        return(
    <form onSubmit={(e)=>{e.preventDefault()}}>
        <div className='form-row mb-5 mt-5'>
             <div className='col-12'>
                  <input 
                  type="text" 
                  className='form-control' 
                   placeholder='Search a movie'
                    onChange={this.props.searchMovieProp}   
                   />
            </div>
        </div>
    </form>
        )
    }
}
export default SearchBar