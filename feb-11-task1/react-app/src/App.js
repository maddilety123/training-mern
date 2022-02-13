import {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state={name:"",email:"",file:"",remoteImg:"https://freepngimg.com/thumb/avengers/117295-infinity-avengers-war-free-download-png-hd-thumb.png"}

  componentDidMount(){
    const name=localStorage.getItem("name")
  console.log(this.state.remoteImg)
    const email=localStorage.getItem("email")
    this.setState({name:name,email:email})
    const imgUrl=localStorage.getItem("file")
    
    this.setState({file:imgUrl})
    const remoteImgLocal=localStorage.getItem("remoteimg")
    this.setState({remoteImg:remoteImgLocal})
  }

  onInputChange=(event)=>{
    console.log(event.target.value)
    const name=event.target.name
    this.setState({
      [name]:event.target.value
    })

  }

  onImageUpload=(event)=>{
    const fileName=event.target.files[0]
    const reader=new FileReader()
   
   if(fileName){
    reader.readAsDataURL(fileName)
   
    reader.onload=(event)=>{
     
     
     
      this.setState({file:reader.result})
      
    }
   }
   else{
     console.log("hello")
   }
 
      

    }
   
    
  
   
  

  onFormSubmit=(event)=>{
    
    event.preventDefault()
  localStorage.setItem("name",this.state.name)
localStorage.setItem("email",this.state.email)
localStorage.setItem("file",this.state.file)
localStorage.setItem("remoteimg",this.state.remoteImg)

console.log(this.state.remoteImg)
const remoteImg1=this.state.remoteImg
const reader=new FileReader()

if(remoteImg1){
reader.readAsDataURL(remoteImg1)

reader.onload=(event)=>{
 
 
 
  this.setState({remoteImg:reader.result})
  
}
    }
    

  }  
    
    
  

  


render(){
  return (
  
 <div className="app-container">
      
      <form onSubmit={this.onFormSubmit} className="form-container">
        <label>Name</label>
        <br/>
        <input className="form-control mb-2" type="text" name="name" value={this.state.name} placeholder="Enter name" onChange={this.onInputChange}/>
       
       <label>Email</label>
        <br/>
        <input className="form-control mb-2" type="email" name="email" value={this.state.email} placeholder="Enter Email" onChange={this.onInputChange}/>
        
        <input file={this.state.results} className="form-control mb-2" type="file" accept=".png,.jpeg,.jpg" onChange={this.onImageUpload}/>
        <button type="submit" className="btn btn-primary mt-3">submit</button>
      </form>
      {this.state.file&&<img src={this.state.file} className="img1" alt="img"/>}
      {/* <img src={this.state.remoteImg} alt="remoteimg"/> */}
      {this.state.remoteImg&&<img src={this.state.remoteImg} className="img1" alt="img"/>}
      </div>
    
   
  );
}

}
export default App;

