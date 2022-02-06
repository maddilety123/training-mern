import {Component, createRef} from "react"

import Header from "./Components/Header"
import Caluculator  from "./Components/Caluculator/index"
import "./App.css"

class App extends Component{
  appRef=createRef()
  titleContent=createRef()

  onClickBtn=(operator)=>{
    let number1=parseInt(this.appRef.current.input1.current.value)
    let number2=parseInt(this.appRef.current.input2.current.value)
    let operation;
    let output
    switch(operator){
      case("+"):
      output=number1+number2;
      operation="Addition"
      break;
      case("-"):
      output=number1-number2;
      operation="Subtraction"
      break;
      case("x"):
      output=number1*number2;
      operation="Multiplication"
      break;
      default:
        output=number1/number2
        operation="Division"

    }
     this.titleContent.current.title.current.textContent=`${operation} is: ${output}`
    console.log(this.titleContent.current.title.current.textContent)
    console.log("hello")
    console.log(output)
  }
  render(){
    return(
      <div className="bg-container">
        <Header ref={this.titleContent}/>
        <Caluculator ref={this.appRef} onClickBtn={this.onClickBtn}/>
        
      </div>
      
    )
  }
}

export default App 