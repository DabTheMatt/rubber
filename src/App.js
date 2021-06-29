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
    palette: color,
    blues: ["03045e", "023e8a", "0077b6", "0096c7", "00b4d8", "48cae4", "90e0ef", "ade8f4", "caf0f8", "ffffff"],
    greens: ["d9ed92", "b5e48c", "99d98c", "76c893", "52b69a", "34a0a4", "168aad", "1a759f", "1e6091", "184e77", "ffffff"]
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
