import React from "react";
import ReactDOM from "react-dom";

var firstName = "Crystal";
var lastName = "McLean";
var today = Date();
var img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1> jsx with images, date </h1>
    <h1 className="heading">
      hello {firstName} {lastName}
    </h1>
    <p>today is {today}</p>
    <h1>this is exercise 3</h1>
    <img src={img} alt="random" />
  </div>,
  document.getElementById("root")
);
