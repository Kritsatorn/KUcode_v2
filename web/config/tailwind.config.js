module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          editerDark: 'var(--color-bg-eitder-dark)',
          side: 'var(--color-bg-side )',
          headIframe: 'var(--color-bg-head-iframe)',
        },
      },
      height: {
        page: 'calc(-2.5rem + 100vh)',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
