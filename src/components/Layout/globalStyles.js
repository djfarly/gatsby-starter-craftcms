import { injectGlobal } from 'emotion';
import themeDefault from './themeDefault';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    box-sizing: border-box;
    font-family: ${themeDefault.fontSecondary};
    color: ${themeDefault.colorText};
  }
  body {
    background-color: ${themeDefault.backgroundPrimary};
    overflow-y: scroll;
  }
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-position: inside;
  }
  *::-webkit-scrollbar {
    width: ${themeDefault.scrollBarWidth};
  }
  *::-webkit-scrollbar-track {
    background: ${themeDefault.scrollBarTrack};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${themeDefault.scrollBarThumb};
  }

  h1, h2, h3, h4, h5, h6 {
    a {
      color: inherit!important;
    }
  }
`;
