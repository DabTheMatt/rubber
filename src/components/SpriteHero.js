import React, { Component } from "react";
import styled from "styled-components";
import { setColor } from "../styles";

class SpriteHero extends Component {
  state = {
    top: 380,
    left: 380,
    topOff: "",
    leftOff: "",
    top2: 280,
    left2: 280,
    top2Off: "",
    left2Off: ""
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      this.setState({
        left: this.state.left + 10,
      });
    } else if (e.keyCode === 37) {
      this.setState({
        left: this.state.left - 10,
      });
    } else if (e.keyCode === 38) {
      this.setState({
        top: this.state.top - 10,
      });
    } else if (e.keyCode === 40) {
      this.setState({
        top: this.state.top + 10,
      });
    }
    const div1 = document.getElementById("div1");
    console.log("pressed", e.keyCode, "top:", div1.offsetTop, "left", div1.offsetLeft);
    this.setState({
        topOff: div1.offsetTop,
        leftOff: div1.offsetLeft
    })
    this.handleCollision();
  };

handleCollision = () => {
    if (this.state.topOff === this.state.top2Off && this.state.leftOff === this.state.left2Off) {
        console.log("collision");
    }
}

  handleKeyDown2 = (e ) => {
    if (e.keyCode === 39) {
      this.setState({
        left2: this.state.left2 + 10,
      });
    } else if (e.keyCode === 37) {
      this.setState({
        left2: this.state.left2 - 10,
      });
    } else if (e.keyCode === 38) {
      this.setState({
        top2: this.state.top2 - 10,
      });
    } else if (e.keyCode === 40) {
      this.setState({
        top2: this.state.top2 + 10,
      });
    }
    const div2 = document.getElementById("div2");
    console.log("pressed", e.keyCode, "top:", div2.offsetTop, "left", div2.offsetLeft);
    this.setState({
        top2Off: div2.offsetTop,
        left2Off: div2.offsetLeft
    })
  };

  render() {
    return (
      <div>
        <BlackBox1
          left={this.state.left}
          top={this.state.top}
          id="div1"
        ><input
        name="1"
          autoFocus
          onKeyDown={(e) => this.handleKeyDown(e)}
          
        />
        </BlackBox1>
        <BlackBox2
          left2={this.state.left2}
          top2={this.state.top2}
          id="div2"
        ><input
        name="2"
          autoFocus
          onKeyDown={(e) => this.handleKeyDown2(e)}
          
        />
        </BlackBox2>
        
      </div>
    );
  }
}

export const BlackBox1 = styled.div`
  height: 20px;
  width: 20px;
  background: ${setColor.black};
  position: relative;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};

  input {
      opacity: 0;
      cursor: pointer;
      width: 20px;
  }
`;
export const BlackBox2 = styled.div`
  height: 20px;
  width: 20px;
  background: ${setColor.black};
  position: relative;
  left: ${(props) => `${props.left2}px`};
  top: ${(props) => `${props.top2}px`};

  input {
      opacity: 0;
      cursor: pointer;
      width: 20px;
  }
`;

export default SpriteHero;
