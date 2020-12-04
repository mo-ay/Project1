import React, { Component } from "react";
import "./search.css";
import logo from "../../indie_bite-01.png";
import searchicon from "../../search.png"
import trash from "../../trash.png"
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Confirm } from 'react-st-modal';

import searchicon from "../../search.png";

class Search extends Component {
  state = {
    game: []
  };


  




  searchFunction = async (e) => {
    e.preventDefault();

    const searchInput = e.target.searchInput.value;
    if (!searchInput) {
      e.preventDefault();
    } else {
      const url = `http://localhost:8001/games/${searchInput}`;
      const response = await fetch(url);
      const result = await response.json();
      //console.log(result);

      this.setState({ game: result });
      console.log(this.state.game);
    }
  };




  removeGame = async (id) => {
    const url = `http://localhost:8001/deletegame/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

     
  };

  render() {
   
    return (
      <div className="Search dashSearch">
        <div className="searchHead">
          <a href="/">
            {" "}
            <img src={logo} alt="Indie Bite" className="logo" />{" "}
          </a>{" "}
          <form onSubmit={this.searchFunction} className="headerForm">
            <input
              type="text"
              name="searchInput"
              className="search"
              placeholder="What are you looking for?"
            />
            <button type="submit" name="submit" className="searchButton">
              <img src={searchicon} className="searchIcon" />
            </button>
          </form>
        </div>

        <div
          className="cardContainer searchContainer"
          style={{ boxShadow: "none" }}
        >
          {this.state.game.map((g) => (
            <div key={g.id} className="card">
              <img src={g.imagepath} />
              <div className="info">
              <ul className="myTrash"><li onClick={async () =>{
                        const isConfirm = await Confirm(
                          'You cannot undo this action',
                          'Are you sure you want to delete the entry?'
                        );
                        if (isConfirm) {
                         
                          this.removeGame(g.id)
                          window.location.reload();
                        }
                        
                        }}> 
                      
                      <img  src={trash} className="myTrash"/> 
                </li></ul>
                <h5>{g.name}</h5>
                <h5> Rating: {g.rate}</h5>
                <p>author: {g.author}</p>
                <p> date: {g.date}</p>
                <button
                  onClick={(event) =>
                    (window.location.href = `./description/${g.id}`)
                  }
                >
                  Read More
                </button>
              
              </div>

              <div className="gameName">
                <h5>{g.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Search;
//{this.state.game.map(g =>{game.name})}
