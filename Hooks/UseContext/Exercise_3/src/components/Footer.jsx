import React, { Fragment } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Footer = ({}) =>{
const {theme,setTheme}=useContext(ThemeContext)
return(
<div>
    <h1>Footer</h1>
    <ThemeSwitcher/>
</div>
)
}
export default Footer