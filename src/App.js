import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/Homepage';


function App() {
  return (
    <>

<BrowserRouter>
  <Navbar/>

      <Switch>
      <Route exact path="/home" component={HomePage}/>
      
      <Route exact path="/" component={HomePage}/>
 
      
      </Switch>
    
    </BrowserRouter>

    </>
  );
}

export default App;
