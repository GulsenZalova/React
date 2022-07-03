import React from "react";
import BookList from "./BookList";
import BookContextProvider from "../Contexts/BookContext";
import ThemeContextProvider from "../Contexts/ThemeContext";


class App extends React.Component{
    render(){
        return(
                <ThemeContextProvider>
                    <BookContextProvider>
                         <BookList/> 
                   </BookContextProvider>
                </ThemeContextProvider>
        )
    }
}
export default App