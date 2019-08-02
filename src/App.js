import React from 'react';
 import Navbar from './components/Navbar'
 import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'



function App() {
  return (
    

    // with browser router in Route Component have props attached to them
    // But except Route we can have props with super charged functiuon known as withRouter
    // withRouter(componentname) 
      <BrowserRouter>
    
     <div className="App">
     <Navbar/>
<Route exact path='/' component={Home}/>
 <Route path='/about' component={About}/>
 <Route path='/contact' component={Contact}/>



     </div>

     </BrowserRouter>

  
  );
}

export default App;
