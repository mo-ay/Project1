import React , {Component} from "react";
import './Style.css'
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Card extends Component{
    
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
        return(
          <div className="bodyDash">
            
          <div className="cardContainer">
          {this.state.games.slice(0,4).map(g =>
                   <div key={g.id}>
                       <div className="card">
                       <img src={g.imagepath} />
                       <div className="info">
                       <h3>{g.name}</h3>
                       {/* <h3> Rating: {g.rate}/10</h3> */}
                       {/* <p>Author: {g.releasdate}</p> */}
                       <button>Read More</button>
                       <div className="gameName">
                       <h3>{g.name}</h3>
                       </div>
                       </div>
                       </div>
                      </div>)}
      </div> 
      </div>
        )}
      
          }
export default Card;
 
