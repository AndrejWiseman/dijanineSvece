/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

  siteMetadata: {
    // siteUrl: 'https://dijana-svijece.netlify.app'
  },

  plugins: [
    'gatsby-plugin-babel-optional-chaining',
    // 'gatsby-plugin-robots-txt',


    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        // host: 'https://dijana-svijece.netlify.app',
        sitemap: 'https://dijana-svijece.netlify.app/sitemap.xml',
        // policy: [{userAgent: '*', allow: '/'}]
      }
    }


    
  ],
}
