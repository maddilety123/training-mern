import {Component} from "react"
import Users from "./Components/Users/index"
import Products from "./Components/Products/index"
import Header from "./Components/Header/index"
import './App.css';


class App extends Component{
  state={users:[],product:[],name:""}
  componentDidMount(){

   
   fetch("https://reqres.in/api/users?page=2")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      let userdata=data.data
      this.setState({users:userdata})
    })
    fetch("https://reqres.in/api/products")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      let userdata=data.data
      this.setState({product:userdata})
    })
    }
    
  
  render(){
    const{users,name}=this.state
    const{product}=this.state
    console.log(users)
    return(
      <div className="bg-container">
        <div>
          <Header name={name} />
        </div>
        <table className="table">
          <tr className="trEl">
            <th className="trEl">User Id</th>
            
            
            <th className="trEl">getdetails</th>
            
          </tr>
         
          {users.map((eachuser)=>
        <Users user={eachuser} key={eachuser.id}/>)}
          
        </table>
        <table className="table">
          <tr className="trEl">
            <th className="trEl">Product Id</th>
            
            
            <th className="trEl">getdetails</th>
            
          </tr>
         
          {product.map((eachproduct)=>
        <Products user={eachproduct} key={eachproduct.id}/>)}
        </table>
        
       
      </div>
    )
  }
}

export default App