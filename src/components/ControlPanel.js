import React, { Component } from 'react';
import styled from "styled-components";
import {setColor} from "../styles"

class ControlPanel extends Component {
    handleColor = (color) => {
        this.props.changePalette(color)
    }

    render() {
        return (
            <ControlPanelWrapper>
                <div className="blue" 
                onClick={()=>this.handleColor("blue")}></div>
                <div className="green" 
                onClick={()=>this.handleColor("green")}></div>
            </ControlPanelWrapper>
        );
    }
}

export const ControlPanelWrapper = styled.div`
width: 200px;
height: 600px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

.blue {
    width: 40px;
    height: 40px;
    background: #0077b6;
    border: 0.5px solid ${setColor.black};
    opacity: 0.9;
    margin-bottom: 1rem;;
}

.green {
    width: 40px;
    height: 40px;
    background: #52b69a;
    border: 0.5px solid ${setColor.black};
    opacity: 0.9;
    
}
`;


export default ControlPanel;