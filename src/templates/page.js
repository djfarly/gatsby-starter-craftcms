import React, { Component, Fragment } from 'react';
import { graphql, Link } from 'gatsby';

import PageBuilder from '../components/PageBuilder/PageBuilder';

export default class Pages extends Component {
	render() {
		const {
			data: {
				craft: { entry },
			},
		} = this.props;

		return (
			<Fragment>
        <PageBuilder pageBuilder={entry.pageBuilder} />
			</Fragment>
		);
	}
}

export const pageQuery = graphql`
	query PageQueryBySlug($slug: String!) {
		craft {
			entry(slug: $slug) {
				... on Craft_Pages {
					pageBuilder {
						...PageBuilderQuery
					}
				}
			}
		}
	}
`;
