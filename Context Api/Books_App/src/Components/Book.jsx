import React from "react";

class Book extends React.Component{
    render(){
        return(
            <div>
               <h1>{this.props.book.title}</h1>
               <h3>{this.props.book.author}</h3>
            </div>
        )
    }
}
export default Book