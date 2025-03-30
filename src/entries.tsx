import React from 'react'
import Item, { ItemType } from './components/Item'

import work from './assets/work.jpg'
import drug from './assets/drug.jpg'
import navigationalIllustration from './assets/navigational-illustration.jpg'
import me from './assets/panu-leppaniemi.jpg'
import skipperi from './assets/skipperi.jpg'
import fraktio from './assets/fraktio.jpg'
import ixes from './assets/ixes.jpg'
import portal from './assets/portal.png'

const entries: ItemType[] = [
  // Intro, my photo.
  {
    x: 0,
    y: 0,
    width: 500,
    height: undefined,
    component: (
      <Item
        maxWidth="80vw"
        style={{ background: 'none', marginLeft: '15vw', marginTop: '20vh' }}
      >
        <header>
          <h1>Panu Leppäniemi</h1>
        </header>

        <article>
          <p>
            Hello you! Glad to have you here. In this space, you can find links
            to some of my work, thoughts and creations.
          </p>

          <p>
            And in case your wondering... If I would have to describe myself, I
            would use the words "creative" and "technologist". Also, I admit
            being a bit of a generalist, too.
          </p>

          <p>I wish for something good to happen to you today! 🙏</p>
        </article>
      </Item>
    ),
  },
  // Spotify.
  {
    x: 600,
    y: 800,
    width: 300,
    height: 300,
    component: (
      <Item title="A song in Spotify: Touchy Touchy ft. EZRA">
        <iframe
          src="https://open.spotify.com/embed/track/2s0Ea95qHSgtpPKw9pFBoD?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Item>
    ),
  },
  // Medium articles.
  {
    x: -500,
    y: 180,
    width: 200,
    height: undefined,
    component: (
      <Item title="Medium article: Passing the era of “text input, text output” style of programming – Programming, Magic or Boredom? — Part 1">
        <a
          rel="noopener follow"
          href="https://panuleppaniemi.medium.com/programming-magic-or-boredom-part-1-b341131b47c2"
        >
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_6Ah2neXfdgqICz6Q06FZg.jpeg"
            width="100%"
            style={{ borderRadius: 10 }}
          />
        </a>
      </Item>
    ),
  },
  {
    x: -580,
    y: 250,
    width: 90,
    height: undefined,
    component: (
      <Item background title="Medium articles/posts written by me">
        <a rel="noopener follow" href="https://panuleppaniemi.medium.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            fill="none"
            viewBox="0 0 719 160"
          >
            <path
              fill="#242424"
              d="m174.104 9.734.215-.047V8.02H130.39L89.6 103.89 48.81 8.021H1.472v1.666l.212.047c8.018 1.81 12.09 4.509 12.09 14.242V137.93c0 9.734-4.087 12.433-12.106 14.243l-.212.047v1.671h32.118v-1.665l-.213-.048c-8.018-1.809-12.089-4.509-12.089-14.242V30.586l52.399 123.305h2.972l53.925-126.743V140.75c-.687 7.688-4.721 10.062-11.982 11.701l-.215.05v1.652h55.948v-1.652l-.215-.05c-7.269-1.639-11.4-4.013-12.087-11.701l-.037-116.774h.037c0-9.733 4.071-12.432 12.087-14.242m25.555 75.488c.915-20.474 8.268-35.252 20.606-35.507 3.806.063 6.998 1.312 9.479 3.714 5.272 5.118 7.751 15.812 7.368 31.793zm-.553 5.77h65.573v-.275c-.186-15.656-4.721-27.834-13.466-36.196-7.559-7.227-18.751-11.203-30.507-11.203h-.263c-6.101 0-13.584 1.48-18.909 4.16-6.061 2.807-11.407 7.003-15.855 12.511-7.161 8.874-11.499 20.866-12.554 34.343q-.05.606-.092 1.212a50 50 0 0 0-.065 1.151 85.807 85.807 0 0 0-.094 5.689c.71 30.524 17.198 54.917 46.483 54.917 25.705 0 40.675-18.791 44.407-44.013l-1.886-.664c-6.557 13.556-18.334 21.771-31.738 20.769-18.297-1.369-32.314-19.922-31.042-42.395m139.722 41.359c-2.151 5.101-6.639 7.908-12.653 7.908s-11.513-4.129-15.418-11.63c-4.197-8.053-6.405-19.436-6.405-32.92 0-28.067 8.729-46.22 22.24-46.22 5.657 0 10.111 2.807 12.236 7.704zm43.499 20.008c-8.019-1.897-12.089-4.722-12.089-14.951V1.309l-48.716 14.353v1.757l.299-.024c6.72-.543 11.278.386 13.925 2.83 2.072 1.915 3.082 4.853 3.082 8.987v18.66c-4.803-3.067-10.516-4.56-17.448-4.56-14.059 0-26.909 5.92-36.176 16.672-9.66 11.205-14.767 26.518-14.767 44.278-.003 31.72 15.612 53.039 38.851 53.039 13.595 0 24.533-7.449 29.54-20.013v16.865h43.711v-1.746zM424.1 19.819c0-9.904-7.468-17.374-17.375-17.374-9.859 0-17.573 7.632-17.573 17.374s7.721 17.374 17.573 17.374c9.907 0 17.375-7.47 17.375-17.374m11.499 132.546c-8.019-1.897-12.089-4.722-12.089-14.951h-.035V43.635l-43.714 12.551v1.705l.263.024c9.458.842 12.047 4.1 12.047 15.152v81.086h43.751v-1.746zm112.013 0c-8.018-1.897-12.089-4.722-12.089-14.951V43.635l-41.621 12.137v1.71l.246.026c7.733.813 9.967 4.257 9.967 15.36v59.279c-2.578 5.102-7.415 8.131-13.274 8.336-9.503 0-14.736-6.419-14.736-18.073V43.638l-43.714 12.55v1.703l.262.024c9.459.84 12.05 4.097 12.05 15.152v50.17a56.3 56.3 0 0 0 .91 10.444l.787 3.423c3.701 13.262 13.398 20.197 28.59 20.197 12.868 0 24.147-7.966 29.115-20.43v17.311h43.714v-1.747zm169.818 1.788v-1.749l-.213-.05c-8.7-2.006-12.089-5.789-12.089-13.49v-63.79c0-19.89-11.171-31.761-29.883-31.761-13.64 0-25.141 7.882-29.569 20.16-3.517-13.01-13.639-20.16-28.606-20.16-13.146 0-23.449 6.938-27.869 18.657V43.643L545.487 55.68v1.715l.263.024c9.345.829 12.047 4.181 12.047 14.95v81.784h40.787v-1.746l-.215-.053c-6.941-1.631-9.181-4.606-9.181-12.239V66.998c1.836-4.289 5.537-9.37 12.853-9.37 9.086 0 13.692 6.296 13.692 18.697v77.828h40.797v-1.746l-.215-.053c-6.94-1.631-9.18-4.606-9.18-12.239V75.066a42 42 0 0 0-.578-7.26c1.947-4.661 5.86-10.177 13.475-10.177 9.214 0 13.691 6.114 13.691 18.696v77.828z"
            ></path>
          </svg>
        </a>
      </Item>
    ),
  },
  // LinkedIn, GitHub, professional stuff...
  {
    x: -1600,
    y: 650,
    width: 120,
    height: undefined,
    component: (
      <Item title="Link to my GitHub profile">
        <a rel="noopener follow" href="https://github.com/panunu">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            version="1.1"
            data-view-component="true"
            fill="#fff"
            className="octicon octicon-mark-github v-align-middle"
          >
            <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
          </svg>
        </a>
      </Item>
    ),
  },
  {
    x: -700 + 50,
    y: 800 + 200,
    width: 200,
    height: 300,
    component: (
      <Item
        title="Skipperi, a company I have co-founded and been working as a CTO."
        style={{
          backgroundImage: `url(${skipperi})`,
          padding: 15,
        }}
      >
        <a
          rel="noopener follow"
          href="https://www.skipperi.com"
          style={{ width: '100%', height: '100%', display: 'inline-block' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            viewBox="0 0 138 30"
            fill="none"
            style={{ display: 'none' }}
          >
            <path
              d="M105.382 13.1528H97.7801V9.69269H105.222V6.82815H97.7801V3.59489H105.382V0.730347H94.5098V16.0209H105.382V13.1528Z"
              fill="#111"
            />
            <path
              d="M122.912 10.1961C124.573 9.80614 126.275 8.36323 126.275 5.65822C126.275 2.81494 124.316 0.730347 121.117 0.730347H113.932V16.0209H117.202V10.5861H119.596L122.613 16.0174H126.368L122.912 10.1961ZM120.633 7.72154H117.202V3.59489H120.633C121.947 3.59489 122.937 4.37485 122.937 5.65822C122.937 6.94159 121.943 7.72154 120.633 7.72154Z"
              fill="#111"
            />
            <path
              d="M44.7547 0.730347H41.4844V16.0209H44.7547V0.730347Z"
              fill="#111"
            />
            <path
              d="M6.65811 13.4507C4.53849 13.4507 2.85704 12.5112 1.77407 11.3874L0 13.8655C1.42852 15.3084 3.54814 16.294 6.49424 16.294C10.6409 16.294 12.6429 14.1846 12.6429 11.3874C12.6429 5.67958 3.81889 7.30685 3.81889 4.87836C3.81889 3.96015 4.60261 3.34328 6.0062 3.34328C7.57365 3.34328 9.23016 3.87152 10.4734 5.01663L12.2938 2.63423C10.7798 1.23386 8.7528 0.5 6.31256 0.5C2.69673 0.5 0.484486 2.60941 0.484486 5.15489C0.484486 10.9088 9.32991 9.0511 9.32991 11.7561C9.32991 12.6282 8.45356 13.4507 6.65811 13.4507Z"
              fill="#111"
            />
            <path
              d="M60.9705 0.730347H53.7852V16.0209H57.0554V10.5861H60.9705C64.2871 10.5861 66.1289 8.31714 66.1289 5.65822C66.1324 2.97448 64.312 0.730347 60.9705 0.730347ZM60.5359 7.72154H57.059V3.59489H60.5359C61.8255 3.59489 62.7945 4.37485 62.7945 5.65822C62.7909 6.91678 61.8255 7.72154 60.5359 7.72154Z"
              fill="#111"
            />
            <path
              d="M81.3357 0.730347H74.1504V16.0209H77.4207V10.5861H81.3357C84.6523 10.5861 86.4941 8.31714 86.4941 5.65822C86.4941 2.97448 84.6737 0.730347 81.3357 0.730347ZM80.8976 7.72154H77.4207V3.59489H80.8976C82.1872 3.59489 83.1561 4.37485 83.1561 5.65822C83.1526 6.91678 82.1872 7.72154 80.8976 7.72154Z"
              fill="#111"
            />
            <path
              d="M138.001 0.730347H134.73V16.0209H138.001V0.730347Z"
              fill="#111"
            />
            <path
              d="M27.62 8.31365L33.4801 0.889929L29.9462 0.865112L25.8067 6.06242C25.3579 5.42074 24.738 4.91022 24.0113 4.59115V0.889929H20.741V4.49898C19.0952 5.1123 17.916 6.67929 17.916 8.53345C17.916 10.3876 19.0952 11.9546 20.741 12.5679V16.1805H24.0113V12.4757C24.8235 12.1177 25.4932 11.5185 25.9492 10.7705L29.8607 16.177H33.5941L27.62 8.31365ZM23.4876 9.75656C23.4876 9.7601 23.4876 9.7601 23.4876 9.75656C23.4128 9.82746 23.3415 9.88418 23.2703 9.93382C23.2454 9.95154 23.224 9.96927 23.199 9.98345C23.1848 9.99054 23.1705 10.0047 23.1599 10.0118C23.1527 10.0154 23.1492 10.0118 23.1456 10.0154C22.8856 10.1713 22.5827 10.2635 22.2586 10.2635C21.2967 10.2635 20.5166 9.48712 20.5166 8.5299C20.5166 7.57269 21.2967 6.79629 22.2586 6.79629C22.5827 6.79629 22.882 6.89201 23.1456 7.04445C23.1527 7.048 23.1563 7.04445 23.1634 7.048C23.1741 7.05509 23.1848 7.06572 23.1955 7.07281C23.2311 7.09763 23.2667 7.12245 23.2988 7.14726C23.3593 7.19335 23.4199 7.23944 23.4805 7.29616C23.484 7.29971 23.4876 7.30325 23.4947 7.3068C24.0041 7.77122 24.51 8.51572 24.51 8.51572C24.51 8.51572 23.9792 9.29922 23.4876 9.75656Z"
              fill="#111"
            />
            <path
              d="M137.411 22.8138C136.816 22.4273 136.011 22.594 135.623 23.1896C134.116 25.494 131.294 26.9227 128.252 26.9227C125.231 26.9227 122.428 25.5117 120.914 23.2356C120.814 23.069 120.678 22.9237 120.504 22.8102C119.909 22.4238 119.104 22.5904 118.716 23.186C117.209 25.4904 114.387 26.9191 111.345 26.9191C108.324 26.9191 105.52 25.5081 104.006 23.2321C103.907 23.0655 103.771 22.9201 103.597 22.8067C103.002 22.4202 102.197 22.5869 101.808 23.1825C100.302 25.4869 97.4801 26.9156 94.4378 26.9156C91.4169 26.9156 88.6133 25.5046 87.0993 23.2286C86.9995 23.0619 86.8642 22.9166 86.6896 22.8031C86.0911 22.4167 85.2896 22.5833 84.9013 23.1789C83.398 25.4833 80.573 26.912 77.5343 26.912C74.5134 26.912 71.7098 25.501 70.1957 23.225C70.096 23.0584 69.9606 22.913 69.7861 22.7996C69.1876 22.4131 68.386 22.5798 67.9977 23.1754C66.4909 25.4798 63.6694 26.9085 60.6272 26.9085C57.6062 26.9085 54.8026 25.4975 53.2886 23.2215C53.1889 23.0548 53.0535 22.9095 52.8789 22.796C52.284 22.4096 51.4789 22.5762 51.0906 23.1718C49.5837 25.4762 46.7623 26.905 43.72 26.905C40.6991 26.905 37.8955 25.494 36.3815 23.2179C36.2818 23.0513 36.1464 22.9059 35.9718 22.7925C35.3733 22.4061 34.5718 22.5727 34.1835 23.1683C32.6766 25.4727 29.8552 26.9014 26.8129 26.9014C23.792 26.9014 20.9884 25.4904 19.4744 23.2144C19.3746 23.0477 19.2393 22.9024 19.0647 22.7889C18.4698 22.4025 17.6647 22.5691 17.2764 23.1647C15.7695 25.4691 12.9481 26.8979 9.90579 26.8979C6.86707 26.8979 4.04209 25.4691 2.53876 23.1647C2.15046 22.5691 1.34892 22.4025 0.750437 22.7889C0.151955 23.1754 -0.0190399 23.973 0.372823 24.5686C2.34283 27.6211 5.99784 29.5001 9.90223 29.5001C13.1761 29.5001 16.2753 28.1777 18.3558 25.969C20.4362 28.1777 23.5355 29.5001 26.8093 29.5001C30.0832 29.5001 33.1825 28.1777 35.2629 25.969C37.3433 28.1777 40.4426 29.5001 43.7165 29.5001C46.9903 29.5001 50.0896 28.1777 52.17 25.969C54.2505 28.1777 57.3497 29.5001 60.6236 29.5001C63.8974 29.5001 66.9967 28.1777 69.0771 25.969C71.1576 28.1777 74.2569 29.5001 77.5307 29.5001C80.8046 29.5001 83.9038 28.1777 85.9843 25.969C88.0647 28.1777 91.164 29.5001 94.4378 29.5001C97.7117 29.5001 100.811 28.1777 102.891 25.969C104.972 28.1777 108.071 29.5001 111.345 29.5001C114.619 29.5001 117.718 28.1777 119.799 25.969C121.879 28.1777 124.978 29.5001 128.252 29.5001C132.16 29.5001 135.815 27.6211 137.792 24.5935C138.18 23.9979 138.009 23.2002 137.411 22.8138Z"
              fill="#111"
            />
          </svg>
        </a>
      </Item>
    ),
  },
  {
    x: -700 + 550,
    y: 800 + 260,
    width: 200,
    height: 300,
    component: (
      <Item
        title="IXES, an app for humane growth. Advisor, investor, and a friend."
        style={{
          backgroundImage: `url(${ixes})`,
          padding: 15,
        }}
      >
        <a
          rel="noopener follow"
          href="https://www.ixes.org"
          style={{ width: '100%', height: '100%', display: 'inline-block' }}
        ></a>
      </Item>
    ),
  },
  {
    x: -700 + 300,
    y: 800 + 220,
    width: 200,
    height: 300,
    component: (
      <Item
        title="Fraktio, a software consultancy I was a partner at for multiple years. Those years are very dear to me."
        style={{
          backgroundImage: `url(${fraktio})`,
          padding: 15,
        }}
      >
        <a
          rel="noopener follow"
          href="https://www.fraktio.fi"
          style={{ width: '100%', height: '100%', display: 'inline-block' }}
        ></a>
      </Item>
    ),
  },
  {
    x: -250,
    y: 990,
    width: 70,
    height: undefined,
    component: (
      <Item background title="Link to my LinkedIn profile">
        <a
          rel="noopener follow"
          href="https://fi.linkedin.com/in/panuleppaniemi"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 84 21"
            preserveAspectRatio="xMinYMin meet"
            version="1.1"
            focusable="false"
            className="lazy-loaded"
            aria-busy="false"
          >
            <g className="inbug" stroke="none" strokeWidth="1" fill="none">
              <path
                d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0"
                className="bug-text-color"
                transform="translate(63.000000, 0.000000)"
              ></path>
              <path
                d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z"
                className="background"
                fill="currentColor"
              ></path>
            </g>
            <g className="linkedin-text">
              <path
                d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z"
                fill="currentColor"
              ></path>
              <path
                d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z"
                fill="currentColor"
              ></path>
              <polygon
                fill="currentColor"
                points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"
              ></polygon>
              <path
                d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z"
                fill="currentColor"
              ></path>
              <path
                d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z"
                fill="currentColor"
              ></path>
              <polygon
                fill="currentColor"
                points="3 3 0 3 0 18 9 18 9 15 3 15"
              ></polygon>
            </g>
          </svg>
        </a>
      </Item>
    ),
  },
  // Art, photos...
  {
    x: 300,
    y: -1000,
    width: 500,
    height: 4000 / 3 / 2,
    component: (
      <Item
        title="Photo of me in Helsinki, 2021"
        style={{
          backgroundImage: `url(${me})`,
        }}
      >
        &nbsp;
      </Item>
    ),
  },
  // Art
  {
    x: 500,
    y: 1700,
    width: 960 / 2,
    height: 1270 / 2,
    component: (
      <Item
        title="Digital art: Work, 2006"
        style={{
          backgroundImage: `url(${work})`,
        }}
      >
        &nbsp;
      </Item>
    ),
  },
  {
    x: 1100,
    y: 1900,
    width: 500,
    height: 500,
    component: (
      <Item
        title="Digital art: Navigational Illustration, 2008"
        style={{
          backgroundImage: `url(${navigationalIllustration})`,
        }}
      >
        &nbsp;
      </Item>
    ),
  },
  {
    x: 900,
    y: 2490,
    width: 400,
    height: 400,
    component: (
      <Item
        title="Photography: Drug, 2008"
        style={{
          backgroundImage: `url(${drug})`,
        }}
      >
        &nbsp;
      </Item>
    ),
  },
  {
    x: 5500,
    y: -2000,
    width: 400,
    height: 400,
    component: (
      <Item>
        <img src={portal} style={{ width: '100%', pointerEvents: 'none' }} />
      </Item>
    ),
  },
]

export default entries
