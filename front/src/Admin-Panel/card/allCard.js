import React, { Component } from "react";
import "./Style.css";
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Card extends Component {
  state = {
    games: [],
  };
  async componentDidMount() {
    const response = await fetch("http://localhost:8001/games");
    const result = await response.json();
    //console.log("INDIE BITE LINE 11");
    //console.log(result);
    this.setState({ games: result });
    console.log(this.state.games);
  }

  removeGame = async (id) => {
    const url = `http://localhost:8001/deletegame/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    this.componentDidMount();
  };
  //   updateGame = async(x)=>{
  //     const url=`http://localhost:8001/updategame`
  //     const body={
  //       name:x.target.name.value,
  //       rate:x.target.rate.value,
  //       imagepath:x.target.imagepath.value,
  //       author:x.target.author.value,
  //       post:x.target.post.value,
  //       date:x.target.date.value,
  //       itchio_link:x.target.itchio.value,
  //       id:x
  //      }
  //      const response =await fetch (url,{
  //     method:'PUT',
  //     headers:{
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify(body)
  //   }) ;
  //   const result= await response.json()
  //   console.log(result);
  //  }

  render() {
    return (
      <div className="bodyDash">
        <div className="cardContainerAll">
          {this.state.games.slice(0, 4).map((g) => (
            <div key={g.id}>
              <div className="card">
                <img src={g.imagepath} />
                <div className="info">
                  <span
                    style={{ color: "red", margin: "20px" }}
                    onClick={() => this.removeGame(g.id)}
                  >
                    &times;
                  </span>
                  <h5>{g.name}</h5>
                  <h5> Rating: {g.rate}/10</h5>
                  <p>Author: {g.author}</p>
                  <button
                    button
                    onClick={(event) =>
                      (window.location.href = `./description/${g.id}`)
                    }
                  >
                    Read More
                  </button>

                  {/* <input type="submit" name="submit" value={g.id} /> */}

                  <div className="gameName">
                    <h5>{g.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <h3>Enter your updated info then click the game's update button</h3>
                   <form onSubmit={()=>this.updateGame(e.target.submit.value)}>
                       <input type="text" name="name" placeholder="Name" />
                       <input type="number" name="rate" placeholder="Rate 1/10" />
                       <input type="file" name="imagepath" />
                       <input type="text" name="author" placeholder="author" />
             
                       <input type="text" name="date" placeholder="2020-12-31" />
                       <input type="text" name="itchio" placeholder="link" />
                       </form> */}
      </div>
    );
  }
}
export default Card;
