import {Component} from "react"
import TodoContext from "./Components/Context/todocontext";
import Gettodo from "./Components/Gettodo/gettodo";
import {v4 as uuid} from "uuid"
import './App.css';

class App extends Component {
  state={todosList:[],input:""}

  onInputChange=(event)=>{
    this.setState({input:event.target.value})
  }

  onDelete=(id)=>{
    const{todosList}=this.state
    const modifiedList=todosList.filter((eachTodo)=>{
      return eachTodo.id!==id
    })
    this.setState({todosList:modifiedList})
}

  onAdd=()=>{
    const{input}=this.state
    const newTodo={
      title:input,
      isHover:false,
      id:uuid()
    }
    this.setState((prevState)=>({
      todosList:[...prevState.todosList,newTodo]
    }))

  }

  onHover=(id)=>{
    const{todosList}=this.state
    const modifiedList=todosList.map((eachTodo)=>{
      if(eachTodo.id===id){
        return {...eachTodo,isHover:true}
      }
      return eachTodo
    })
    this.setState({todosList:modifiedList})

  }

  onNotHover=(id)=>{
    const{todosList}=this.state
    const modifiedList=todosList.map((eachTodo)=>{
      if(eachTodo.id===id){
        return {...eachTodo,isHover:false}
      }
      return eachTodo
    })
    this.setState({todosList:modifiedList})
  }

  render(){
    const{todosList}=this.state

    return (

      <div className="app-container">
        <div className="todos-card">
          <h1 className="todos-heading">todos</h1>
          <input type="text" onChange={this.onInputChange} placeholder="Enter todo"/>
          <br/>
          <button onClick={this.onAdd}>Add</button>
          <TodoContext.Provider
          value={{
            todosList,
            onAdd:this.onAdd,
            onDelete:this.onDelete,
            onHover:this.onHover,
            onNotHover:this.onNotHover
          }}>
              <Gettodo/>
          </TodoContext.Provider>
          

        </div>
          
      </div>
  );
}
}

export default App;
