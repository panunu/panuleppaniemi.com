import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  padding: 10px 20px;
  
  background-color: ${props => props.who === 'Panu' ? 'papayawhip' : 'palevioletred'}
`;

const Text = styled.div``;

export default (props) => {
  const { who, message } = props;

  return (
    <Message who={who}>
      <Text>{message}</Text>
    </Message>
  );
}
