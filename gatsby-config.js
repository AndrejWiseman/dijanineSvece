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
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,



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
        policy: [{userAgent: '*', allow: '/'}]
      }
    },


    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Mulish",
              variants: ["300", "400", "500"],
            },
            {
              family: "Philosopher",
              variants: ["400", "700"],
            },
          ],
          selfHosted: [
            {
              family: "URWClassico",
              urls: {
                // src attributes
                // path relative to gatsby project root
                // woff2: `/examplePath/filename.woff2`,
                woff: `/src/assets/fonts/URWClassico-Regular.woff`,
                // otf: `/examplePath/filename.otf`,
                // ttf: `/examplePath/filename.ttf`,
              },
              fontStyle: "regular",
              fontWeight: 400,
            },
          ],
        },
      },
    },


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },


    
  ],
}
