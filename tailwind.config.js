const typography = require('@tailwindcss/typography');
module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./hugo_stats.json'],
    mode: 'all',
    options: {
      defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        els = els.tags.concat(els.classes, els.ids);
        return els;
      }
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.white'),
            strong: {
              color: theme('colors.white'),
              fontWeight: '600',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: theme('colors.white'),
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.gray.200'),
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.white'),
              '&:hover': {
                color: theme('colors.white'),
              },
            },
          },
        },
      }),
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      }
    },
  },
  variants: {
    typography: ['responsive', 'dark'],
    extend: {},
  },
  plugins: [typography],
}
