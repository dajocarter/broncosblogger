require('dotenv').config()
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.njk',
      './src/**/*.md'
    ]
  },
  theme: {
    extend: {
      colors: {
        original: {
          primary: 'var(--original--primary)',
          alt: 'var(--original--alt)'
        },
        classic: {
          primary: 'var(--classic--primary)',
          alt: 'var(--classic--alt)'
        },
        current: {
          primary: 'var(--current--primary)',
          alt: 'var(--current--alt)'
        }
      },
      textColor: {
        theme: 'var(--theme--color__text)'
      },
      backgroundColor: {
        theme: 'var(--theme--color__background)'
      }
    },
    typography: {
      default: {
        css: {
          color: 'var(--theme--color__text)',
          a: {
            color: 'var(--theme--color__link)',
            '&:hover': {
              cursor: 'var(--theme-cursor)'
            }
          },
          button: {
            color: 'var(--theme--color__link)',
            '&:hover': {
              cursor: 'var(--theme-cursor)'
            }
          },
          strong: {
            color: 'var(--theme--color__link)'
          },
          hr: {
            borderColor: 'var(--theme--color__link)'
          },
          h1: {
            color: 'var(--theme--color__link)'
          },
          h2: {
            color: 'var(--theme--color__link)'
          },
          h3: {
            color: 'var(--theme--color__link)'
          },
          h4: {
            color: 'var(--theme--color__link)'
          },
          h5: {
            color: 'var(--theme--color__link)'
          },
          h6: {
            color: 'var(--theme--color__link)'
          },
          'ol li:before': {
            color: 'var(--theme--color__link)'
          },
          'ul li:before': {
            backgroundColor: 'var(--theme--color__link)'
          },
          blockquote: {
            borderLeftColor: 'var(--theme--color__link)',
            color: 'var(--theme--color__text)'
          },
          thead: {
            color: 'var(--theme--color__link)'
          }
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
