import React  from 'react';
import styled from 'styled-components';

const Option = styled.button`
  padding: 10px 20px;
`;

export default ({children, onClick}) => {
  return (
    <Option onClick={onClick}>
      {children}
    </Option>
  );
}

