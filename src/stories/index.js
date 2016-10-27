import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Message from './../Message';
import Typing from './../Typing';

storiesOf('Message', module)
  .add('Panu', () => (
    <Message who="Panu" message="Oh, hello!"/>
  ))
  .add('Visitor', () => (
    <Message who="Visitor" message="Moshimoshi."/>
  ));

storiesOf('Typing', module)
  .add('...', () => (
    <Typing/>
  ));
