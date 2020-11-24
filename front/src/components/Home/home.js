import React, {Component} from 'react';
import '../card/Style.css';
import Search from '../search/search';
import Category from '../categories/categories'
 
class Home extends Component{
    state={
        games:[]
      }
      async componentDidMount(){
        const response=await fetch("http://localhost:8001/games");
        const result= await response.json();
       //console.log(result);
       const sorting=result.sort((a, b) => (a.rate > b.rate) ? -1 : 1)
       
       this.setState({games:sorting});
       }
      
   
    render(){
        return (
           <div >

             <div className="header">
             <Search />
             </div>
             

           
             <h2>Top Rated Blogs:</h2>
            <div className="cardContainer fiveCards">
                
                
               {this.state.games.slice(0,4).map(g =>
             
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
       



        
             <h2>Most Recent Blogs:</h2>
               <div className="cardContainer fiveCards">
               {this.state.games.slice(0,4).map(g =>
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
             


        <Category adminView={this.props.adminView}/>
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
    
    


        </div>
        )
    }
}
export default Home;