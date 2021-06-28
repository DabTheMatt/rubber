import React, { Component } from 'react';
import styled from "styled-components";
import {setColor, setFlex} from "../styles";
import Graph from "./Graph";
import BlueGraph from "./BlueGraph";
import Playground from './Playground';
import PixelBackgroud from './PixelBackgroud';

class GraphArea extends Component {
    render() {
        return (
            <GraphWrapper>
                
                <PixelBackgroud />
            </GraphWrapper>
        );
    }
}

export const GraphWrapper = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
height: 800px;
width: 800px;


`;
export default GraphArea;