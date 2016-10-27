import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';

const Message = styled.div`
  padding: 10px 20px;
  
  background-color: ${props => props.who === 'Panu' ? 'papayawhip' : 'palevioletred'};
  text-align: ${props => props.who === 'Panu' ? 'left' : 'right'};
`;

const Text = styled.div``;

export default (props) => {
  const { who, message } = props;

  return (
    <Message who={who}>
      <Avatar who={who}/>

      <Text>{message}</Text>
    </Message>
  );
}
