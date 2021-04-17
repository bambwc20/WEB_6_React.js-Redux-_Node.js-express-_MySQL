import React, { Component } from "react";

class Weather extends Component {
  Body = {
    SetColor: function (Bodycolor, Fontcolor) {
      document.querySelector("body").style.backgroundColor = Bodycolor;
      document.querySelector("body").style.color = Fontcolor;
    },
  };

  AllLinks = {
    SetColor: function (color) {
      var alist = document.querySelectorAll("a");
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = ++i;
      }
    },
  };

  render() {
    if (this.props.weather === "DAY") {
      this.Body.SetColor("white", "black");

      this.AllLinks.SetColor("blue");
    } else {
      this.Body.SetColor("black", "white");

      this.AllLinks.SetColor("powderblue");
    }

    return (
      <div>
        <input
          type="button"
          value={this.props.weather === "DAY" ? "NIGHT" : "DAY"}
          onClick={() => {
            this.props.onEvent(this.props.weather === "DAY" ? "NIGHT" : "DAY");
          }}
        />
      </div>
    );
  }
}

export default Weather;
