import React, {Component} from 'react';
import '../../Admin-Panel/card/Style.css';
import Search from '../search/search';
//import { withRouter } from 'react-router-dom';
//import { useHistory} from 'react-router-dom';
import Category from '../categories-home/categories-home'


class Home extends Component{
   dir =  "../../../../back/"
    state={
        games:[],
        gamesByDate:[]

      }
     

      async componentDidMount(){
        const response=await fetch("http://localhost:8001/games");
        const result= await response.json();
       //console.log(result);
       const resultDate= await result;
       this.setState({games:result});
       const sorting= this.state.games.sort((a, b) => (a.rate > b.rate) ? -1 : 1)
       console.log(this.state.games)

        
       this.setState({gamesByDate:result})
       const sortingDate= this.state.gamesByDate.sort((x, y) => (x.date > y.date) ? -1 : 1)
       console.log(this.state.gamesByDate)
       console.log(this.state.games)
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
                         
                         <div className="card" data={g.id}>
                         <img src={g.imagepath} />
                         <div className="info">
                         <h3>{g.name}</h3>
                         <h3> Rating: {g.rate}</h3>
                         {/* <p>Release Date: {g.releasdate}</p> */}
                         <button  onClick={event=>window.location.href=`./description/${g.id}`} >Read More</button>
                       
                         <div className="gameName">
                         <h3>{g.name}</h3>
                         </div>
                         </div>
                         </div>
                        </div>
                        )}
            </div>
            
       



        
             <h2>Most Recent Blogs:</h2>
               <div className="cardContainer fiveCards">
               {this.state.gamesByDate.slice(0,4).map(g =>
                     <div key={g.id}>
                         <div className="card">
                         <img src="../../../../back/public/uploads/me-1606411160582.jpeg"/>
                         <div className="info">
                         <h3>{g.name}</h3>
                          {/* <h3> Rating: {g.rate}</h3> */}
                         <p>Posted On: {g.date}</p> 
                         <button>Read More</button>
                         <div className="gameName">
                         <h3>{g.name}</h3>
                         </div>
                         </div>
                         </div>
                        </div>)}
             </div>
             


        <Category/>
        <div className="cardContainer">
            {this.state.games.map(g =>
                     <div key={g.id}>
                         <div className="card">
                         <img src={g.imagepath} />
                         <div className="info">
                         <h3>{g.name}</h3>
                         {/* <h3> Rating: {g.rate}</h3>
                         <p>Release Date: {g.releasdate}</p> */}
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