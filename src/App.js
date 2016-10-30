import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import backgroundImage from './img/panu.jpg';
import Conversation from './Conversation';

const App = styled.div`
  font-family: "Lekton", sans-serif;
  font-weight: 400;
  font-size: 22px;
`;

const ConversationContainer = styled.div`
  margin: 0 auto;
  max-width: 720px;
  height: 100vh;
  overflow: scroll;
  padding: 5%;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FCFCFC;
`;

const Image = styled.img`
  width: 50%;
`;

export default class extends Component {
  render() {
    return (
      <App>
        <ConversationContainer>
          <Conversation/>
        </ConversationContainer>

        <Container>
          <Image src={backgroundImage} style={{opacity: 0.9}}/>
        </Container>
      </App>
    );
  }
}
