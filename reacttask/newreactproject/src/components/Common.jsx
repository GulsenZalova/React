import { data } from "autoprefixer";
import React  from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";
import axios, { Axios } from "axios";
import EditMovie from "./EditMovie";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


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
   
    addMovie = async (movie)=>{
      await axios.post(`http://localhost:3002/movies/`, movie) 
       this.setState(state =>({
        movies: state.movies.concat([movie])
       }))
    }

    render(){

       const filteredMovie=this.state.movies.filter(
        (movie)=>{
            return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
        }).sort((a,b)=>{
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0
        })
        return (
            <Router>
            <div className="container">
                <Switch>
                    <Route exact path='/' render={() => (
                        <>
                            <div className="row">
                                <div className="col-lg-12">
                                    <SearchBar searchMovie={this.setSearchQuery} />
                                </div>
                            </div>

                            <MovieList
                                movies={filteredMovie}
                                deleteMovieProp={this.deleteMovie} />
                        </>
                    )}>
                    </Route>

                    <Route  path='/add' render={({history}) => (
                        <AddMovie
                        onAddMovie={(movie)=>{this.addMovie(movie)
                            history.push("/")
                        }}
                        />
                    )}>
                    </Route>

                    <Route path="/edit/:id" component={EditMovie}/>
                </Switch>
            </div>
        </Router>
        )
    }
}
export default Common


