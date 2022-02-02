import {Component} from "react"
import Users from "./Components/Users/index"
import Products from "./Components/Products/index"
import Header from "./Components/Header/index"
import Footer from "./Components/Footer/index"
import './App.css';

class App extends Component{
  state={users:[],product:[], name: "", u:"",isUserProduct:"", userbtn:false, productbtn: false}
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
    
    onAlert= (FullName,user,userBtn) => {
      this.setState({name:FullName, u:user,isUserProduct:userBtn})
    
    }
  
    onUserClick =( )=>{
      this.setState((prevState)=>({userbtn:!prevState.userbtn}))

    }

    onProductClick =( )=>{
      this.setState((prevState)=>({productbtn:!prevState.productbtn}))

    }
  
  render(){
    const{users,name,u,isUserProduct,userbtn,productbtn}=this.state
    const{product}=this.state
    return(

      <div className="bg-container">
        <div>
          {name !=="" && <Header isUserProduct= {isUserProduct} name={name}/>}
        </div>
      <button onClick={this.onUserClick}>Users</button>
      {
        userbtn && 
        <table className="table">
          <h className="boldText">Users List</h>
          <tr className="trEl">
            <th className="trEl">User Id</th>
            <th className="trEl">Check user details</th>
          </tr>
         
        {users.map((eachuser)=>
        <Users user={eachuser} key={eachuser.id} fun= {this.onAlert}/>)
        }
        </table>
      }

      <button onClick={this.onProductClick}>Products</button>
      {
          productbtn &&
          <table className="table">
          <h className="boldText">Products List</h>
          <tr className="trEl">
            <th className="trEl">Product Id</th>
            <th className="trEl">Check Product details</th>
          </tr>
         
        {product.map((eachproduct)=>
        <Products user={eachproduct} key={eachproduct.id} fun= {this.onAlert}/>)
        }
        </table>

      }
       
        
      {u !=="" && <Footer user={u} isUser={isUserProduct}
      />}
      </div>
      
    )
  }
}

export default App