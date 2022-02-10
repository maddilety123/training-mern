
import { useState } from "react";
import { useParams } from "react-router-dom"
import "./index.css"

function UserProfile() {

    const { id } = useParams();
    const [url, setUrl] = useState("");
   

    const getProfile = async () => {
        const response = await fetch(`https://reqres.in/api/users/${id}`)
        const responseJson = await response.json()
        const userData = await responseJson.data
        //    const{avatar}= await userData.avatar
       
        setUrl(userData.avatar)
        

       
    }

    
 

  getProfile()

    return (
        <div className="profile-container">
            {url ? <img src={url} alt="mern" className="profile-img"/> : <p>no data</p>}
           
        </div>
    )
}


    
    


export default UserProfile

//    return(
//        <>
//        <img src={avatar} alt="profile"/>
//        </>
//    )