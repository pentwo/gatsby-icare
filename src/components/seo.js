import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  description: `Jenny is a 10-years-experienced massage therapist. Qualified Diploma of remedial massage and practitioner of pregnancy massage. (Work in Wu’s Asian Massage)`,
  meta: [],
  keywords: [
    'Deep Tissue',
    'Swedish',
    'Trigger Point',
    'Japanese Shiatsu',
    'Sport Massage',
    'Myofascial Release',
    'Positional Release',
    'Trager',
    'Postual Massage',
    'Reflexology',
    'Manual Lymphtic Drainage',
    'healthy lifestyle',
    'healthfund rebates',
    'pregnancy massageperth',
    'selfcare matters',
    'women',
    'women empowerment',
    'women health',
    'women healthcare',
    'womens wellness',
    'positive thinking',
    'chakra healing',
    'chakra balancing',
    'fertility massage specialist',
    'fertility massage therapy',
    'pregnancy massage specialist',
    'mental health',
    'mental health awareness',
    'mental health matters',
    'mental health support',
    'mental health help',
  ],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
