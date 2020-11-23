import React, {Component}from 'react'

import './App.css';
import Search from './components/search/search';
import Create from './components/create/create'
import Category from './components/categories/categories'
import Card from './components/card/card'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state={
    games:[]
  }
  async componentDidMount(){
    const response=await fetch("http://localhost:8001/games");
    const result= await response.json();
    //console.log("INDIE BITE LINE 11");
   //console.log(result);
   this.setState({games:result});
   console.log(this.state.games)
    
  }
  
  
  render(){

    return (
      <div className="App">
       <h1> Hello Indie Bite</h1>
    <Search />
    <Create />
    <Category />
    
    <Card />
       </div>

    )
  }
}

export default App;
