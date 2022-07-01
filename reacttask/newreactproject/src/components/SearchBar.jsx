import React  from "react";
import { Link } from "react-router-dom";

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
                <Link 
                to="/add"
                type="button"
                 className="btn btn-md btn-danger" 
                 style={{ "display": "flex", "justifyContent": "flex-end"}}>Add Movie
                 </Link>
            </div>
        </div>
    </form>
        )
    }
}
export default SearchBar