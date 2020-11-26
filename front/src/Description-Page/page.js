import React ,{Component} from 'react';

class CardSelected extends Component{
    state={
        oneGame:[]
    }

    componentDidMount(){
        this.getGame();
    }

    getGame= async()=>{
        
        const id=this.props.match.params.id;
        console.log(id)
        const response=await fetch(`http://localhost:8001/game/${id}`);
        const result= await response.json();
       //console.log(result);
        this.setState({oneGame:result});
        console.log(this.state.oneGame)

    }
    



render(){
    
    
    return(
        <>
        <div className="CardSelected">
            

<div>{this.state.oneGame.map(g=>
<div key={g.id}>
<img src= {g.imagepath} />
    <div>Name: {g.name}</div>
    <div>Rate: {g.rate}</div>
    <div>Author: {g.author}</div>
    <div>Posted On: {g.date}</div>
    <div> <a href={g.itchio_link} > Play the game on itchio</a></div>
   <div>Blog: {g.post}</div>
  </div>
    )}

</div>
 
 

        </div></>
    )
}

}
export default CardSelected;