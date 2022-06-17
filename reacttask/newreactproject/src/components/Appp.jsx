import React from "react"
import SearchBar from "./SearchBar"
import MoviesList from "./MoviesList"
 class  Appp extends React.Component{

   // Aşağıdakı film məlumatları Apidən məlumat çəkənə qədər müvəqqəti istifadə üçün yazılıb.
   state={
      movies:[],
      searchQuery:""
     
   }
  async componentDidMount(){
      const baseURL="http://localhost:3002/movies"
      const response= await fetch(baseURL)
      console.log(response)
      const data = await response.json()
      console.log(data)
      this.setState({movies: data})
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