import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';

import PageBuilder from 'components/PageBuilder';

class IndexPage extends Component {
  render() {
    const {
      data: {
        craft: { entries, entry },
      },
    } = this.props;

    return (
      <>
        <h2>All Pages:</h2>

        {entries.map(({ id, slug, title, uri }) => {
          if (slug !== 'home')
            return (
              <div key={id}>
                <Link to={`/${uri}`}>{title}</Link>
              </div>
            );
          else {
            return null
          }
        })}

        <PageBuilder pageBuilder={entry.pageBuilder} />
      </>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    craft {
      entries {
        id
        slug
        title
        uri
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
