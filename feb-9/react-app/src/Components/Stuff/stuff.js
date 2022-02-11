import { Component } from "react";
import {Outlet} from "react-router-dom"
import "./stuff.css"

class Stuff extends Component{
    

  

    render(){
        return(
            <div className="stuff-container">
                <h1>STUFF</h1>
                <p>
                Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:
                </p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
                <Outlet/>
            </div>
        )
    }
}
export default Stuff