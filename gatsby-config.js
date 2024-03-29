module.exports = {
  siteMetadata: {
    title: `iCare Remedial Massage`,
    description: `The best time to take care of you`,
    author: `Jenny YEH`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-image`,
      options: {
        defaults: {
          formats: [`png`],
        },
        forceBase64Format: `png`
      },
      defaultQuality: 50,
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`png`],
        },
        forceBase64Format: `png`
      },
      defaultQuality: 50,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iCare Remedial Massage`,
        short_name: `iCare`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    // 'gatsby-plugin-robots-txt',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
