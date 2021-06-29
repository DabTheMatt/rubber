import React, { Component } from 'react';
import styled from "styled-components";
import { setColor } from '../styles';

class PixelBackgroud extends Component {
    state = {
        id: 0,
        pixels: [],
        palette: "blue",
        colors: ["03045e", "023e8a", "0077b6", "0096c7", "00b4d8", "48cae4", "90e0ef", "ade8f4", "caf0f8", "ffffff"],
        greens: ["d9ed92", "b5e48c", "99d98c", "76c893", "52b69a", "34a0a4", "168aad", "1a759f", "1e6091", "184e77", "ffffff"]
    }

componentDidMount = () => {
    
    console.log("prpos:", this.props.palette);
    this.setState({
        palette: this.props.palette
    })

    let tempPixels = this.state.pixels
    for (let i=0; i<400; i++) {

        if (this.state.palette === "blue") {
            console.log("blue", this.state.palette);
        let pixel = {
        id: i,
        clicked: false,
        color: Math.floor(Math.random() * ((this.state.colors.length-1) - 1)*1)
    }
        tempPixels.push(pixel)
    }
    
else if (this.props.palette === "green") {
    console.log("palette:", this.state.palette);
    let pixel = {
    id: i,
    clicked: false,
    color: Math.floor(Math.random() * ((this.state.greens.length-1) - 1)*1)
}
    tempPixels.push(pixel)
}
this.setState({
    pixels: tempPixels
})
    }


}

handleClick = (id) => {
    console.log("clicked", id);
    let tempPixels = this.state.pixels;
    tempPixels.forEach((el) => {
        
        if (el.id === id) {
            console.log("here", el.id);
            if (!el.clicked) {
                el.color = this.state.colors.length-1;
                el.clicked = true
            } else if (el.clicked) {
                el.color = Math.floor(Math.random() * ((this.state.colors.length-1) - 1)*1);
                el.clicked = false
            }
            
        }})
        this.setState({
            pixels: [...tempPixels]
        })
    
    
    
}

    render() {
        return (
            <PixelBackgroudWrapper>
                {this.state.pixels.map((el)=>{
                    return (
                        <div 
                        key={el.id}
                        onClick={()=>this.handleClick(el.id)}
                        className="pixel" style={{background: `#${this.state.colors[el.color]}`}}></div>
                    )
                })}
            </PixelBackgroudWrapper>
            
        );
    }
}

export const PixelBackgroudWrapper = styled.div`
background: black;
height: 100%;
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
justify-content: flex-start;
box-shadow: 20px 20px 20px rgba(0,0,0,0.2);

.pixel {
    width: 5%;
    height: 5%;
    border: 0.5px solid ${setColor.black};
    opacity: 0.9;
}
`;

export default PixelBackgroud;