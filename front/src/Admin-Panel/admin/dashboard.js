import React, { Component } from "react";
import Category from "../categories/categories";
import Search from "../search/search";
import AllCards from "../card/allCard";
//import Create from '../create/create';
import "./dash.css";

import Bold from "./img/bold.svg";
import Downarrow from "./img/downarrow.svg";
import Indent from "./img/indent.svg";
import Inserthorizontal from "./img/inserthorizontal.svg";
import Insertlink from "./img/insertlink.svg";
import Insertorderlist from "./img/insertorderlist.svg";
import Insertunorderedlist from "./img/insertunorderedlist.svg";
import Italic from "./img/italic.svg";
import Justifyblock from "./img/justifyblock.svg";
import Justifycenter from "./img/justifycenter.svg";
import Justifyleft from "./img/justifyleft.svg";
import Justifyright from "./img/justifyright.svg";
import Outdent from "./img/outdent.svg";
import Removeformat from "./img/removeformat.svg";
import Showhtml from "./img/showhtml.svg";
import Strikethrough from "./img/strikethrough.svg";
import Underline from "./img/underline.svg";
import Undo from "./img/undo.svg";
import Unlink from "./img/unlink.svg";

class Dashboard extends Component {
  componentDidMount() {
    const editor = document.getElementsByClassName("editor")[0];
    const toolbar = editor.getElementsByClassName("toolbar")[0];
    const buttons = toolbar.querySelectorAll(".btn:not(.has-submenu)");

    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];

      button.addEventListener("click", function (e) {
        let action = this.dataset.action;
        switch (action) {
          case "code":
            execCodeAction(this, editor);
            break;
          case "createLink":
            execLinkAction();
            break;
          case "insertImage":
            ins(action);
            break;
          default:
            execDefaultAction(action);
        }
      });
    }

    function execCodeAction(button, editor) {
      const contentArea = editor.getElementsByClassName("content-area")[0];
      const visuellView = contentArea.getElementsByClassName("visuell-view")[0];
      const htmlView = contentArea.getElementsByClassName("html-view")[0];

      if (button.classList.contains("active")) {
        // show visuell view
        visuellView.innerHTML = htmlView.value;

        htmlView.style.display = "none";
        visuellView.style.display = "block";

        button.classList.remove("active");
      } else {
        // show html view
        htmlView.innerText = visuellView.innerHTML;
        visuellView.style.display = "none";
        htmlView.style.display = "block";

        button.classList.add("active");
      }
    }

    //for creating links
    function execLinkAction() {
      let linkValue = prompt("Link (e.g. https://www.google.com)");
      document.execCommand("createLink", false, linkValue);
    }

    //to make text bold or italic..etc depends on value of button
    function execDefaultAction(action) {
      document.execCommand(action, false);
    }
    //insert image
    /*
        function insertHTML(img) {
          var id = "rand" + Math.random();
          
          editor = editor.document ? editor.document : editor.contentWindow.document;
          img = "<img src='" + img + "' id=" + id + ">";
        
          if(document.all) {
            var range = editor.selection.createRange();
            range.pasteHTML(img);
            range.collapse(false);
            range.select();
          } else {
            doc.execCommand("insertHTML", false, img);
          }
          return editor.getElementById(id);
        }*/
    function ins(action) {
      document.execCommand("insertImage", 0, prompt("url"));
    }
  }
  createFunction = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8001/addgame";
    const body = {
      name: e.target.name.value,
      rate: e.target.rate.value,
      imagepath: e.target.imagepath.value,
      author: e.target.author.value,
      post: e.target.post.value,
      date: e.target.date.value,
      itchio_link: e.target.itchio.value,
    };
    console.log(body);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    //this.setState({newGame:result})
    console.log("NEWGAME");
    console.log(result);
  };

  render() {
    return (
      <div className="mainContainer">
        <div>
          <Search />
        </div>

        <main className="container">
          <div className="Create">
            <form
              method="POST"
              encType="multipart/form-data"
              onSubmit={this.createFunction}
              className="subForm"
            >
              <input type="text" name="name" placeholder="Name" />
              <input type="number" name="rate" placeholder="Rate 1/10" />
              <input type="file" name="imagepath" />
              <input type="text" name="author" placeholder="author" />
              <input type="text" name="post" placeholder="Blog" />
              <input type="text" name="date" placeholder="2020-12-31" />
              <input type="text" name="itchio" placeholder="link" />
              <input type="submit" name="submit" />
            </form>
            <div></div>
          </div>

          <div className="editor">
            <div className="toolbar">
              <div className="line">
                <div className="box">
                  <span
                    className="btn icon smaller"
                    data-action="bold"
                    title="Bold"
                  >
                    <img src={Bold} alt="bold" />
                  </span>
                  <span
                    className="btn icon smaller"
                    data-action="italic"
                    title="Italic"
                  >
                    <img src={Italic} alt="Italic" />
                  </span>
                  <span
                    className="btn icon smaller"
                    data-action="underline"
                    title="Underline"
                  >
                    <img src={Underline} alt="underline" />
                  </span>
                  <span
                    className="btn icon smaller"
                    data-action="strikeThrough"
                    title="Strike through"
                  >
                    <img src={Strikethrough} alt="strikethrough" />
                  </span>
                </div>

                <div className="box">
                  <span className="btn icon has-submenu">
                    <img src={Downarrow} alt="Downarrow" />
                    <div className="submenu">
                      <span
                        className="btn icon"
                        data-action="justifyLeft"
                        title="Justify left"
                      >
                        <img src={Justifyleft} alt="justify left" />
                      </span>
                      <span
                        className="btn icon"
                        data-action="justifyCenter"
                        title="Justify center"
                      >
                        <img src={Justifycenter} alt="Justify center" />
                      </span>
                      <span
                        className="btn icon"
                        data-action="justifyRight"
                        title="Justify right"
                      >
                        <img src={Justifyright} alt="Justify right" />
                      </span>
                      <span
                        className="btn icon"
                        data-action="formatBlock"
                        title="Justify block"
                      >
                        <img src={Justifyblock} alt="justify block" />
                      </span>
                    </div>
                  </span>
                  <span
                    className="btn icon"
                    data-action="insertOrderedList"
                    title="Insert ordered list"
                  >
                    <img src={Insertorderlist} alt="insert ordered list" />
                  </span>
                  <span
                    className="btn icon"
                    data-action="insertUnorderedList"
                    title="Insert unordered list"
                  >
                    <img
                      src={Insertunorderedlist}
                      alt="Insert unordered list"
                    />
                  </span>
                  <span
                    className="btn icon"
                    data-action="outdent"
                    title="Outdent"
                  >
                    <img src={Outdent} alt="Outdent" />
                  </span>
                  <span
                    className="btn icon"
                    data-action="indent"
                    title="Indent"
                  >
                    <img src={Indent} alt="indent" />
                  </span>
                </div>
                <div className="box">
                  <span
                    className="btn icon"
                    data-action="insertHorizontalRule"
                    title="Insert horizontal rule"
                  >
                    <img src={Inserthorizontal} alt="Insert horizontal rule" />
                  </span>
                </div>
              </div>
              <div className="line">
                <div className="box">
                  <span
                    className="btn icon smaller"
                    data-action="undo"
                    title="Undo"
                  >
                    <img src={Undo} alt="undo" />
                  </span>
                  <span
                    className="btn icon"
                    data-action="removeFormat"
                    title="Remove format"
                  >
                    <img src={Removeformat} alt="Remove format" />
                  </span>
                </div>

                <div className="box">
                  <span
                    className="btn icon smaller"
                    data-action="createLink"
                    title="Insert Link"
                  >
                    <img src={Insertlink} alt="insert link" />
                  </span>
                  <span
                    className="btn icon smaller"
                    data-action="unlink"
                    title="Unlink"
                  >
                    <img src={Unlink} alt="unlink" />
                  </span>
                </div>

                <div className="box">
                  <span
                    className="btn icon"
                    data-action="code"
                    title="Show HTML-Code"
                  >
                    <img src={Showhtml} alt="show html" />
                  </span>
                </div>
                <div className="box">
                  <span
                    className="btn icon"
                    data-action="insertImage"
                    title="Show "
                  >
                    <img src={Showhtml} alt="show html" />
                  </span>
                </div>
              </div>
            </div>
            <div className="content-area">
              <div
                className="visuell-view"
                contentEditable="true"
                suppressContentEditableWarning="true"
              >
                write here..
              </div>
              <textarea className="html-view"></textarea>
            </div>
          </div>

          <div className="blogs">
            <h2>blogs</h2>
            <div>
              <Category />
              <AllCards />
            </div>
          </div>
        </main>

        {/* <Create /> */}
      </div>
    );
  }
}
export default Dashboard;
