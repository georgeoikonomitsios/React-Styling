//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
const time = d.getHours();

const customStyle = {
  color: "red"
};

const getH1 = (time) => {
  var greeting = "Hello";
  if (time >= 0 && time < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (time >= 12 && time < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Evening";
    customStyle.color = "blue";
  }
  return greeting;
};

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {getH1(time)}
    </h1>
  </div>,
  document.getElementById("root")
);
