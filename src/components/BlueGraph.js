import React, { Component } from 'react';
import styled from "styled-components";
import { setColor, setFlex } from '../styles';

class BlueGraph extends Component {
state = {

}

    render() {
        return (
            <BlueGraphWrapper>
                <h1></h1>
                <div className="blueGraphBcg">
                    <div className="axisX"></div>
                    <div className="axisStart"></div>
                    <div className="axisEnd">&#62;</div>
                    <div className="percentsWrapper">
                    <div className="percent10"></div>
                    <div className="percent20"></div>
                    <div className="percent30"></div>
                    <div className="percent40"></div>
                    <div className="percent50"></div>
                    <div className="percent60"></div>
                    <div className="percent70"></div>
                    <div className="percent80"></div>
                    <div className="percent90"></div>
                    </div>
                </div>
            </BlueGraphWrapper>
        );
    }
}

export const BlueGraphWrapper = styled.div`
    color: ${setColor.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .blueGraphBcg {
        background: linear-gradient(10deg, rgba(0,119,182,0.5), rgba(0,180,216, 0.5) );
        height: 40vh;
        width: 70vw;
        z-index: 0;
        display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 5px 5px rgba(0,0,0,0.5);
    }

    .axisX {
        background: ${setColor.white};
        height: 1px;
        width: 65vw;
        z-index: 1;
        position: absolute;
        
    }

    .axisStart {
        background: ${setColor.white};
        height: 10px;
        width: 1px;
        position: relative;
        left: -32.5vw;
        top: 13px;
    }

    .axisEnd {
        position: relative;
        left: 32.3vw;
        top: -2px;
        font-weight: 400;
    }

    .percent10 {
        background: ${setColor.white};
        height: 10px;
        width: 1px;
        position: relative;
       
    }

    .percent20 {
        background: ${setColor.white};
        height: 10px;
        width: 1px;
        position: relative;
        
    }
    .percent30 {
        background: ${setColor.white};
        height: 10px;
        width: 1px;
        position: relative;
       
    }
    .percent40 {
        background: ${setColor.white};
        height: 10px;
        width: 1px;
        position: relative;
    }
    .percent50 {
        background: ${setColor.white};
        height: 10px;
        width: 1px;
        position: relative;
       
    }
    .percent60 {
        background: ${setColor.white};
        height: 10px;
        width: 1px;
        position: relative;
        
    }
    .percent70 {
        background: ${setColor.white};
        height: 10px;
        width: 1px;
        position: relative;
        
     
    }
    .percent80 {
        background: ${setColor.white};
        height: 10px;
        width: 1px;
        position: relative;
        
        
    }
    .percent90 {
        background: ${setColor.white};
        height: 10px;
        width: 1px;
        position: relative;
        
    }

    .percentsWrapper {
        height: 10px;
        width: 65vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        top: -15px
    }
`;


export default BlueGraph;