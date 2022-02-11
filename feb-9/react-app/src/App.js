import {Component} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Components/Home/home";
import Stuff from "./Components/Stuff/stuff";
import Contact from "./Components/Contact/contact";
import Header from "./Components/Header/header";
class App extends Component{
  render(){
  return (
    <div className="App-container">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="stuff" element={<Stuff/>}/>
              <Route path="contact" element={<Contact/>}/>
            </Route>  

            
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}
}

export default App;


  
