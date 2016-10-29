import React  from 'react';
import styled from 'styled-components';

const Typing = styled.div`
  padding: 12px 20px;
  margin-left: 35px;
  
  opacity: 0.5;
  
  animation-duration: 3s;
  animation-name: pulse;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  
  -webkit-animation-duration: 3s;
  -webkit-animation-name: pulse;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  
  @keyframes pulse {
    from {
      opacity: 0;
    }
    
    to {
      opacity: 1;
    }
  }
`;

export default (props) => {
  return (
    <Typing className="typing">Panu is typing...</Typing>
  );
}

