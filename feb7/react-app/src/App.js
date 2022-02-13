import {Component} from "react"
import { v4 as uuid } from 'uuid';

import GetGroup from "./Component/GetGroup/GetGroup"
import Form from "./Component/Form/form";
import './App.css';


class App extends Component {
  state={editgroup:{},isform:false,userlist:[],productList:[],grouplist:[],firstname:"",lastname:"",email:"",phone:"",password:"",
  productname:"",price:"",offeramount:"",Finalprice:"",sellername:"",
  groupname:"",groupdetails:"",grouptdate:"",allowed:""
}

onButtonClick=(id)=>{
  const group=this.state.grouplist.filter((eachitem)=>
  eachitem.id===id
  
  )
  
  this.setState((prevState)=>({
    isform:!prevState.isform,editgroup:group
  }))
}

onEdit=(editedOb)=>{

  const getModified=async (editedOb)=>{
    await this.setState((prevstate)=>({
      grouplist:prevstate.grouplist.map((eachgroup)=>{
        if(eachgroup.id===editedOb.id){
          return editedOb
        }
        else{
          return eachgroup
        }
      }),
      isform:!prevstate.isform
    }))
    localStorage.setItem("groupList",JSON.stringify(this.state.grouplist))
    

  }

  

  getModified(editedOb)

console.log(this.state.grouplist)
}

  onInputChange=(event)=>{
    const name=event.target.name
    this.setState({
      [name]:event.target.value
    })

  }

  onProductInputChange=(event)=>{
    const name=event.target.name
    this.setState({
      [name]:event.target.value
    })
  }

  ongrouptInputChange=(event)=>{
    const name=event.target.name
    this.setState({
      [name]:event.target.value
    })
  }

  onFormSubmit=(event)=>{
    
    event.preventDefault()
    const userDetails={
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      email:this.state.email,
      phone:this.state.phone,
      password:this.state.password
    }

    
    const setdetails=async(userDetails)=>{
      const {userlist}=this.state
      const newList=[...userlist,userDetails]
     
      await this.setState({userlist:newList})
      
localStorage.setItem("usersList",JSON.stringify(this.state.userlist))
    }
    setdetails(userDetails)

    
    
    
  }

  onProductFormSubmit=(event)=>{
    event.preventDefault()
    const productdetails={
      productname:this.state.productname,
      price:this.state.price,
      offeramount:this.state.offeramount,
      Finalprice:this.state.Finalprice,
      sellername:this.state.sellername
    }

    
    const setproductdetails=async(productdetails)=>{
      const {productList}=this.state
      const newList=[...productList,productdetails]
     
      await this.setState({productList:newList})
      
localStorage.setItem("productList",JSON.stringify(this.state.productList))
    }
    setproductdetails(productdetails)

    

  }

  ongroupFormSubmit=(event)=>{
    event.preventDefault()
    const groupdetails={
      groupname:this.state.groupname,
      groupdetails:this.state.groupdetails,
      grouptdate:this.state.grouptdate,
      allowed:this.state.allowed,
      id:uuid()
     
    }

    
    const setgroupdetails=async(groupdetails)=>{
      const {grouplist}=this.state
      const newList=[...grouplist,groupdetails]
    
      await this.setState({grouplist:newList})
      
localStorage.setItem("groupList",JSON.stringify(newList))
    }
    setgroupdetails(groupdetails)
  }



render(){
  return (
    <div>
      {this.state.isform?<Form editgroup={this.state.editgroup} editFunc={this.onEdit}/>:<div className="app-container">
      
      <form onSubmit={this.onFormSubmit} className="form-container">
        <h1>Userslist</h1>
        <label>Firstname</label>
        <br/>
        <input type="text" name="firstname" value={this.state.firstname} placeholder="Enter firstname" onChange={this.onInputChange}/>
        <br/>
        <label>Lastname</label>
        <br/>
        <input type="text" name="lastname" value={this.state.lastname} placeholder="Enter Lastname" onChange={this.onInputChange}/>
        <br/>
        <label>Email</label>
        <br/>
        <input type="email" name="email" value={this.state.email} placeholder="Enter Email" onChange={this.onInputChange}/>
        <br/>
        <label>Phonenumber</label>
        <br/>
        <input type="number" name="phone" value={this.state.phone} placeholder="Enter phonenumber" onChange={this.onInputChange}/>
        <br/>
        <label>Password</label>
        <br/>
        <input type="password" name="password" value={this.state.password} placeholder="Enter password" onChange={this.onInputChange}/>
        <br/>
        
        
        <input type="file" accept=".jpeg,.jpg,.png" />
        <br/>
        <button type="submit">submit</button>
      </form>

      <form onSubmit={this.onProductFormSubmit} className="form-container">
        <h1>Productslist</h1>
        <label>productname</label>
        <br/>
        <input type="text" name="productname" value={this.state.productname} placeholder="Enter productname" onChange={this.onProductInputChange}/>
        <br/>
        <label>price</label>
        <br/>
        <input type="number" name="price" value={this.state.price} placeholder="Enter price" onChange={this.onProductInputChange}/>
        <br/>
        <label>offeramount</label>
        <br/>
        <input type="offeramount" name="offeramount" value={this.state.offeramount} placeholder="Enter offeramount" onChange={this.onProductInputChange}/>
        <br/>
        <label>Finalprice</label>
        <br/>
        <input type="number" name="Finalprice" value={this.state.Finalprice} placeholder="Enter Finalprice" onChange={this.onProductInputChange}/>
        <br/>
        <label>sellername</label>
        <br/>
        <input type="text" name="sellername" value={this.state.sellername} placeholder="Enter sellername" onChange={this.onProductInputChange}/>
        <br/>
        <button type="submit">submit</button>
      </form>

      <form onSubmit={this.ongroupFormSubmit} className="form-container">
        <h1>Groupslist</h1>
        <label>groupname</label>
        <br/>
        <input type="text" name="groupname" value={this.state.groupname} placeholder="Enter groupname" onChange={this.ongrouptInputChange}/>
        <br/>
        <label>groupdetails</label>
        <br/>
        <input type="text" name="groupdetails" value={this.state.groupdetails} placeholder="Enter groupdetails" onChange={this.ongrouptInputChange}/>
        <br/>
        <label>grouptdate</label>
        <br/>
        <input type="grouptdate" name="grouptdate" value={this.state.grouptdate} placeholder="Enter grouptdate" onChange={this.ongrouptInputChange}/>
        <br/>
        <label>allowed</label>
        <br/>
        <input type="number" name="allowed" value={this.state.allowed} placeholder="Enter allowed" onChange={this.ongrouptInputChange}/>
        <br/>
        
        <button type="submit">submit</button>
      </form>

    <div>
      <table>
        <tr>
          <th>groupname</th>
          <th>groupdetails</th>
          <th>grouptdate</th>
          <th>allowed</th>
          <th>edit</th>
        </tr>
        {this.state.grouplist.map((eachgroup)=>
        <GetGroup group={eachgroup} key={eachgroup.allowed} func={this.onButtonClick}/>)}
      </table>
    </div>

    </div>}
    
    </div>
  );
}

}
export default App;


