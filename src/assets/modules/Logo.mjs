export const View = ({ root }) =>
  Link({ to: root, class: 'Logo' }, [
    svg({ viewBox: '0 0 512 444' }, [
      path({ d: 'M512 444L256 0 0 444z', fill: '#663695' }),
      circle({ cx: '256', cy: '294', fill: '#fff', r: '130' }),
      path({
        d:
          'M256 73a8 8 0 00-7 8v53a8 8 0 1015 0V81a8 8 0 00-8-8zm141 295a8 8 0 00-4 13l43 29a8 8 0 108-12l-43-29a8 8 0 00-4-1zm-282 0a8 8 0 00-4 1l-43 29a8 8 0 108 12l43-29a8 8 0 00-4-13z',
        fill: '#fff',
      }),
      path({
        d:
          'M230 201l-38 40c-6 12 9 31 20 24l88 93c19 17 59-20 44-43l-87-93c6-15-17-31-27-21zm16 22l52 55h-63l-21-22c-10 8-17-5-11-13l32-33c6-4 17 7 11 13zm-60 96c27 0 1-54 1-54s-34 54-1 54zm-4-5c-12-2-6-27 0-37-4 14-4 30 0 37z',
        fill: '#639',
      }),
    ]),
  ])

export const style = {
  float: 'left',
  height: '2.4em',

  svg: {
    display: 'inline-block',
    width: '3em',
    height: 'auto',
  },

  span: {
    '.Header &&': {
      lineHeight: 1,
      margin: '0.4em',
    },
  },
}
