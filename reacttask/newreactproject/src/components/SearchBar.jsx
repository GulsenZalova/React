import React  from "react";

class SearchBar extends React.Component{
    render(){
        return(
    <form onSubmit={(e)=>{e.preventDefault()}}>
        <div className='form-row mb-5' style={{ "display": "flex"}}>
             <div className="col-10">
                  <input 
                  type="text" 
                  className='form-control' 
                   placeholder='Search a movie'
                    onChange={this.props.searchMovieProp}/>
            </div>
            <div className="col-2">
                <button type="button"
                 className="btn btn-md btn-danger" 
                 style={{ "display": "flex", "justifyContent": "flex-end"}}>Add Movie
                 </button>
            </div>
        </div>
    </form>
        )
    }
}
export default SearchBar