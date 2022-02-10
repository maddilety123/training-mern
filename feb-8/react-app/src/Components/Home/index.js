import {Component} from "react"
import { NavLink } from "react-router-dom"
import "./index.css"
// import { Link } from "react-router-dom"

class Home extends Component{
    render(){
        return(
          
            <ul className="home-container">
            
                <li className="links">
                   <NavLink to="/users" className="route-link">
                    Users
                   </NavLink>
               </li> 
               <li className="links">
                   <NavLink to="/about" className="route-link">
                    About Us
                   </NavLink>
               </li>
               <li className="links">
                   <NavLink to="/contact" className="route-link">
                    Contact Us
                   </NavLink>
                   </li> 

                   
           
            
            </ul> 
          
        )
    }
} 

export default Home