import React from "react";
const TodoContext=React.createContext({
    todosList:[],
    onDelete:()=>{},
    onAdd:()=>{},
    onHover:()=>{},
    onNotHover:()=>{}
})

export default TodoContext