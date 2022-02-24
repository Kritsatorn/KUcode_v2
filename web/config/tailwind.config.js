module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-border': 'var(--color-border)',
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
        },
      },
      height: {
        page: 'calc(-2.5rem + 100vh)',
      },
      width: {
        editer: 'calc(-12rem + 100% )',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
