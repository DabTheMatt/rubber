import React, { Component } from 'react';
import styled from 'styled-components';
import { setColor, setFlex } from '../styles';

export const Graph = styled.div`

${setFlex("center", "center")};
background: ${setColor.black};
height: 80%;
width: 80%;
`;

export default Graph;