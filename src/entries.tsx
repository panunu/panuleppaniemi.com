import React from 'react'

import Label from './components/Label'
import Name from './components/Name'
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
export type Column = 'name' | 'manifesto' | 'work'

export type Entry = {
  column: Column
  component: React.ReactNode
}

const entries: Entry[] = [
  // Name, picture.
  {
    column: 'name',
    component: <Name>{`Panu\nLeppäniemi`}</Name>,
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
  // Everything I have done, packed into a texture.
  {
    column: 'name',
    component: (
      <Term>
        {`start-ups, sharing economy, technology, software, platform business,
          engineering, co-founding, marketplaces, product,
          consulting, architecture, teams, culture, leadership,
          generalist, strategy, photography, digital art, writing, code, systems thinking, services, design, prototypes,
          entrepreneurship, sustainability, ethics, community, advising,
          investing, board work, events, open source, experiments, hiring, scaling, operations,
          storytelling, workshops, collaboration, music,
          iteration, ownership, wonder`}
      </Term>
    ),
  },

  // The manifesto.
  {
    column: 'manifesto',
    component: (
      <article className={styles.manifesto}>
        <Label>A manifesto</Label>

        <p>
          It might be a good idea to write a manifesto, don't you think? Not
          having one adds to the risk that who and what you stand for is
          dictated by someone else's story, and you will get stuck fulfilling
          their expectations. Of course, some people are better visionaries and
          storytellers, so you might end up just fine regardless. But perhaps by
          writing one or even many, we would find greater ambitions than just
          dreaming about buying a new, fancier car with this and this many
          horsepower or this and that fidgety gadgety. As someone once said: it
          is a true sign of wealth to be able to afford time with others. And
          what are we here for if not to figure out this life, whatever this is,
          <i> with</i> others.
        </p>

        <p>
          This process of figuring out… well, I am trying to do it with
          kindness, thoughtfulness (hello systems thinking), sustainability,
          flexibility – as in there can be two truths – and, when required,
          assertiveness: I do enjoy building things, fast. I want to see certain
          changes, certain realisations, happening in our society and in us. For
          now, it seems like running a business is a good vessel to do so. We
          need more of these vessels for good, as also many similar vessels have
          succumbed to, accidentally or not, causing harm.
        </p>

        <p>
          Therefore. Let's build good, ambitious, low-hierarchy vessels so we
          have better stories to tell.
        </p>
      </article>
    ),
  },
  {
    column: 'manifesto',
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
        note="2012–2019 (Partner, board member, senior software developer)"
      />
    ),
  },
  {
    column: 'work',
    component: (
      <Work
        title="iXES"
        href="https://www.ixes.org"
        image={ixes}
        note="2022–2025 (Advisor, investor)"
      />
    ),
  },

  { column: 'work', component: <Label>Elsewhere</Label> },
  {
    column: 'work',
    component: (
      <Work
        title="Teaching"
        href="https://ohjelmistotuotanto.panuleppaniemi.com/"
        note="2012 (Software production, Metropolia UAS)"
      />
    ),
  },
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

  {
    column: 'work',
    component: (
      <Work title="Medium" href="https://panuleppaniemi.medium.com/" />
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
    component: <Work title="The Shop" note="2026" />,
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
        title="Touchy Touchy"
        note="featuring EZRA"
        href="https://open.spotify.com/track/2s0Ea95qHSgtpPKw9pFBoD"
      />
    ),
  },
  {
    column: 'work',
    component: (
      <Work
        title="That's how you've been seen"
        note="collab with EZRA the poetess"
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
]

export default entries
