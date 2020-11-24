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

          <div className="cardContainer">
          {this.state.games.map(g =>
                   <div key={g.id}>
                       <div className="card">
                       <img src="https://images.wallpaperscraft.com/image/night_city_aerial_view_night_192859_1024x768.jpg" />
                       <div className="info">
                       <h3>{g.name}</h3>
                       <h3> Rating: {g.rate}</h3>
                       <p>Release Date: {g.releasdate}</p>
                       <button>Read More</button>
                       <div className="gameName">
                       <h3>{g.name}</h3>
                       </div>
                       </div>
                       </div>
                      </div>)}
      </div> 
        )}
      
          }
export default Card;
 
