import React, { Component } from 'react';
import './App.css';
import R from 'ramda';

import Message from './Message';
import Typing from './Typing';
import Option from './Option';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTyping: true,
      isReady: false,
      available: [
        {
          id: 0,
          q: "Hello. Who are you?",
          a: [
            "I am Panu Leppäniemi.",
            "Nice to meet you, stranger :-)",
          ],
        },
        {
          id: 1,
          q: "So, what do you do?",
          a: [
            "I am a software developer / designer.",
            "Not really so fond of titles :-)",
          ],
        },
        {
          id: 2,
          goesWith: 1,
          q: "Do you work somewhere?",
          a: [
            <span>At <a href="https://fraktio.fi">Fraktio</a>. Perhaps you have heard about us.</span>,
          ],
        },
        {
          id: 3,
          q: "Anything else?",
          a: [
            "Sure!",
            "Interests drift every now and then, but there are some things that have stuck with me",
            <div>
              <strong>
                test
              </strong>
            </div>
          ]
        },
        {
          id: 4,
          q: "I would like to discuss with actual you...",
          a: [
            "Of course :-)",
            "So, you could contact me on Twitter",
            <a href="https://twitter.com/@panuleppaniemi">@panuleppaniemi</a>,
            <span>Or just send me an email to <a href="mailto:me@panuleppaniemi.com">me@panuleppaniemi.com</a></span>,
          ]
        },
      ],
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
          <button onClick={() => this.selectNextTopic(alsoAvailable)}>
            {alsoAvailable.q}
          </button>
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

