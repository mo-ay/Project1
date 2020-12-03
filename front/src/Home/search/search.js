import React, { Component } from "react";
import "./search.css";
import "./w3.css";
import logo from "./indie_bite-01.svg"
import searchicon from "../../search.png"
//  import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Search extends Component {
  state = {
    game: [],
  };
  searchFunction = async (e) => {
    e.preventDefault();

    const searchInput = e.target.searchInput.value;
    if (!searchInput) {
      e.preventDefault();
    } else {
      const url = `http://localhost:8001/games/${searchInput}`;
      const response = await fetch(url);
      console.log(response);
      const result = await response.json();
      //console.log(result);
      this.setState({ game: result });
      console.log(this.state.game);
    }
  };

  render() {
    return (
      <div className="Search">
        <div className="search2">
          <a href="/"><img
            src={logo}
            alt="Indie Bite"
            className="logo"
          /></a>
          <form onSubmit={this.searchFunction}>
            <input
              type="text"
              name="searchInput"
              className="search"
              placeholder="What are you looking for?"
            />
            <button type="submit" name="submit" className="searchButton">
            <img src={searchicon} className="searchIcon"/>
            </button>
          </form>
        </div>
        <div className="cardContainer" style={{ boxShadow: "none" }}>
          {this.state.game.map((g) => (
            <div key={g.id} className="card">
              <img src={g.magepath} />
              <div className="info">
                <h5>{g.name}</h5>
                <h5> Rating: {g.rate}</h5>
               
                <button
                        onClick={(event) =>
                          (window.location.href = `./description/${g.id}`)
                        }>Read More</button>
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
