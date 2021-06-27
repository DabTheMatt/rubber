import React, { Component } from 'react';
import styled from "styled-components";
import { setColor, setFlex } from '../styles';

class BlueGraph extends Component {
state = {

}

    render() {
        return (
            <BlueGraphWrapper>
                <h1>Blue One</h1>
                <div className="blueGraphBcg">
                    <div className="axisX"></div>
                    <div className="axisStart"></div>
                    <div className="axisEnd">&#62;</div>
                    <div></div>
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
        background: ${setColor.blueAccent};
        height: 40vh;
        width: 70vw;
        z-index: 0;
        display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
        top: 8px;
    }

    .axisEnd {
        position: relative;
        left: 32.3vw;
        top: -7px;
        font-weight: 400;
    }
`;


export default BlueGraph;