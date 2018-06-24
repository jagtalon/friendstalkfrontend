module.exports = {
  siteMetadata: {
    title: 'Friends Talk Frontend',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ]
};