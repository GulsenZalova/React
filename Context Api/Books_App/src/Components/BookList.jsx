import React from "react"
import "./BookList.css"
import Book from "./Book"
import BookContext from "../Contexts/BookContext"


class BookList extends React.Component{

    static contextType=BookContext

    render () {
        const books=this.context
         return(

            <section className="page-section"  id="portfolio">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">BookFolio</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                            <div className="row">
                            {books.map((book,i)=>{
                               return  <Book book={book} key={i}/>
                            })}
                            </div>
                        </div>
                    </section>
         )

                    
    }
}

export default BookList