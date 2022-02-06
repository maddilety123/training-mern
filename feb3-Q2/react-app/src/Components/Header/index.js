import { createRef } from "react";
import { Component} from "react";


class Header extends Component{
    title=createRef()
    render(){
        return(
            <div className="header-container">
                 <p ref={this.title}>Welcome </p>   
            </div>
        )

    }
}

export default Header