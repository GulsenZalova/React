import React  from "react";
import MovieList from "./MovieList"
import SearchBar from "./SearchBar"

class Common extends React.Component{
    state={
        movies:[
            {
                "id":1,
                "name":"Bad Boys for life",
                "rating":8.3,
                "overview":"Kino 1in mezmunu",
                "imageURL":"https://cdn1.ntv.com.tr/gorsel/vFwgb7p4AkuRTdsZS_ocFA.jpg?width=1000&mode=crop&scale=both"
            },
            {
                "id":2,
                "name":"Little Women",
                "rating":10,
                "overview":"Kino 2in mezmunu",
                "imageURL":"https://cdn1.ntv.com.tr/gorsel/0_xboVeudEyw2GqkpDoUdw.jpg?width=1000&mode=crop&scale=both"
            },
            {
                "id":3,
                "name":"RamPage",
                "rating":8,
                "overview":"Kino 3in mezmunu",
                "imageURL":"https://cdn1.ntv.com.tr/gorsel/qljKxJVP1E6XPJXobqgkrg.jpg?width=674&height=1000&mode=crop&scale=both&v=20180503042121012"
            },
            {
                "id":4,
                "name":"Terminator",
                "rating":9,
                "overview":"Kino 4in mezmunu",
                "imageURL":"https://cdn1.ntv.com.tr/gorsel/abG_4kFMnkKVhAALHnfwWg.jpg?width=1000&mode=crop&scale=both"
            },
        ]
    }
     
    deleteMovie=(movie)=>{
        const newMoviesList=this.state.movies.filter(
            m => m.id !== movie.id
        )

        this.setState({
            movies:newMoviesList
        })
    }
   
    render(){
        return (
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar/>
                    </div>
                </div>
                <MovieList movies={this.state.movies}
                deleteMovieProp={this.deleteMovie}/>
            </div>
        )
    }
}
export default Common


