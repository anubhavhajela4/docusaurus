// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docusaurus-2.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'IshikaGupta3112', // Usually your GitHub org/user name.
  // projectName: 'docusaurus-site', // Usually your repo name.
  // deploymentBranch:'gh-pages',
  // trailingSlash:false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        // title: 'My Site',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            label: 'Aditya Singh',
            to: '/docs/Aditya',
            position: 'left'
          },
          {
            label: 'Anish Singh Chauhan',
            to: '/docs/anish',
            position: 'left'
          },
          {
            label: 'Anmol Sharma',
            to: '/docs/anmol',
            position: 'left'
          },
          {
            label: 'Anubhav Hajela',
            to: '/docs/anubhav'
          },
          {
            label: 'Arthkamboj',
            to: '/docs/arthkamboj',
            position: 'left'
          },
          {
            label: "Aryan Garg",
            to: "/docs/aryan",
            position: "left"
          },
          {
            label: 'Astha',
            to: '/docs/Astha',
            position: 'left'
          },
          {
            label: 'Ateendra',
            to: '/docs/ateendra',
            position: 'left'
          },
          {
            label: 'Divyansh Verma',
            to: '/docs/divyansh',
            position: 'left'
          },
          {
            label: 'Harsh Singh',
            to: '/docs/harsh',
            position: 'left'
          },
          {
            label: 'Kartikay Singh Pundir',
            to: '/docs/Kartikay',
            position: 'left'
          },
          {
            label: 'Mahak Pathak',
            to: '/docs/mahak',
            position: 'left'
          },
          {
            label: 'Mrigank',
            to: '/docs/Mrigank',
            position: 'left'
          },
          {
            label: 'Naitik Jain',
            to: '/docs/naitik',
            position: 'left'
          },
          {
            label: 'Navya Gupta',
            to: '/docs/navya',
            position: 'left'
          },
          {
            label: 'Ritik Tayal',
            to: '/docs/ritik',
            position: 'left'
          },
          {
            label: 'Ritika Tiwari',
            to: '/docs/ritika',
            position: 'left'
          },
          {
            label: 'Sachi',
            to: '/docs/Sachi',
            position: 'left'
          },
          {
            label: 'Shivani Rai',
            to: '/docs/shivani',
            position: 'left'
          },
          {
            label: 'Shivansh Goyal',
            to: '/docs/shivansh',
            position: 'left'
          },
          {
            label: 'Shreyanshu',
            to: '/docs/shreyanshu',
            position: 'left'
          },
          {
            label: 'Sneha Bansal',
            to: '/docs/sneha',
            position: 'left'
          },
          {
            label: 'Srayansh Gupta',
            to: '/docs/srayansh',
            position: 'left'
          },
          {
            label: 'Tanvee Saxena',
            to: '/docs/tanvee',
            position: 'left'
          },
          {
            label: 'Tanishka Gautam',
            to: '/docs/tanishka',
            position: 'left'
          },
          {
            label:'Kanishak Rajput',
            to:'/docs/kanishak',
            position:'left'
          }

          // {
          //   label: 'About',
          //   to: '/docs/about',
          //   position: 'left'
          // },

          // {
          //   label: 'Skills',
          //   to: '/docs/skills',
          //   position: 'left'
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'home',
      //           to: '/docs/home',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
