import { Component } from "react";

class Users extends Component{
onBtnClick=()=>{
    let userBtn="userActive"
    const{user,fun}=this.props
    const{last_name,first_name}=user
    const firstName=first_name
    const lastName=last_name
    const FullName =firstName+" "+lastName

    fun(FullName,user,userBtn)

}

    render(){
        const{user}=this.props
        const{id}=user
        

        return(
            <tr className="trEl">
               
                <td className="trEl">User Id:{id}</td>
                <td className="trEl"><button onClick={this.onBtnClick}>Check Details</button></td>
            </tr>
        )
    }
}

export default Users