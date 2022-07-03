import React from "react";
import BookList from "./BookList";
import BookContextProvider from "../Contexts/BookContext";


class App extends React.Component{
    render(){
        return(
                <BookContextProvider>
                   <BookList/> 
                </BookContextProvider>
        )
    }
}
export default App