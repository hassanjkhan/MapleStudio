module.exports = {
  siteMetadata: {
    title: 'Ruby Labs',
    author: 'Ruby Labs',
    description: ' ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ruby Labs',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          // apiKey: "<YOUR_FIREBASE_API_KEY>",
          // authDomain: "<YOUR_FIREBASE_AUTH_DOMAIN>",
          // databaseURL: "<YOUR_FIREBASE_DATABASE_URL>",
          // projectId: "<YOUR_FIREBASE_PROJECT_ID>",
          // storageBucket: "<YOUR_FIREBASE_STORAGE_BUCKET>",
          // messagingSenderId: "<YOUR_FIREBASE_MESSAGING_SENDER_ID>",
          // appId: "<YOUR_FIREBASE_APP_ID>"
          apiKey: "AIzaSyAU3hCvBAwKyZ7lULDKOOn0XraBnkQuCaQ",
          authDomain: "maplestudio-4f0fd.firebaseapp.com",
          projectId: "maplestudio-4f0fd",
          storageBucket: "maplestudio-4f0fd.appspot.com",
          messagingSenderId: "485345047309",
          appId: "1:485345047309:web:dcdbfd55c4891f41bab644",
          measurementId: "G-4Q43LVNTEL"
        }
      }
    }
  ],
}
