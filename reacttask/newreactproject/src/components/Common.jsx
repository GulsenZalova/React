import React  from "react";
import MovieList from "./MovieList"
import SearchBar from "./SearchBar"

class Common extends React.Component{
    state={
        movies:[]   
        ,
        searchQuery: ""
    }
     
    async componentDidMount(){
        const baseURL="http://localhost:3002/movies"
        const response=await fetch(baseURL)
        const data=await response.json()
        console.log(data)

        this.setState({
            movies:data
        })
    }
    

    deleteMovie=(movie)=>{
        const newMoviesList=this.state.movies.filter(
            m => m.id !== movie.id
        )

        // this.setState({
        //     movies:newMoviesList
        // })

        this.setState(state=>({
            movies:newMoviesList
        }))
    }

    searchMovie=(e)=>{
        this.setState({
            searchQuery: e.target.value
        })
    }
   
    render(){

       const filteredMovie=this.state.movies.filter(
        (movie)=>{
            return movie.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) === true
        })
        return (
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie}/>
                    </div>
                </div>
                <MovieList movies={filteredMovie}
                deleteMovieProp={this.deleteMovie}/>
            </div>
        )
    }
}
export default Common


