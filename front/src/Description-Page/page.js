import React, { Component } from "react";
import "./page.css";
import Facebtn from './shareBtn'
// import ShareBtn from 'react-share-button'

// import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
// import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
// import 'react-sharingbuttons/dist/main.css'

class CardSelected extends Component {
  state = {
    oneGame: [],
  };

  componentDidMount() {
    this.getGame();
  }

  getGame = async () => {
    const id = this.props.match.params.id;
    console.log(id);
    const response = await fetch(`http://localhost:8001/game/${id}`);
    const result = await response.json();
    //console.log(result);
    this.setState({ oneGame: result });
    console.log(this.state.oneGame);
    console.log(window.document.location.href)
  };
  //  sharingButtons = () => {
  //   const url = 'https://github.com/caspg/react-sharingbuttons'
  //   const shareText = 'Check this site!'
  
  //   return (
  //     <div>
  //       <Facebook url={url} />
  //       <Twitter url={url} shareText={shareText} />
  //     </div>
  //   )
  // }

  render() {
    return (
      <div className="main">
        <div className="body">
          <div className="CardSelected">
            <div>
              {this.state.oneGame.map((g) => (
                <div key={g.id}>
                  <img
                    src={g.imagepath}
                    className="cover"
                  />
                  <h3 className="name">{g.name}</h3>

                  <div className="aboutBlog">
                    <div className="description">
                      <ul>
                        <li>Author: {g.author}</li>
                        <li>Game Review: {g.rate}/10</li>
                        <li>Posted On: {g.date}</li>
                        <li>
                          {" "}
                          <a href={g.itchio_link}> Play the game on itchio</a>
                        </li>
                        {/* {this.sharingButtons()} */}
                        <Facebtn />
                      </ul>
                    </div>
                    <div className="blog" dangerouslySetInnerHTML={{__html:g.post}}  ></div>
                   </div>

                </div>
              ))}
            </div>
          </div>
          <div className="suggested">
            <h4>Suggested Blog :</h4>

            <div className="card"></div>
          </div>
          <a href="/" className="back">
            Back to Blogs Page
          </a>
        </div>
      </div>
    );
  }
}
export default CardSelected;
