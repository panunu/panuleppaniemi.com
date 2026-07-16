import React from 'react'

import Label from './components/Label'
import Term from './components/Term'
import Work from './components/Work'
import styles from './components/design.module.scss'

import me from './assets/panu-leppaniemi.jpg'
import morningFarewell from './assets/panu-morning-farewell.jpeg'
import work from './assets/work.jpg'
import drug from './assets/drug.jpg'
import navigationalIllustration from './assets/navigational-illustration.jpg'
import skipperi from './assets/skipperi.jpg'
import fraktio from './assets/fraktio.jpg'
import ixes from './assets/ixes.jpg'
import paperBridge from './assets/the-paper-bridge.jpg'
import dgSeppo from './assets/dg-seppo.png'

// Three columns, in reading order. Order within a column is meaningful.
export type Column = 'name' | 'cloud' | 'work'

export type Entry = {
  column: Column
  component: React.ReactNode
}

const entries: Entry[] = [
  // Name, picture.
  {
    column: 'name',
    component: (
      <header className={styles.name}>
        <h1>
          Panu
          <br />
          Leppäniemi
        </h1>
      </header>
    ),
  },
  {
    column: 'name',
    component: (
      <figure className={styles.picture}>
        <img src={me} alt="Panu Leppäniemi, Helsinki, 2021" />
        <figcaption>Helsinki, 2021</figcaption>
      </figure>
    ),
  },

  // The cloud: everything I have done, packed into a texture.
  {
    column: 'cloud',
    component: (
      <Term>
        {`start-ups, sharing economy, technology, software, platform business, 
          engineering, co-founding, marketplaces, product,
          consulting, architecture, teams, culture, leadership,
          generalist, strategy, photography, digital art, writing, code, systems thinking, services, design, prototypes,
          entrepreneurship, sustainability, ethics, community, advising,
          investing, board work, events, humane growth,
          opensource, experiments, hiring, scaling, operations,
          storytelling, attention, workshops, collaboration, music, 
          patience, iteration, ownership, wonder`}
      </Term>
    ),
  },
  {
    column: 'cloud',
    component: (
      <figure className={styles.picture}>
        <img
          src={morningFarewell}
          alt="A story in a darkened hall, the audience seated in a circle around a lit window"
        />
        <figcaption>Photo by Boris Hars-Tschachotin, 2026</figcaption>
      </figure>
    ),
  },

  // Works and links.
  { column: 'work', component: <Label>Companies</Label> },
  {
    column: 'work',
    component: (
      <Work
        title="Skipperi"
        href="https://www.skipperi.com"
        image={skipperi}
        note="2017–2026 (Co-founder, CTO)"
      />
    ),
  },
  {
    column: 'work',
    component: (
      <Work
        title="Fraktio"
        href="https://www.fraktio.fi"
        image={fraktio}
        note="Partner, board member, senior software developer"
      />
    ),
  },
  {
    column: 'work',
    component: (
      <Work
        title="IXES"
        href="https://www.ixes.org"
        image={ixes}
        note="Advisor, investor"
      />
    ),
  },

  { column: 'work', component: <Label>Writing</Label> },
  {
    column: 'work',
    component: (
      <Work
        title="Programming, Magic or Boredom?"
        href="https://panuleppaniemi.medium.com/programming-magic-or-boredom-part-1-b341131b47c2"
        note="Part 1"
      />
    ),
  },
  {
    column: 'work',
    component: (
      <Work
        title="Everything on Medium"
        href="https://panuleppaniemi.medium.com"
      />
    ),
  },

  { column: 'work', component: <Label>Art</Label> },

  {
    column: 'work',
    component: (
      <Work
        title="Directorate-General for Sustainability, Ethics, Public Policy and Outrage"
        href="https://panunu.github.io/directorate-general-for-sustainability-outrage/"
        image={dgSeppo}
      />
    ),
  },
  {
    column: 'work',
    component: (
      <Work
        title="The Paper Bridge"
        href="https://www.instagram.com/the.paper.bridge/"
        image={paperBridge}
      />
    ),
  },
  {
    column: 'work',
    component: <Work title="Work" href={work} image={work} note="2006" />,
  },
  {
    column: 'work',
    component: (
      <Work
        title="Navigational Illustration"
        href={navigationalIllustration}
        image={navigationalIllustration}
        note="2008"
      />
    ),
  },
  {
    column: 'work',
    component: <Work title="Drug" href={drug} image={drug} note="2008" />,
  },

  { column: 'work', component: <Label>Music</Label> },
  {
    column: 'work',
    component: (
      <Work
        title="Touchy Touchy ft. EZRA"
        href="https://open.spotify.com/track/2s0Ea95qHSgtpPKw9pFBoD"
      />
    ),
  },
  {
    column: 'work',
    component: (
      <Work
        title="That's how you've been seen"
        href="https://open.spotify.com/track/0PUsFYK8MeX6kKPVVwUvDS"
      />
    ),
  },
  {
    column: 'work',
    component: (
      <Work
        title="Zero reasons why you're not mine"
        href="https://open.spotify.com/track/2GlUo4Q762EwClVraNmFzR"
      />
    ),
  },

  { column: 'work', component: <Label>Elsewhere</Label> },
  {
    column: 'work',
    component: (
      <Work title="LinkedIn" href="https://fi.linkedin.com/in/panuleppaniemi" />
    ),
  },
  {
    column: 'work',
    component: <Work title="GitHub" href="https://github.com/panunu" />,
  },
]

export default entries
