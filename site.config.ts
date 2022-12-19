import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required) '1afa57a764ce4d90bc7ca7f330fb2485'
  rootNotionPageId: 'Nikita-Kiselev_-9afffd157b044c88938538c7ebae2e41',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Nikita Kiselev\'s website',
  domain: 'manparvesh.com',
  author: 'Man Parvesh Singh Randhawa',

  // open graph metadata (optional)
  description: 'Nikita Kiselev\'s page',

  // social usernames (optional)
  twitter: '',
  github: '/1nikitas',
  linkedin: 'manparvesh',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/resume': '2da1726d02a449278a4c4fb61a6a4334'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Contact',
      pageId: 'contact-me-ee35a1563dc0456d92dbe4c365e82890'
    }
  ]
})
