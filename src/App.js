import React, { Component } from 'react';
import styled from 'styled-components';

import backgroundImage from './panu.jpg';
import Conversation from './Conversation';

const App = styled.div`
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: top right;
  min-height: 800px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

export default class extends Component {
  render() {
    return (
      <App>
        <Container>
          <Conversation/>
        </Container>
      </App>
    );
  }
}
