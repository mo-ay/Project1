import React ,{Component} from 'react';

class CardSelected extends Component{
    state={
        oneGame:[]
    }

    getGame= async(e)=>{
        e.preventDefault();
        const id=e.target.oneG.value;
        
const response=await fetch(`http://localhost:8001/game/${id}`);
        const result= await response.json();
       //console.log(result);
    this.setState({oneGame:result});
    console.log(this.state.oneGame)

    }



render(){
    
    
    return(
        <div className="CardSelected">
            
<form onSubmit={this.getGame}>
    <input type="number" name="oneG" ></input>
</form>
<div>{this.state.oneGame.map(g=>
<div key={g.id}>
    <div>{g.name}</div>
    <div>{g.rate}</div>
    <div>{g.imagepath}</div>
    <div>{g.releasdate}</div>
    <div>{g.post}</div>
    </div>
    )}

</div>
 
 

        </div>
    )
}

}
export default CardSelected;