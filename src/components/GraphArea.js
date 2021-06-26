import React, { Component } from 'react';
import styled from "styled-components";
import {setColor, setFlex} from "../styles";
import Graph from "./Graph";
import BlueGraph from "./BlueGraph";

class GraphArea extends Component {
    render() {
        return (
            <GraphWrapper>
                <BlueGraph />
                
            </GraphWrapper>
        );
    }
}

export const GraphWrapper = styled.div`
${setFlex("center", "center", "column")};
height: 80vh;
width: 80vw;
background: ${setColor.gray};

`;
export default GraphArea;