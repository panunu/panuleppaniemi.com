import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import backgroundImage from './img/panuleppaniemi.jpg';
import nameImage from './img/name.png';
import Conversation from './Conversation';

injectGlobal`
  a {
    color: #7B8092;
    
    &:visited {
      color: #777;
      opacity: 0.5;
    }
    
    &:hover, &:active {
      color: #796871;
    }
  }
`;

const App = styled.div`
  font-family: "Lekton", sans-serif;
  font-weight: 400;
  font-size: 22px;
`;

const ConversationContainer = styled.div`
  margin: 0 auto;
  max-width: 720px;
  height: 100vh;
  overflow: scroll;
  padding: 5%;
`;

const Column = styled.div`
  width: 90%;
  margin: 0 auto 10vh;
  font-family: "Libre Baskerville", serif;
  font-weight: 100;
  text-align: center;
  color: #666;
  
  h1 {
    font-size: 28px;
    font-weight: 100;
    color: #444;
  }
`;

const LookingGlass = styled.img`
  margin: 5vh 0;
  border-radius: 50%;
  width: 80%;
  max-width: 800px;
`;


const SkipConversation = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 18px;
  
  a {
    color: #ccc;
    
    &:hover {
      color: #888;
    }
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSkipped: false
    };
  }

  render() {
    return (
      <App>
        <ConversationContainer>
          <SkipConversation>
            <a href="#info" onClick={() => this.setState({isSkipped: true})}>skip</a>
          </SkipConversation>

          <Conversation isSkipped={this.state.isSkipped} cancelSkip={() => this.setState({isSkipped: false})}/>
        </ConversationContainer>

        <div id="info" style={{width: '100%', textAlign: 'center'}}>
          <LookingGlass src={backgroundImage}/>
        </div>

        <Column>
          <h1>Panu Leppäniemi</h1>

          <div>
          <a href="https://fi.linkedin.com/in/panuleppaniemi">LinkedIn</a>,&nbsp;
          <a href="https://github.com/panunu">GitHub</a>,&nbsp;
          <a href="http://design.panuleppaniemi.com">Design stuff</a>,&nbsp;
          <a href="https://soundcloud.com/panununu">Music</a>
          </div>
        </Column>

        <Column>
          <div style={{textAlign: 'center'}}>
            <img src={nameImage} style={{width: 80, marginTop: 100, marginBottom: 100}}/>
          </div>
        </Column>
      </App>
    );
  }
}
