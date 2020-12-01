import React, { Component } from "react";
// @ts-ignore
import { FacebookButton, FacebookCount } from "react-social";
import { TwitterButton, TwitterCount } from "react-social";
import "./shareBtn.css";
import facebook from "../facebook.png";
import twitter from "../twitter.png";

class Facebtn extends Component {
  render() {
    let url = window.document.location.href;

    return (
      <div className="media">
        <div className="shrbtn">
          <FacebookButton url={url} appId={2848830095385476}> 
          <img src={facebook} className="mediaButton facebook"></img>
          </FacebookButton>
        </div>

        <div className="shrbtn">
          <TwitterButton url={url} appId={2848830095385476}> 
          <img src={twitter} className="mediaButton twitter"></img>
            
          </TwitterButton>
        </div>
      </div>
    );
  }
}
export default Facebtn;
