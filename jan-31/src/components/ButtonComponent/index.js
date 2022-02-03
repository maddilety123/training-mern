import { Component} from "react";
import "./index.css"

class ButtonComponent extends Component{
    onButtonClick=()=>{
        const{btnNumber}=this.props
        alert(`button ${btnNumber} is clicked`)
    }
    render(){
        const{btnNumber}=this.props
        return(
            <>
            <button className="btn" onClick={this.onButtonClick}>Button  {btnNumber}</button>
            </>
        )
    }
}
export default ButtonComponent