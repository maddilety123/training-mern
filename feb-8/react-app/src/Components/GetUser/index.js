import { Component } from "react";
import { NavLink } from "react-router-dom";

import "./index.css"

class GetUser extends Component{
    
    render(){
        const {user}=this.props
       const  {id,email,firstName,lastName,avatar}=user
        return(
            <NavLink to={`/profilepic/${id}`} className="routeLink">
            <li className="user-container">
                <div>
                    <p >{id}</p>
                    <p >{email}</p>
                    <p>{firstName}</p>
                    <p >{lastName}</p>
                </div>
                
                    <img src={avatar} alt={firstName} className="image"/> 
                
            </li>
            </NavLink>
        )
    }
}

export default GetUser