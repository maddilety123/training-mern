// import {BrowserRouter} from "react-router-dom"
import { BrowserRouter, Route, Routes} from "react-router-dom";
// import { Routes } from "react-router-dom";
import Home from "./Components/Home/index"
// import Users from "./Components/Users/index"
import About from "./Components/About/index"
import Contact from "./Components/Contact/index"
import './App.css';
import Users from "./Components/Users";
import UserProfile from "./Components/UserProfile";


const App=()=> (
  
    <div className="app-container">

    
     <BrowserRouter >
     <div className="bg-container">
        <Home/>
     <Routes>
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/users" element={<Users/>} />
      <Route path="/profilepic/:id" element={<UserProfile/>}/>
      </Routes>
      </div>
      </BrowserRouter>
      
      </div>
   
  );


export default App;
