import { Component } from "react"
import { TailSpin } from  'react-loader-spinner'
import GetUser from "../GetUser/index"
import "./index.css"


class Users extends Component{
    state={users:[],isLoading:true}

componentDidMount(){
    this.getUserDetails()
}

getUserDetails=async()=>{
    const response=await fetch("https://reqres.in/api/users")
    const responseJson=await response.json()
    const usersData=responseJson.data
    const modifiedData=usersData.map((eachUser)=>({
        id:eachUser.id,
        email:eachUser.email,
        avatar:eachUser.avatar,
        firstName:eachUser.first_name,
        lastName:eachUser.last_name

    }))
    this.setState({users:modifiedData,isLoading:false})
   
}


    render(){
        const{users,isLoading}=this.state
        return(
                <div className="bg-card">
                    {isLoading?<TailSpin color="#00BFFF" height={80} width={80} />:
                    <ul >
                        {users.map((eachUser)=>
                        <GetUser user={eachUser} key={eachUser.id}/>)}
                    </ul>
    }
                </div>
            )

    }
}    


export default Users