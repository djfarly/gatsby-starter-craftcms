import { injectGlobal } from 'emotion';
import themeDefault from './themeDefault';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    box-sizing: border-box;
    font-family: ${themeDefault.fontFamilyPrimary};
    font-size: 16px;
    color: ${themeDefault.colorText};
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
`;
