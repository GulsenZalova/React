import React  from "react";
import MovieList from "./MovieList"
import SearchBar from "./SearchBar"

class Common extends React.Component{
    state={
        movies:[
            {
                "id":1,
                "name":"Kino 1",
                "rating":8.3,
                "overview":"Kino 1in mezmunu",
                "imageURL":"https://cdn1.ntv.com.tr/gorsel/vFwgb7p4AkuRTdsZS_ocFA.jpg?width=1000&mode=crop&scale=both"
            },
            {
                "id":2,
                "name":"Kino 2",
                "rating":10,
                "overview":"Kino 2in mezmunu",
                "imageURL":"https://cdn1.ntv.com.tr/gorsel/vFwgb7p4AkuRTdsZS_ocFA.jpg?width=1000&mode=crop&scale=both"
            },
            {
                "id":3,
                "name":"Kino 3",
                "rating":8,
                "overview":"Kino 3in mezmunu",
                "imageURL":"https://cdn1.ntv.com.tr/gorsel/vFwgb7p4AkuRTdsZS_ocFA.jpg?width=1000&mode=crop&scale=both"
            },
            {
                "id":4,
                "name":"Kino 4",
                "rating":9,
                "overview":"Kino 4in mezmunu",
                "imageURL":"https://cdn1.ntv.com.tr/gorsel/vFwgb7p4AkuRTdsZS_ocFA.jpg?width=1000&mode=crop&scale=both"
            },
        ]
    }
    render(){
        return (
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar/>
                    </div>
                </div>
                <MovieList movies={this.state.movies}/>
            </div>
        )
    }
}
export default Common


