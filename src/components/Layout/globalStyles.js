import { injectGlobal } from 'emotion';
import themeDefault from './themeDefault';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    box-sizing: border-box;
    font-family: ${themeDefault.fontFamilyPrimary};
    font-size: 16px;
    color: ${themeDefault.textColor};
  }
  *,
  *:after,
  *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  p {
    color: ${themeDefault.textColor};
  }
  h1 {
    font-size: 2.4em;
  }
  h2 {
    font-size: 1.8em;
  }
  ul {
    list-style-position: inside;
  }
  a {
    color: ${themeDefault.linkColor};
    transition: .3s;
  }
  @media (hover: hover)  {
    a:hover {
      color: ${themeDefault.linkColorHover};
    }
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
`;
