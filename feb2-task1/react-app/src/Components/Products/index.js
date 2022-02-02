import { Component } from "react";
import "./index.css"

class Products extends Component{
onBtnClick=()=>{
    const productBtn = "productActive"
    const{user,fun}=this.props
    const{name}=user
    // const pantonValue=pantone_value
    fun(name,user, productBtn)
   
}

    render(){
        const{user}=this.props
        const{id}=user
        

        return(
            <tr className="trEl">
               
                <td className="trEl">Product Id:{id}</td>
                <td className="trEl"><button onClick={this.onBtnClick}>Check Details</button></td>
            </tr>
        )
    }
}

export default Products