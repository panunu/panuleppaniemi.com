import React from 'react';
import styled from 'styled-components';

import panu from './panu.jpg';

const Avatar = styled.div`
  img {
    width: 50px;
    height: 50px;
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
