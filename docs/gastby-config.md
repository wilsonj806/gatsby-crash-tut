# Gatsby Configuration
## Overview
Gatsby lets you do a wild amount of stuff out of the box, but a lot of it revolves around plugins and stuff. This overviews that

## gatsby-config.js
Just like Create React App, Gatsby starts with a `gatsby-config.js` file where you can configure a variety of things, including plugins.

The config from the gatsby-starter, looks pretty simple and looks like so:
```js
module.exports = {
  siteMetadata: {},
  plugins: [
    `gastby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {}
    },
    ...otherPlugins
  ]
}
```

Should look familiar/ similar to Webpack configs. Just like how you use and configure loaders in Webpack, you can specify Gatsby plugins with either a string, or an object with the plugin name and options.

## Plugins it comes with
The Gatsby default starter comes with some stuff already bundled in, see below for more:
- [React Helment plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=)
- [Filesystem plugin](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=)
  - this lets you load in files from your repo
  - can be specified multiple times for different file paths and different extensions
- Transformer SHarp and Sharp Plugin handle image manipulation
- Gatsby Plugin Manifest handles making a manifest file to allow users to add the app to their phone's homescreen

## How to find more
More plugins can be found on the [Gatsby plugin page](https://www.gatsbyjs.org/plugins/), but I've listed some useful ones below:
- [Gatsby Transformer Remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=)
- [Gatsby MDX](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/?=)
- [Gatsby TypeScript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/?=typescript)

## Plugins we're using in the crash course
- [Gatsby Transformer Remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=)
- plugin catch links
  - lets Gatsby catch markdown links