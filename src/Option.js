import React  from 'react';
import styled from 'styled-components';

const Option = styled.button`
  padding: 10px 15px;
  
  margin-left: ${props => props.isAlternative ? '10px' : '0'}
  margin-bottom: 10px;

  border-radius: 25px;
  border: none;
  background-color: orange;
  outline: none;
  
  font-family: "Lekton", sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: white;
  opacity: 0.5;
  cursor: pointer;
  
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
  
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge */
  user-select: none;
`;

export default ({children, onClick, isAlternative}) => {
  return (
    <Option onClick={onClick} isAlternative={isAlternative}>
      {children}
    </Option>
  );
}

