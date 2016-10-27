import React, { Component } from 'react';
import styled from 'styled-components';

const Message = styled.div`
  padding: 10px 20px;
  
  background-color: ${props => props.who === 'Panu' ? 'papayawhip' : 'palevioletred'}
`;

const Text = styled.div``;

export default class extends Component {
  render() {
    const { who, message } = this.props;

    return (
      <Message who={who}>
        <Text>{message}</Text>
      </Message>
    );
  }
}

