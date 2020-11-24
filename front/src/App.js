import React, {Component}from 'react'

import './App.css';
import './Admin-Panel/card/Style.css'
//import Search from './components/search/search';
//import Create from './components/create/create'
//import Category from './components/categories/categories' 
//import Card from './components/card/allCard';
import Home from '../src/Home/Home/home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Page from '../src/Description-Page/page'

class App extends Component {
  state={
    games:[],
    
  }
  
  
  
  render(){

    return (
      
        < div className="body">
         <Home />
         </div>
        

    )
  }
}

export default App;
