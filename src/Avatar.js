import React from 'react';
import styled from 'styled-components';

import panu from './panu.jpg';

const Avatar = styled.div`
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

export default (props) => {
  const { who } = props;

  return (
    <Avatar>
      {who == 'Panu' && <img src={panu} alt="Panu"/>}
    </Avatar>
  );
}
