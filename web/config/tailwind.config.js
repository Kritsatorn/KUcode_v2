module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-border': 'var(--color-border)',
        base: 'var(--color-bg-base)',
        'primary-blue': 'var(--color-primary-blue)',
        'btn-blue': 'var( --color-btn-blue)',
        'palettes-mint': 'var(--color-palettes-mint)',
        'palettes-green': 'var(--color-palettes-green)',
        'palettes-dark-green': 'var(--color-palettes-dark-green)',
        'palettes-cream': 'var(--color-palettes-cream)',
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
        slide_img: '140px',
        kuy: '60vh',
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
      boxShadow: {
        xxl: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      },
      maxHeight: {
        kuy: '60vh',
      },
    },
  },
  plugins: [],
}
