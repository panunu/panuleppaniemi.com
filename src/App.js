import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import Conversation from './Conversation';

const App = styled.div`
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
`;

export default class extends Component {
  render() {
    return (
      <App>
        <Conversation/>
      </App>
    );
  }
}

