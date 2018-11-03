import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { cx, css as cssE } from 'emotion';

import themeDefault from 'components/Layout/themeDefault';

const cssHoverDefault = `color: ${themeDefault.colorLinkHover}`;

export default function Link(props) {
  const { children, display, cssactive, cssstyles, csshover, to } = props;

  const cssDefault = cssE`
    color: ${themeDefault.colorLink};
    text-decoration: none;
    display: ${display};
    &:hover {
      ${csshover ? csshover : cssHoverDefault}
    }
    &:active {
      color: ${themeDefault.colorLinkActive};
    }
  `;

  const cssActiveDefault = cssE`
    color: ${themeDefault.colorLinkCurrent};
  `;

  return (
    <GatsbyLink
      className={cx(
        cssE`
          ${cssstyles};
        `,
        cssDefault,
      )}
      activeClassName={cx(
        cssE`
          ${cssactive};
        `,
        cssActiveDefault,
      )}
      to={to}
    >
      {children}
    </GatsbyLink>
  );
}
