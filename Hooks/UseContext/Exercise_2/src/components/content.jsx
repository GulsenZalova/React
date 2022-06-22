import React from "react";
import {themeContext} from "../App"
import { useContext } from "react";
const Content = () => {
const theme= useContext(themeContext)
    return(
    <div className="content"style={theme}>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dignissimos optio hic nulla. Hic sequi dolorum excepturi soluta illo adipisci eveniet similique, commodi voluptates at. Ipsum vitae sapiente inventore magni.</p>
    </div>
    )
}
export default Content