import React, { Component, Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import { relatedBlog } from '~/queries'; // eslint-disable-line

class IndexPage extends Component {
	render() {
		const {
			data: {
				craft: { entries },
			},
			count,
			increment,
			incrementAsync,
		} = this.props;


		return (
			<Fragment>
				<div>
					The count is {count}
					<button type="button" onClick={increment}>
						increment
					</button>
					<button type="button" onClick={incrementAsync}>
						incrementAsync
					</button>
				</div>
				<pre>{JSON.stringify(entries, null, 2)}</pre>
				{entries.map(({ title, id, uri }) => (
					<div key={id}>
						<Link to={`/${uri}`}>{title}</Link>
					</div>
				))}
			</Fragment>
		);
	}
}

export default IndexPage;

export const pageQuery = graphql`
	query IndexQuery {
		craft {
			entries(section: [home], limit: 3, order: "postDate desc") {
				...relatedBlog
			}
		}
	}
`;
