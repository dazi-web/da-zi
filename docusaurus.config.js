// @ts-check

const config = {
  title: 'About Me',
  tagline: 'Senior Webentwickler für E-Commerce-Projekte',
  favicon: 'img/aboutme-picture.jpg',
  url: 'https://da-zi.de',
  baseUrl: '/',
  organizationName: 'danny-zimmer',
  projectName: 'about-me',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/aboutme-picture.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Danny Zimmer',
      logo: {
        alt: 'Danny Zimmer',
        src: 'img/aboutme-picture.jpg',
      },
      items: [
        {
          to: '/about',
          label: 'About',
          position: 'right',
        },
        {
          to: '/impressum',
          label: 'Impressum',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Rechtliches',
          items: [
            {
              label: 'Impressum',
              to: '/impressum',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Danny Zimmer.`,
    },
  },
};

module.exports = config;
