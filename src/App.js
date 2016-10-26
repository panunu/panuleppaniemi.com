import React, { Component } from 'react';
import './App.css';
import R from 'ramda';
import styled from 'styled-components';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTyping: false,
      isReady: true,
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
            "I am a software developer / designer whatnot.",
            "Not really so fond of titles :-)",
            "But I like to design and build software and products",
            "Basically it's how I make my living.",
          ],
        },
        {
          id: 2,
          relatedTo: 1,
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
        }
      ],
      discussed: [],
      messages: [],
    };
  }

  render() {
    const nextAvailableTopic = R.head(this.state.available.filter(t => this.state.discussed.indexOf(t.id) === -1));

    console.log(nextAvailableTopic)

    return (
      <div>
        <div>Oh, hello!</div>

        {this.state.messages.map((m, key) => (
          <div key={key}>
            <div>{m.message}</div>
          </div>
        ))}

        {this.state.isTyping && <div>Panu is typing...</div>}

        {nextAvailableTopic && this.state.isReady &&
          <button onClick={() => this.selectNextTopic(nextAvailableTopic)}>
            {nextAvailableTopic.q}
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
            message.length * 50 + 200
          );
        },
        Math.random() * 2000 + 1000
      );
    };

    typeMessages(topic.a);
  }
}

