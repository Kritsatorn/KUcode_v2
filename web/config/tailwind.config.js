module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-border': 'var(--color-border)',
        base: 'var(--color-bg-base)',
        'primary-blue': 'var(--color-primary-blue)',
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          label: 'var(--color-text-console-label)',
          normal: 'var(--color-text-console-normal)',
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          editerDark: 'var(--color-bg-eitder-dark)',
          side: 'var(--color-bg-side )',
          headIframe: 'var(--color-bg-head-iframe)',
          editing: 'var(--color-bg-editor-editing)',
          playing: 'var(--color-bg-editor-playing)',
          sideEditing: 'var(--color-bg-sidebar-editing)',
        },
      },
      height: {
        page: 'calc(-2.5rem + 100vh)',
        slide: '45vw',
      },
      width: {
        editer: 'calc(-12rem + 100% )',
        slide: '80vw',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      translate: {
        slideY: 'calc(45vw + 10vh - 13.5rem)',
        slideX: '10vw',
      },
      rotate: {
        60: '60deg',
      },
    },
  },
  plugins: [],
}
