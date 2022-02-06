import {Component} from "react"

import "./task2.css"
class Task2 extends Component{
    render(){
        const{url}=this.props
        return(
            <div>
                <img src={url} alt="task2" className="task2img"/>
            </div>
        )
    }
}

export default Task2