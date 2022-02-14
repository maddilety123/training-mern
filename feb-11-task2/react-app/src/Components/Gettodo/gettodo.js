import TodoContext from "../Context/todocontext"
import"./gettodo.css"
import { BsX } from "react-icons/bs";
const Gettodo=()=>{
    return(
        <TodoContext.Consumer>
            {value=>{
                const{todosList,onDelete,onHover,onNotHover}=value
                const onTodoDelete=(id)=>{
                    console.log(id)
                    onDelete(id)
                }
                const setIsShown=(id,title)=>{
                    onHover(id,title)
                }
                const onMOuseleave=(id,title)=>{
                    onNotHover(id,title)

                }
                if(todosList.length===0){
                    
                    return( <>
                    <p>No tasks ,add a task</p>
                    </>
                    )
                }
                else{
                    
                    return(
                        <ul className="todos-container">
                        {todosList.map((eachtodo)=>
                        <li key={eachtodo.id} className="todo"  onMouseEnter={() => setIsShown(eachtodo.id,eachtodo.title)} onMouseLeave={() => onMOuseleave(eachtodo.id,eachtodo.title)}>
                            <p>{eachtodo.title} </p>
                            {eachtodo.isHover&&<button className="btn" onClick={()=>{onTodoDelete(eachtodo.id)}}><BsX/></button>}
                            
                        </li>)}
                    
                    </ul>  
                    )
                }
               
                   
               
                   
                
            }}
        </TodoContext.Consumer>

    )
}
export default Gettodo