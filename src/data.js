import React from 'react';

import fraktio from './img/fraktio.svg';

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
      <span>At <a href="https://fraktio.fi"><img src={fraktio} style={{width: 100, height: 26.875, marginLeft: -5, marginBottom: -5}} alt="Fraktio. Software, design, culture, methods."/></a>. Perhaps you have heard about us.</span>,
      "Partner, member of the board. Cool stuff.",
      <span>You can also check my <a href="https://fi.linkedin.com/in/panuleppaniemi">LinkedIn profile</a>.</span>,
    ],
  },
  {
    id: 3,
    q: "Anything else?",
    a: [
      "Sure!",
      <span>I enjoy things like photography, illustration and <a href="http://design.panuleppaniemi.com">design</a>.</span>,
      'These skills have turned out to be quite useful when creating something visual.',
      'E.g. a web application :-)',
      <span>Also <a href="https://soundcloud.com/panununu">music</a> (do not take it too seriously).</span>,
      'And just constantly looking for ways to improve myself!'
    ]
  },
  {
    id: 4,
    q: "What's the dream?",
    a: [
      "That's a good question!",
      "I like to do projects. And I can be more useful, if some code or design is required",
      "The best project ever would have to do something with...",
      "Arts.",
      "Or some other kind of culture, e.g. music.",
      "Environment, of course.",
      "Teaching/coaching, holistic well-being, or some other ways to help people!",
    ]
  },
  {
    id: 5,
    goesWith: 4,
    q: "I would like to discuss with actual you",
    a: [
      "Of course :-)",
      "So, you could contact me on Twitter",
      <a href="https://twitter.com/@panuleppaniemi">@panuleppaniemi</a>,
      <span>Or just send me an email to <a href="mailto:me@panuleppaniemi.com">me@panuleppaniemi.com</a></span>,
    ]
  },
];