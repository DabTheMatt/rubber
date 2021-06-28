import React, { Component } from 'react';
import styled from "styled-components";
import SpriteHero from './SpriteHero';

class Playground extends Component {
    render() {
        return (
            <PlaygroundWrapper>
                <SpriteHero />
            </PlaygroundWrapper>
        );
    }
}

export const PlaygroundWrapper = styled.div`
height: 800px;
width: 800px;
background: linear-gradient(10deg, rgba(0,119,182,0.5), rgba(0,180,216, 0.5) );
`;

export default Playground;