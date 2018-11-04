import React from 'react';
import PropTypes from 'prop-types';

const removeNoJsClass =
  'var html=document.getElementsByTagName("html")[0];html.classList?html.classList.remove("no-js"):html.className=el.className.replace(new RegExp("(^|\\b)"+className.split(" ").join("|")+"(\\b|$)","gi")," ");';

export default function HTML(props) {
  const {
    htmlAttributes,
    headComponents,
    bodyAttributes,
    body,
    preBodyComponents,
    postBodyComponents,
  } = props;
  return (
    <html className="no-js" lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script dangerouslySetInnerHTML={{ __html: removeNoJsClass }} />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

HTML.defaultProps = {
  htmlAttributes: {},
  headComponents: [],
  bodyAttributes: {},
  preBodyComponents: [],
  body: '',
  postBodyComponents: [],
};
