import React, { Component } from "react";
import "./search.css";
import "./w3.css";
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
        <div>
          <img
            src="./img/indie_bite-01.svg"
            alt="Indie Bite"
            className="logo"
          />
          <form onSubmit={this.searchFunction}>
            <input
              type="text"
              name="searchInput"
              className="search"
              placeholder="What are you looking for?"
            />
            <button type="submit" name="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="cardContainer" style={{ boxShadow: "none" }}>
          {this.state.game.map((g) => (
            <div key={g.id} className="card">
              <img src="https://images.wallpaperscraft.com/image/night_city_aerial_view_night_192859_1024x768.jpg" />
              <div className="info">
                <h5>{g.name}</h5>
                <h5> Rating: {g.rate}</h5>
                <p>Release Date: {g.releasdate}</p>
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
