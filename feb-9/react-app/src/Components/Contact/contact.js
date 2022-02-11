import { Component } from "react";
import {Outlet} from "react-router-dom"
import"./contact.css"

class Contact extends Component{
   
    render(){
        return(
            <div className="contact-container">
                <h1>GOT QUESTIONS?</h1>
                <p>
                The easiest thing to do is post on our forums.
                </p>
              <Outlet/>
            </div>
        )
    }
}
export default Contact