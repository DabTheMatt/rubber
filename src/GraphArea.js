import React, { Component } from 'react';
import styled from "styled-components";

class GraphArea extends Component {
    render() {
        return (
            <GraphWrapper>
                Hello from GraphWrapper
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
background: grey;

`;
export default GraphArea;