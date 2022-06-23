import React, { Fragment } from "react";
import { ThemeContext } from "../App";
import { useContext } from "react";

const Header = ({})=>{

    const {theme}=useContext(ThemeContext)

    return(
     <div>
           <h1>Header Section</h1>
        <h3>BackgroundColor: {theme} </h3> 
     </div>
    )
}

export default Header