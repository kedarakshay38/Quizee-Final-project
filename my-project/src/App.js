import {BrowserRouter,Link,Route} from "react-router-dom";
import React from "react";
//import Create from "./create";
import Regi from "./createComponent/regi";
import Login from "./createComponent/login";



function App() {
  return (<BrowserRouter> <div>
  
    <ul>
    
    <li><Link to ="/login">Login</Link></li>
    <li><Link to="/regi ">Registration</Link> </li>
    
    </ul>
    <Route path="/login" component={Login}></Route>
    <Route path="/regi" component={Regi}></Route>
    
    <Regi/>
    
      </div></BrowserRouter>
 
 
  );
}

export default App;
