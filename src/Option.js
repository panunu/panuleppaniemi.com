import React  from 'react';
import styled from 'styled-components';

const Option = styled.button`
  padding: 10px 20px;
  
  border-radius: 5px;
  border: none;
  
  opacity: 0.5;
  cursor: pointer;
  
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

export default ({children, onClick}) => {
  return (
    <Option onClick={onClick}>
      {children}
    </Option>
  );
}

