import { useRef } from "react"

const Form=(props)=>{
    
    const {editgroup,editFunc}=props
    const{groupname,groupdetails,grouptdate,allowed,id}=editgroup[0]
    const name=useRef(groupname)
    const details=useRef(groupdetails)
    const date=useRef(grouptdate)
    const allow=useRef(allowed)
    const onUpdate=(event)=>{
        event.preventDefault()
        const group={
            groupname:name.current.value,
            groupdetails:details.current.value,
            grouptdate:date.current.value,
            allowed:allow.current.value,
            id:id
        }
       
        editFunc(group)
    }
    
    return(
        <form onSubmit={onUpdate}>
            <label>groupname</label>
        <br/>
        <input ref={name} type="text" name="groupname" value={name.current.value}  placeholder="Enter groupname" />
        <br/>
        <label>groupdetails</label>
        <br/>
        <input type="text" ref={details} name="groupdetails" value={details.current.value} placeholder="Enter groupdetails" />
        <br/>
        <label>grouptdate</label>
        <br/>
        <input type="grouptdate" ref={date} name="grouptdate" value={date.current.value} placeholder="Enter grouptdate" />
        <br/>
        <label>allowed</label>
        <br/>
        <input type="number" ref={allow} name="allowed" value={allow.current.value} placeholder="Enter allowed" />
        <br/>
        
        <button type="submit" >submit</button>
        </form>
    )
}

export default Form