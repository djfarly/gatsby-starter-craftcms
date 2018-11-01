import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { css } from 'emotion';
import themeDefault from 'components/Layout/themeDefault';

export default function Link(props) {
  const { children, display, activecss } = props;
  return (
    <GatsbyLink
      className={css`
        color: ${themeDefault.colorLink};
        text-decoration: none;
        display: ${display};
        &:hover {
          color: ${themeDefault.colorLinkHover};
        }
        &:active {
          color: ${themeDefault.colorLinkActive};
        }
      `}
      activeClassName={
        activecss
          ? css`
              ${activecss};
            `
          : css`
              color: ${themeDefault.colorLinkCurrent};
            `
      }
      {...props}
    >
      {children}
    </GatsbyLink>
  );
}
