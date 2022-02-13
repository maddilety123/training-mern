
import "./GetGroup.css"
const GetGroup=(props)=>{
 const{group,func}=props
 const{groupname,groupdetails,grouptdate,allowed,id}=group
 const onBtnClick=()=>{
    func(id)
 }
 return(
     <tr>
         <td>{groupname}</td>
         <td>{groupdetails}</td>
         <td>{grouptdate}</td>
         <td>{allowed}</td>
         <td><button onClick={onBtnClick}>edit</button></td>
     </tr>
 ) 
}

export default GetGroup