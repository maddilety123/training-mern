import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './reduxComponents/store/store';
import formAction from './reduxComponents/actions/action';
import {v4 as uuid} from "uuid"
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      isShow:false,
      firstname: "",
      lastname: "",
      gender: "",
      age:"",
      qualification:"B.E",
      eligible:"",
      organizationName:""
    }

}

componentDidMount(){
store.subscribe(()=>{
    this.setState({isShow:true})
  })
}

onBack=()=>{
  this.setState({isShow:false})
}

onFormSubmit=(event)=>{
  event.preventDefault()
  const voterDetails={
    id:uuid(),
    firstname:this.state.firstname,
      lastname: this.state.lastname,
      gender: this.state.gender,
      age:this.state.age,
      qualification:this.state.qualification,
      eligible:this.state.eligible,
      organizationName:this.state.organizationName
  }
  store.dispatch(formAction(voterDetails))
}

  onInputChange=(event)=>{
    const name=event.target.name
    this.setState({
      [name]:event.target.value})
   }

   showDetails=()=>{
     console.log("called")
     console.log(store.getState().votersList)
     return(
       <div>
         <ul className='user-container'>
         {store.getState().votersList.map((eachVoter)=>
         <li key={eachVoter.id} className="user-card">
           <p>Firstname: {eachVoter.firstname}</p>
           <p>Lastname: {eachVoter.lastname}</p>
           <p>Gender: {eachVoter.gender}</p>
           <p>Age: {eachVoter.age}</p>
           <p>Qualification: {eachVoter.qualification}</p>
           <p>Eligible?: {eachVoter.eligible}</p>
           <p>OrganizationName:{eachVoter.organizationName}</p>
           <button onClick={this.onBack} className="btn btn-outline-secondary">...back</button>
         </li>)
   }
         </ul>
         
      </div>
     )
   }

  render(){
  return (
    <div className="app-container">
      {this.state.isShow?this.showDetails():
     
      <form className='form-container' onSubmit={this.onFormSubmit}>
        <label>Firstname</label>
        <br/>
        <input name="firstname" value={this.state.firstname} className='form-control mb-2' type="text" placeholder='Enter firstname' onChange={this.onInputChange}/>
        <label>Lastname</label>
        <br/>
        <input name="lastname" value={this.state.lastname} className='form-control mb-2 mr-2' type="text" placeholder='Enter firstname' onChange={this.onInputChange}/>
        <label>Gender</label>
        <br/>
        <input  name="gender" value="Male" onChange={this.onInputChange} type="radio"/>
        <label >Male</label>
        <input name="gender" value="Female" className='mb-2'  onChange={this.onInputChange} type="radio"/>
        <label className='mb-2'>Female</label>
        <br/>
        <label>Age</label>
        <br/>
        <input className='form-control mb-2'  placeholder='select your age' onChange={this.onInputChange} value={this.state.age} name="age" type="number"/>
        <label>Qualification:</label>
        <select onChange={this.onInputChange} className="form-control mb-2" name="qualification" value={this.state.qualification}>
          <option value="B.E">B.E</option>
          <option  value="B.Tech">B.Tech</option>
          <option value="MCA">MCA</option>
          <option value="M.Tech">M.Tech</option>
        </select>
      
        <label>is eligible for voting?</label>
        <br/>
        <input name='eligible'  onChange={this.onInputChange}
          value="Yes" type="radio"/>
        <label>Yes</label>
        <input name='eligible' value="No" onChange={this.onInputChange}
          
       type="radio"/>
        <label>no</label>
        <br/>
        <label className='mt-2'>Organization name</label>
        <br/>
        <input onChange={this.onInputChange} name="organizationName" value={this.state.organizationName} className='form-control' type="text"/>
        <button type='submit' className='btn btn-success mt-2'>Submit</button>
      </form>
  }
    </div>
  );
}
}

export default App;
