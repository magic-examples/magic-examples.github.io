export const state = {
  title: '@magic-examples',
  description: [
    '@magic is a jamstack generator.',
    'this is the @magic-examples directory, containing example pages.',
  ],

  branding: ['@magic', '-examples'],

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
