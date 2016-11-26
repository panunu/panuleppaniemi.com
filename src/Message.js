import React from 'react';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

import Avatar from './Avatar';

injectGlobal`
  .Panu + .Panu {
    margin-top: -20px;
    
    img { 
      visibility: hidden; 
    }
  }
  
  .Panu + .typing {
    margin-top: -20px;
  }
`;

const Message = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 10px;
  border-radius: 5px;
    
  cursor: default;
`;

const TextContainer = styled.div`
  display: inline-flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div`
  align-self: ${props => props.who === 'Panu' ? 'flex-start' : 'flex-end'};
  padding: 10px 15px;
  
  font-family: "Lekton", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.25;

  background-color: ${props => props.who === 'Panu' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(245, 245, 245, 0.8)'};
  border-radius: 25px;
`;

const StyledAvatar = styled(Avatar)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default (props) => {
  const { who, message } = props;

  return (
    <Message who={who} className={who}>
      <StyledAvatar who={who}/>

      <TextContainer who={who}>
        <Text who={who}>
          {message}
        </Text>
      </TextContainer>
    </Message>
  );
}
