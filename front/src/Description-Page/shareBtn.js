import React, { Component } from "react";
// @ts-ignore
import { FacebookButton, FacebookCount } from "react-social";
import { TwitterButton, TwitterCount } from "react-social";
import "./shareBtn.css";

class Facebtn extends Component {
  render() {
    let url = window.document.location.href;

    return (
      <div>
        <div className="shrbtn">
          <FacebookButton url={url} appId={2848830095385476}>
            <FacebookCount />
            &nbsp;Facebook
          </FacebookButton>
        </div>

        <div className="shrbtn">
          <TwitterButton url={url} appId={2848830095385476}>
            <TwitterCount />
            Twitter
          </TwitterButton>
        </div>
      </div>
    );
  }
}
export default Facebtn;
