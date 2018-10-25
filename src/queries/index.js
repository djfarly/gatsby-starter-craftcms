import { graphql } from 'gatsby';

export const relatedBlog = graphql`
	fragment relatedBlog on Craft_Home {
		title
		uri
		id
		postDate
	}
`;
