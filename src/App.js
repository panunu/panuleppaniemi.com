import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import backgroundImage from './img/panu.jpg';
import Conversation from './Conversation';

const App = styled.div`
  font-family: "Lekton", sans-serif;
  font-weight: 400;
  font-size: 22px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 100vh;
  overflow: ${props => props.overflow};
`;

const Image = styled.img`
  width: 100%;
`;

export default class extends Component {
  render() {
    return (
      <App>
        <Container overflow="scroll">
          <div style={{padding: '5%'}}>
          <Conversation/>
          </div>
        </Container>

        <Container>
          <Image src={backgroundImage} style={{opacity: 0.75}}/>
        </Container>
      </App>
    );
  }
}
