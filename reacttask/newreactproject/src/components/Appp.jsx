import React from "react"
import SearchBar from "./SearchBar"
import MoviesList from "./MoviesList"
 class  Appp extends React.Component{

   // Aşağıdakı film məlumatları Apidən məlumat çəkənə qədər müvəqqəti istifadə üçün yazılıb.
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
            "name":"Forsaj",
            "rating":9,
            "overview":"Cox mükəmməl filmdi",
            "imageUrl":"https://m.media-amazon.com/images/I/51NTDn8HT6L.jpg"
         },

         {
            "id":4,
            "name":"Çarlinin mələkləri",
            "rating":9,
            "overview":"Cox mükəmməl filmdi",
            "imageUrl":"https://m.media-amazon.com/images/I/51NTDn8HT6L.jpg"
         },

         {
            "id":5,
            "name":"Lena",
            "rating":7,
            "overview":"Cox mükəmməl filmdi",
            "imageUrl":"https://m.media-amazon.com/images/I/51NTDn8HT6L.jpg"
         },

         {
            "id":6,
            "name":"Cirtdan",
            "rating":6,
            "overview":"Cox mükəmməl filmdi",
            "imageUrl":"https://m.media-amazon.com/images/I/51NTDn8HT6L.jpg"
         }
      ],
      searchQuery:""
     
   }

   deletemovie=(movie)=>{
      const newmovieslist=this.state.movies.filter(
         m => m.id !== movie.id
      )

      this.setState({
         movies:newmovieslist
      })
   }
    
   searchMovie=(event)=>{
      // console.log(event.target.value)
      this.setState({searchQuery:event.target.value})
   }

    render(){
      let filterdMovies=this.state.movies.filter(
         (movie)=>{
            return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !==-1
         }
      )
      return (
   <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <SearchBar searchmovieprops={this.searchMovie}/>
        </div>
       </div>
       <MoviesList movies={filterdMovies}
       deletemoviesprops={this.deletemovie}
       />
   </div>
        
      )
    }
}
export default Appp