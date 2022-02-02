import { Component } from "react";

class Users extends Component{
onBtnClick=()=>{
    const{user}=this.props
    const{id,email,last_name,first_name,avatar}=user
    const firstName=first_name
    const lastName=last_name
    // const image = <img src={avatar} alt={firstName}/>
//    const emptyString=`${id} ${email} ${firstName} ${lastName}`
    alert(id+"\n"+email+"\n"+firstName+"\n"+lastName+"\n"+avatar)
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