import {Component} from "react"
// import {Contact} from "./components/Contact/contact"
import Contact from "./components/Contact/contact";
import Greeting from "./components/Greeting/greeting";
import Comp3 from "./components/Component3";
import Task2 from "./Task2/task2"
import ButtonComponent from "./components/ButtonComponent/index"
import "./App.css"

class App extends Component{
    state={number:"",isChecked:false}

    onCheckboxClick=()=>{
      
      this.setState((prevState)=>({isChecked:!prevState.isChecked}))
      console.log(this.state.isChecked)
    }

    onFirstbutton=()=>{
      this.setState({number:1})
    }
    onSeconbtn=()=>{
      this.setState({number:2})
    }
    onThirdBtn=()=>{
      this.setState({number:3})
    }
   
    render(){
        const{number,isChecked}=this.state
       return(
         <div className="bg-container">
           

           <h1>Question 1</h1>
           {number===1&&<Contact/>}
           {number===2&&<Greeting/>}
           {number===3&&<Comp3/>}
           <div className="btn-container">
           <button className="btn" onClick={this.onFirstbutton}>button1</button>
            <button className="btn" onClick={this.onSeconbtn}>button2</button>
            <button className="btn" onClick={this.onThirdBtn}>button3</button>
           </div>
            
            <h1>Question 2</h1>
            <Task2 url={"https://reactjs.org/logo-og.png"}/>
            <h1>Question 5</h1>
            <div className="btn-container">
                <ButtonComponent btnNumber={1}/>
                <ButtonComponent btnNumber={2}/>
                <ButtonComponent btnNumber={3}/>
            </div>
            <h1>Question 6</h1>
            
            <input type="checkbox" checked={isChecked} onChange={this.onCheckboxClick}/>
            
         </div>
           
       )
    }
}

export default App


