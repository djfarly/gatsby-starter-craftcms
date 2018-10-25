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
	query PageQueryById($id: [Int]!) {
		craft {
			entry(id: $id) {
				... on Craft_Pages {
					pageBuilder {
						...PageBuilderQuery
					}
				}
			}
		}
	}
`;
