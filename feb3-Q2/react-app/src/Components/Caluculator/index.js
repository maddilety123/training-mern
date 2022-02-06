import React ,{Component}from "react"
import {createRef} from "react"
import "./index.css"

class Caluculator extends Component{
    input1=createRef()
    input2=createRef()
    btn1=createRef()

    onBtnClick=(operator)=>{
        // let number1=this.input1.current.value
        // let number2=this.input1.current.value
        console.log(operator)
        this.props.onClickBtn(operator)
       
        

    }

   

    render(){
        return (
            <>
            <input type="number" ref={this.input1} placeholder="Enter Number1"/>
            <br/>
            <input type="number" ref={this.input2} placeholder="Enter Number2"/>
            <br/>
            <div className="button-container">
            <button  className="btn" onClick={e=>this.onBtnClick(e.target.textContent)} >+</button>
            <br/>
            <button className="btn"  onClick={e=>this.onBtnClick(e.target.textContent)}>-</button>
            <br/>
            <button className="btn" onClick={e=>this.onBtnClick(e.target.textContent)}>x</button>
            <br/>
            <button  className="btn" onClick={e=>this.onBtnClick(e.target.textContent)}>/</button>
            </div>
            </>
        )
    }
}

export default Caluculator