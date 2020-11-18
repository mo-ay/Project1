import React,{Component} from 'react';



class Search extends Component{
    state={
        game:[]

    }
     searchFunction= async(e)=>{
           e.preventDefault();
           const searchInput= e.target.searchInput.value;
           const url=`http://localhost:8001/search/${searchInput}`;
           const response=await fetch(url);
           const result=await response.json();
           //console.log(result);
    
        this.setState({game:result});
        console.log(this.state.game);
      
 }
 
 
    render(){
        return(
            <div className="Search">
                
        <form onSubmit={this.searchFunction}>
            <input type="text" name="searchInput" placeholder="search"  />
            <input type="submit" name="submit"/>
            
       </form>
       <ul>{this.state.game.map(g =>
            <li>Name: {g.name} <br></br>Rating: {g.rate}<br></br>Image: {g.imagepath}<br></br>Release Date: {g.releasdate}<br></br>Blog: {g.post}</li>
            
            )}
            </ul>
                
            </div>
        )
    }

}  
export default Search;
//{this.state.game.map(g =>{game.name})}