import { Component } from "react";
import "./index.css"

class Products extends Component{
onBtnClick=()=>{
    const{user}=this.props
    const{id,name,color,year,pantone_value}=user
    const pantonValue=pantone_value
   
    // const image = <img src={avatar} alt={firstName}/>
//    const emptyString=`${id} ${email} ${firstName} ${lastName}`
    alert(id+"\n"+name+"\n"+year+"\n"+color+"\n"+pantonValue)
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