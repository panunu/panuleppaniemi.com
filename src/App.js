import React, { Component } from 'react';
import './App.css';
import R from 'ramda';
import styled from 'styled-components';

const Message = styled.div`
  padding: 10px 20px;
  
  background-color: ${props => props.who === 'Panu' ? 'papayawhip' : 'palevioletred'}
`;

const Text = styled.div``;

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
            "So, you can contact me on Twitter",
            <a href="https://twitter.com/@panuleppaniemi">@panuleppaniemi</a>,
            <span>Or send me an email, <a href="mailto:me@panuleppaniemi.com">me@panuleppaniemi.com</a></span>,
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
        messages: [{message: 'Oh, hello!', who: 'Panu'}],
        isReady: true,
        isTyping: false
      }),
      2000
    );
  }

  render() {
    const nextAvailableTopic = R.head(this.state.available.filter(t => this.state.discussed.indexOf(t.id) === -1));
    const alsoAvailable = nextAvailableTopic && R.head(this.state.available.filter(t => t.goesWith == nextAvailableTopic.id).filter(t => this.state.discussed.indexOf(t.id) === -1));

    console.log(this.state.available)
    console.log(this.state.discussed)

    return (
      <div>
        {this.state.messages.map((m, key) => (
          <Message key={key} who={m.who}>
            <Text>{m.message}</Text>
          </Message>
        ))}

        {this.state.isTyping && <div>Panu is typing...</div>}

        {nextAvailableTopic && this.state.isReady &&
          <button onClick={() => this.selectNextTopic(nextAvailableTopic)}>
            {nextAvailableTopic.q}
          </button>
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

