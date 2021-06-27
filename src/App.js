import './App.css';
import GraphArea  from './components/GraphArea';
import styled from 'styled-components';
import  {setFlex, setColor} from "./styles";
import Globals from './components/GlobalStyles';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Globals />
      <AppWrapper>
        <GraphArea/>
      </AppWrapper>
      </div>
    );
  }
}

export const AppWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background: ${setColor.gray};
`;

export default App;
