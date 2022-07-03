import React from "react"
import "./BookList.css"
import Book from "./Book"
import {BookContext}from "../Contexts/BookContext"
import { ThemeContext } from "../Contexts/ThemeContext"

class BookList extends React.Component{

    render () {
         return(
            <ThemeContext.Consumer>
              {(contextTheme)=>(
                <BookContext.Consumer>
                {contextBook=>{
                    const {books} = contextBook
                    const {changeTheme,isDarkTheme,dark,light}=contextTheme
                    const theme= isDarkTheme ? dark : light
                        return (
                            <section className="page-section"  id="portfolio" style={{background: theme.bg, color: theme.txt}}>
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-heading text-uppercase">BookFolio</h2>
                                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                    <button type="button" className="btn btn-primary" style={{marginTop:"-70px"}} 
                                    onClick={changeTheme}>Change Theme</button>
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
                
            </BookContext.Consumer>
              )}  
            </ThemeContext.Consumer>
            
         )                 
    }
}

export default BookList