import React from 'react';

export default [
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
];