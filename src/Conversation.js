import React, { Component } from 'react';
import './App.css';
import R from 'ramda';

import Message from './Message';
import Typing from './Typing';
import Option from './Option';

import data from './data';

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
        messages: [{message: <h1>Oh, hello!</h1>, who: 'Panu'}],
        isReady: true,
        isTyping: false
      }),
      2000
    );
  }

  render() {
    const nextAvailableTopic = R.head(this.state.available.filter(t => this.state.discussed.indexOf(t.id) === -1));
    const alsoAvailable = nextAvailableTopic && R.head(this.state.available.filter(t => t.goesWith == nextAvailableTopic.id).filter(t => this.state.discussed.indexOf(t.id) === -1));

    return (
      <div>
        {this.state.messages.map((m, key) => (
          <Message key={key} message={m.message} who={m.who}/>
        ))}

        {this.state.isTyping && <Typing/>}

        {nextAvailableTopic && this.state.isReady &&
          <Option onClick={() => this.selectNextTopic(nextAvailableTopic)}>
            {nextAvailableTopic.q}
          </Option>
        }

        {alsoAvailable && this.state.isReady &&
          <Option onClick={() => this.selectNextTopic(alsoAvailable)}>
            {alsoAvailable.q}
          </Option>
        }
      </div>
    );
  }

  selectNextTopic(topic) {
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
            message.length * 50 + 200 + Math.random() * 100
          );
        },
        Math.random() * 2000 + 1000
      );
    };

    typeMessages(topic.a);
  }
}

