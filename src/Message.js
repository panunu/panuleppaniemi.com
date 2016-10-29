import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';

const Message = styled.div`
  display: flex;
  margin-bottom: 5px;
  padding: 10px 20px;
  border-radius: 30px;
  
  background-color: ${props => props.who === 'Panu' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(225, 225, 225, 0.8)'};
  text-align: ${props => props.who === 'Panu' ? 'left' : 'right'};
`;

const Text = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

const StyledAvatar = styled(Avatar)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export default (props) => {
  const { who, message } = props;

  return (
    <Message who={who}>
      <StyledAvatar who={who}/>

      <Text>{message}</Text>
    </Message>
  );
}
