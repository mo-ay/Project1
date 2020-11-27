import React,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./search.css"



class Search extends Component{
    state={
        game:[]

    }
     searchFunction= async(e)=>{
           e.preventDefault();
           
           const searchInput= e.target.searchInput.value;
           if (!searchInput){
            e.preventDefault();
           }else{
           const url=`http://localhost:8001/games/${searchInput}`;
           const response=await fetch(url);
           const result=await response.json();
           //console.log(result);
    
        this.setState({game:result});
        console.log(this.state.game);}
      
 }
 
 
    render(){
        return(
            <div className="Search dashSearch">

                
                
                  <img src="#" alt="Indie Bite" className="logo" />
                   <form onSubmit={this.searchFunction} className="headerForm">
                    <input type="text" name="searchInput" className="search" placeholder="What are you looking for?"/>
                    <button type="submit" name="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                    </button>
                   </form>                 
                
         
        
                  <div className="cardContainer" style={{boxShadow:"none"}}>{this.state.game.map(g =>
                     <div key={g.id} className="card">
                       <img src={g.imagepath} />
                         <div className="info">
                         <h3>{g.name}</h3> <br></br>
                         <h3> Rating: {g.rate}</h3><br></br>
                         <p>author: {g.author}</p>
                         <p> date: {g.date}</p>
                         </div>

                        <div className="gameName">
                        <h3>{g.name}</h3>
                       </div>
                    </div>
                      )}
                
            </div>
         
                
            </div>
        )
    }

}  
export default Search;
//{this.state.game.map(g =>{game.name})}