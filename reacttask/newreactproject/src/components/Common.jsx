import { data } from "autoprefixer";
import React  from "react";
import MovieList from "./MovieList"
import SearchBar from "./SearchBar"
import axios, { Axios } from "axios"

class Common extends React.Component{
    state={
        movies:[]   
        ,
        searchQuery: ""
    }
     
    //Get with Fetch
    async componentDidMount(){
        // fetch("http://localhost:3002/movies")
        //     .then((response)=>response.json())
        //     .then(data=>this.setState({
        //         movies:data
        //     }))
    }
    
    // Get with Axios
    async componentDidMount(){
        const response= await axios.get("http://localhost:3002/movies")
        this.setState({movies:response.data})
    }

    // Delete with Fetch

    // deleteMovie= async (movie)=>{
    //     fetch(`http://localhost:3002/movies/${movie.id}`,{
    //         method:"DELETE"
    //     })
    //     const newMoviesList=this.state.movies.filter(
    //         m => m.id !== movie.id
    //     )
    //     // this.setState({
    //     //     movies:newMoviesList
    //     // })

    //     this.setState(state=>({
    //         movies:newMoviesList
    //     }))
    // }

    // Delete with Axios
    deleteMovie= async (movie)=>{
        axios.delete(`http://localhost:3002/movies/${movie.id}`)
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


