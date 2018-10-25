import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<link
			key="gatsby-plugin-craft-sitemap"
			rel="sitemap"
			type="application/xml"
			href="/sitemap.xml"
		/>,
	]);
};
