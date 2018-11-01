import React from 'react';
import { graphql } from 'gatsby';

import PageBuilder from 'components/PageBuilder';
import WrapGrid from 'components/WrapGrid';
import Link from 'components/Link';
import Headline from 'components/Headline';

export default function IndexPage(props) {
  const {
    data: {
      craft: { entries, entry },
    },
  } = props;

  return (
    <WrapGrid>
      <Headline>All Pages:</Headline>

      <Link to="/">Home</Link>

      <br />
      <br />

      {entries.map(({ id, slug, title, fullUri }) => {
        if (slug !== 'home')
          return (
            <div key={id}>
              <Link to={`${fullUri}`}>{title}</Link>
            </div>
          );
        return null;
      })}

      <PageBuilder pageBuilder={entry.pageBuilder} />
    </WrapGrid>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    craft {
      entries {
        id
        slug
        title
        fullUri
      }

      entry(slug: "home") {
        ... on Craft_Home {
          pageBuilder {
            ...PageBuilderQuery
          }
        }
      }
    }
  }
`;
