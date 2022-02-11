import { Component} from "react";
import { NavLink, Outlet} from "react-router-dom" 
import"./header.css"


class Header extends Component{
    render(){
        return(
            
            <div >
                <h1>Simple SPA</h1>
                <div className="header-container">
                    <div >
                <NavLink to="/"className={({isActive}) => isActive ? "active" : "route-links" }>
                    Home
                </NavLink>
                    </div>
                    <div >
                <NavLink to="/stuff" className={({isActive}) => isActive ? "active" : "route-links" }>
                    Stuff
                </NavLink>
                </div>
                <div >
                <NavLink to="/contact" className={({isActive}) => isActive ? "active" : "route-links" }>
                    Contact
                </NavLink>
                </div>
                </div>
                <Outlet/>
            </div>
          
            
        )

    }
}
export default Header
