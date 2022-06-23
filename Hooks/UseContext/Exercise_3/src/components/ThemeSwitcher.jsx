import React, { Fragment } from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
 

const ThemeSwitcher = ({})=>{
const {theme,setTheme}=useContext(ThemeContext)
const changeTheme=()=>{
    setTheme(theme === "Pink" ? "Blue" : "Pink")
}
    return(
       <div>
        <h1>ThemeSwitcher</h1>
       <button onClick={changeTheme}>{theme}</button>
       </div>
       
    )
}


export default ThemeSwitcher