import React from "react"
import SearchBar from "./SearchBar"
import MoviesList from "./MoviesList"
 class  Appp extends React.Component{
   state={
      movies:[
         {
            "id":1,
            "name":"Harry Potter",
            "rating":8.3,
            "overview":"Cox maraqlı filmdi",
            "imageUrl":"https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_FMjpg_UX1000_.jpg"
         },
      
         {
            "id":2,
            "name":"Lord of the Rings",
            "rating":8,
            "overview":"Cox Əla filmdi",
            "imageUrl":"https://upload.wikimedia.org/wikipedia/tr/thumb/4/40/Y%C3%BCz%C3%BCklerinEfendisi%27%C4%B0kiKule-film.jpg/220px-Y%C3%BCz%C3%BCklerinEfendisi%27%C4%B0kiKule-film.jpg"
         
         },
      
         {
            "id":3,
            "name":"Tom Sawyer",
            "rating":9,
            "overview":"Cox mükəmməl filmdi",
            "imageUrl":"https://m.media-amazon.com/images/I/51NTDn8HT6L.jpg"
         }
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
       <MoviesList movies={this.state.movies}/>
   </div>
        
      )
    }
}
export default Appp