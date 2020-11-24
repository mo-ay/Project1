import React, {Component}from 'react'

import './App.css';
import './components/card/Style.css'
//import Search from './components/search/search';
//import Create from './components/create/create'
//import Category from './components/categories/categories' 
//import Card from './components/card/allCard';
import Home from '../src/components/Home/home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../src/components/admin/dashboard'
class App extends Component {
  state={
    games:[],
    adminView:false
  }
  
  
  
  render(){

    return (
      
        < div className="body">
         <Home adminView={this.state.adminView}/>
         <Dashboard />
       </div>
        

    )
  }
}

export default App;
