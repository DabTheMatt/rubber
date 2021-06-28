import React, { Component } from "react";
import styled from "styled-components";
import { setColor } from "../styles";

class SpriteHero extends Component {
  state = {
    top: 20,
    left: 20,
    topOff: "",
    leftOff: "",
    top2: 280,
    left2: 280,
    top2Off: 0,
    left2Off: 1,
    div1Color: "black",
    div2Color: "white"
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
    } else if (e.keyCode === 87) {
        this.setState({
            top2: this.state.top2 - 10
        })
    } else if (e.keyCode === 65) {
        this.setState({
          left2: this.state.left2 - 10,
        });
      } else if (e.keyCode === 83) {
        this.setState({
          top2: this.state.top2 + 10,
        });
      } else if (e.keyCode === 68) {
        this.setState({
          left2: this.state.left2 + 10,
        });
      }
      
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    console.log("pressed", e.keyCode, "top:", div1.offsetTop, "left", div1.offsetLeft, e.keyCode, "top2:", div2.offsetTop, "left2", div2.offsetLeft);
    this.setState({
        topOff: div1.offsetTop,
        leftOff: div1.offsetLeft,
        top2Off: div2.offsetTop,
        left2Off: div2.offsetLeft 
    })
    
    
    if (this.state.top === this.state.top2 && this.state.left === this.state.left2) {
        this.setState({
            div1Color: "red",
            div2Color: "red"
        })
        console.log("collision");
    } else {
        this.setState({
            div1Color: "black",
            div2Color: "white"
        })
    }

    if (this.state.topOff < 10 || this.state.leftOff < 10) {
        this.setState({
            div1Color: "green"
        })
    } else {
        this.setState({
            div1Color: "black",
            
        })
    }
  };

handleCollision = () => {
    
}

  

   

  render() {
    return (
      <div style={{position: "absolute"}}>
        <BlackBox1
          left={this.state.left}
          top={this.state.top}
          background={this.state.div1Color}
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
          background={this.state.div2Color}
          id="div2"
        >
        </BlackBox2>
        
      </div>
    );
  }
}

export const BlackBox1 = styled.div`
  height: 20px;
  width: 20px;
  background: ${props => props.background};
  position: relative;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};

  input {
      opacity: 0;
      cursor: pointer;
      width: 20px;
      height: 20px;
  }
`;
export const BlackBox2 = styled.div`
  height: 20px;
  width: 20px;
  background: ${props => props.background};
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
