module.exports = {
  title: 'SplitScreen.Me',
  tagline: 'Add split-screen functionality to hundreds of PC games!',
  url: 'https://www.splitscreen.me',
  baseUrl: '/',
  favicon: 'img/favicon-192x192.png',
  organizationName: 'SplitScreen-Me', // Usually your GitHub org/user name.
  projectName: 'splitscreenme-www', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SplitScreen.Me',
      logo: {
        alt: 'SplitScreen.Me Logo',
        src: 'img/splitscreen-me-logo.png',
      },
      items: [
        {
          href: 'https://hub.splitscreen.me/',
          target: "_self",
          label: 'Games Hub',
          position: 'left',
        },
        {
          to: 'docs/installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Tutorial', position: 'left'},
        {
          href: 'https://github.com/SplitScreen-Me',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: 'docs/installation',
            },
            {
              label: 'How to use',
              to: 'docs/usage',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/nucleuscoop/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/a9ssM5pxTW',
            },
            {
              label: 'Steam',
              href: 'https://steamcommunity.com/groups/nucleuscoop',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Tutorial',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SplitScreen-Me',
            },
            {
              label: 'Steam Curator Page',
              href: 'https://store.steampowered.com/curator/39181474-Nucleus-Coop-Recommends/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SplitScreen.Me, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/SplitScreen-Me/splitscreenme-www/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
