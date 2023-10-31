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
    `gatsby-plugin-cloudflare-pages`,



    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-SR55NPQK2B", // Google Analytics / GA
        ],      
      },
    },


    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: null,
        sitemap: 'https://dijana-svijece.netlify.app/sitemap.xml',
        // policy: [{userAgent: '*', allow: '/'}]
      }
    }


    
  ],
}
