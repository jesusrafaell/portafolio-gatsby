import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import icon from '../../images/jesusrafaell.png';

interface Props {
	description?: string;
	lang?: string;
	meta?: [];
	title?: string;
}

const SEO = ({ description, lang, meta, title }: Props) => {
	const { site } = useStaticQuery(graphql`
		query DefaultSEOQuery {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`);

	return (
		<>
			<title>{site.title}</title>
			<meta name='lang' content={lang} />
			<meta name='description' content={site.description} />
			<meta name='image' content={site.image} />
			<meta name='instagran:card' content='summary_large_image' />
			<meta name='instagran:title' content={site.title} />
			<meta name='instagran:url' content={site.url} />
			<meta name='instagran:description' content={site.description} />
			<meta name='instagran:image' content={site.image} />
			<meta name='instagran:creator' content={site.instagranUsername} />
			<link rel='shortcut icon' href={icon} />
		</>
	);
};

SEO.defaultProps = {
	lang: `en`,
	keywords: [],
	meta: [],
};

export default SEO;
