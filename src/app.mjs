export const state = {
  title: '@magic-examples',
  description: [
    '@magic is a jamstack generator.',
    'this is the @magic-examples directory, containing example pages.',
  ],

  branding: ['@magic', '-examples'],

  seo: {
    name: '@magic-examples',
    url: `https://magic-examples.github.io/`,
    about:
      'magic is a jamstack generator. this page shows some examples that help getting started.',
    image: `https://magic-examples.github.io/magic-preview.jpg`,
    author: {
      '@type': 'person',
      name: 'Jascha Ehrenreich',
      jobTitle: 'Technomancer',
      image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
      url: 'https://jaeh.at',
    },
  },

  menu: [{ to: '/#gl-magic-examples', text: 'examples' }],

  hero: {
    title: '@magic',
    description: 'examples directory',
    content: 'small example projects that help getting started quickly.',
  },

  footer: {
    one: {
      title: '@magic',
      before: ['client libraries', 'created by', 'Wizards & Witches'],
    },

    two: {
      title: 'projects',
      menu: [
        { to: 'https://github.com/magic/', text: '@magic' },
        { to: 'https://github.com/grundstein/', text: '@grundstein' },
        { to: 'https://github.com/webboot/', text: '@webboot' },
      ],
    },
    three: {
      title: 'social',
      menu: [
        { to: 'https://github.com/magic-examples/', text: 'github' },
        { to: 'https://github.com/magic/', text: 'magic @ github' },
      ],
    },
  },
}
