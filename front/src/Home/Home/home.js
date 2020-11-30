import React, { Component } from "react";
import "./home.css";
import Search from "../search/search";
//import { withRouter } from 'react-router-dom';
//import { useHistory} from 'react-router-dom';
import Category from "../categories-home/categories-home";

class Home extends Component {
  dir = "../../../../back/";
  state = {
    games: [],
    gamesByDate: [],
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8001/games");
    const result = await response.json();
    //console.log(result);
    const resultDate = await result;
    this.setState({ games: result });
    const sorting = this.state.games.sort((a, b) => (a.rate > b.rate ? -1 : 1));
    console.log(this.state.games);

    this.setState({ gamesByDate: result });
    const sortingDate = this.state.gamesByDate.sort((x, y) =>
      x.date > y.date ? -1 : 1
    );
    console.log(this.state.gamesByDate);
    console.log(this.state.games);
  }

  render() {
    return (
      <div className="mainBody">
        <div className="mainHome">
          <div className="header">
            <Search />
          </div>

          <h2 className="h2">Top Rated Blogs:</h2>
          <div className="cardContainer fiveCards">
            <div className="inner">
              {this.state.games.slice(0, 4).map((g) => (
                <div key={g.id}>
                  <div className="card" data={g.id}>
                    <img src={g.imagepath} />
                    <div className="info">
                      <h5>{g.name}</h5>
                      <h5> Rating: {g.rate}</h5>
                      {/* <p>Release Date: {g.releasdate}</p> */}
                      <button
                        onClick={(event) =>
                          (window.location.href = `./description/${g.id}`)
                        }
                      >
                        Read More
                      </button>

                      <div className="gameName">
                        <h5>{g.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="h2">Most Recent Blogs:</h2>
          <div className="cardContainer fiveCards">
            <div className="inner">
              {this.state.gamesByDate.slice(0, 4).map((g) => (
                <div key={g.id}>
                  <div className="card">
                    <img src={g.imagepath} alt="among us" />
                    <div className="info">
                      <h5>{g.name}</h5>
                      {/* <h5> Rating: {g.rate}</h5> */}
                      <p>Posted On: {g.date}</p>
                      <button onClick={(event) =>
                          (window.location.href = `./description/${g.id}`)
                        }>Read More</button>
                      <div className="gameName">
                        <h5>{g.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Category />
          <div className=" all ">
            <div className="inner">
              {this.state.games.map((g) => (
                <div key={g.id}>
                  <div className="card">
                    <img src={g.imagepath} />
                    <div className="info">
                      <h5>{g.name}</h5>
                      {/* <h5> Rating: {g.rate}</h5>
                         <p>Release Date: {g.releasdate}</p> */}
                      <button onClick={(event) =>
                          (window.location.href = `./description/${g.id}`)
                        }>Read More</button>
                      <div className="gameName">
                        <h5>{g.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
