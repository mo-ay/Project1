import React, {Component} from 'react';

class Create extends Component{
state={
    newGame:[]
}

createFunction=async(e)=>{
    // e.preventDefault();
    const url="http://localhost:8001/addgame"
    const body={
        name:e.target.name.value,
        rate:e.target.rate.value,
        imagepath:e.target.imagepath.value,
        author:e.target.author.value,
        post:e.target.post.value,
        date:e.target.date.value,
        itchio_link:e.target.itchio.value
        
    }

    const response= await fetch(url,{method:'POST',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body:JSON.stringify(body)});
      const result=await response.json();
       this.setState({newGame:result})
       console.log("NEWGAME")
       console.log(this.state.newGame)
       
}

    
    render(){
        return(
            <div className="Create">
                <form onSubmit={this.createFunction}>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="number" name="rate" placeholder="Rate 1/10"/>
                    <input type="text" name="imagepath" placeholder="image"/>
                    <input type="text" name="author" placeholder="author"/>
                    <input type="text" name="post" placeholder="Blog"/>
                    <input type="text" name="date" placeholder="2020-12-31"/>
                    <input type="text" name="itchio" placeholder="link"/>
                    <input type="submit" name="submit"/>
                </form>
              <div>
                
              </div>
            </div>
        )
    }
}
export default Create;