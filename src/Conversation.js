import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import R from 'ramda';

import Message from './Message';
import Typing from './Typing';
import Option from './Option';

import data from './data';

const OptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Instructions = styled.div`
  width: 100px;
  float: right;
  opacity: 0.5;
  font-size: 90px;
  margin-right: 70px;
  cursor: n-resize;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTyping: true,
      isReady: false,
      available: data,
      messages: [],
      discussed: [],
    };
  }

  componentDidMount() {
    setTimeout(
      () => this.setState({
        messages: [{message: 'Oh, hello!', who: 'Panu'}],
        isReady: true,
        isTyping: false
      }),
      2000
    );
  }

  componentDidUpdate() {
    if (!this.props.isSkipped) {
      ReactDOM.findDOMNode(this).scrollIntoView(false);
    }
  }

  render() {
    const nextAvailableTopic = R.head(this.state.available.filter(t => this.state.discussed.indexOf(t.id) === -1));
    const alsoAvailable = nextAvailableTopic && R.head(this.state.available.filter(t => t.goesWith == nextAvailableTopic.id).filter(t => this.state.discussed.indexOf(t.id) === -1));

    return (
      <div style={{paddingBottom: 40}}>
        {this.state.messages.map((m, key) => (
          <Message key={key} message={m.message} who={m.who}/>
        ))}

        {this.state.isTyping && <Typing/>}

        <OptionContainer>
          {nextAvailableTopic && this.state.isReady &&
            <Option onClick={() => this.selectNextTopic(nextAvailableTopic)}>
              {nextAvailableTopic.q}
            </Option>
          }

          {alsoAvailable && this.state.isReady &&
            <Option onClick={() => this.selectNextTopic(alsoAvailable)} isAlternative={true}>
              {alsoAvailable.q}
            </Option>
          }
        </OptionContainer>

        {this.state.messages.length == 1 &&
          <Instructions title="You could click this button">☝</Instructions>
        }
      </div>
    );
  }

  selectNextTopic(topic) {
    this.props.cancelSkip();

    this.setState({
      isReady: false,
      discussed: R.concat(this.state.discussed, [topic.id]),
      messages: R.concat(this.state.messages, [{message: topic.q, who: 'visitor'}])
    });

    const typeMessages = (messages) => {
      const message = R.head(messages);

      setTimeout(
        () => {
          this.setState({isTyping: true});

          setTimeout(
            () => {
              this.setState({
                messages: R.concat(this.state.messages, [{message: message, who: 'Panu'}]),
                isTyping: false
              });

              if (R.tail(messages).length >= 1) {
                return typeMessages(R.tail(messages));
              }

              this.setState({isReady: true});
            },
            ReactDOMServer.renderToString(<span>{message}</span>).replace(/<\/?[^>]+(>|$)/g, '').length * 50 + 200 + Math.random() * 100
          );
        },
        Math.random() * 2000 + 1000
      );
    };

    typeMessages(topic.a);
  }
}

