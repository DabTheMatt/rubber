import './App.css';
import GraphArea  from './components/GraphArea';
import styled from 'styled-components';
import  {setFlex, setColor} from "./styles";
import Globals from './components/GlobalStyles';
import ControlPanel from './components/ControlPanel';

import React, { Component } from 'react';

class App extends Component {
  state = {
    palette: "green"
  }

changePalette = (color) => {
  console.log("color:", color);
  this.setState({
    palette: color
  })
}

  render() {
    return (
      <div>
        <Globals />
      <AppWrapper>
        <GraphArea 
        palette={this.state.palette}
        
        />
        <ControlPanel 
        changePalette={this.changePalette}
        />
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
