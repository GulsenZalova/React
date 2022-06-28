import React  from "react";

class SearchBar extends React.Component{
    state={
        searchQuery:""
    }
    render(){
        return(
    <form onSubmit={(e)=>{e.preventDefault()}}>
        <div className='form-row mb-5 mt-5'>
             <div className='col-12'>
                  <input 
                  type="text" 
                  className='form-control' 
                   placeholder='Search a movie'
                    onChange={(e)=>{this.setState({searchQuery:e.target.value})}}   
                   />
            </div>
        </div>
    </form>
        )
    }
}
export default SearchBar