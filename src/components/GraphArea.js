import React, { Component } from 'react';
import styled from "styled-components";
import {setColor, setFlex} from "../styles";
import Graph from "./Graph";
import BlueGraph from "./BlueGraph";
import Playground from './Playground';

class GraphArea extends Component {
    render() {
        return (
            <GraphWrapper>
                
                <Playground />
            </GraphWrapper>
        );
    }
}

export const GraphWrapper = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
height: 80vh;
width: 80vw;


`;
export default GraphArea;