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
            </BlueGraphWrapper>
        );
    }
}

export const BlueGraphWrapper = styled.div`
    color: ${setColor.white};
    ${setFlex("center", "center", "column")};
    

`;


export default BlueGraph;