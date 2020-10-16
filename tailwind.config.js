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
    extend: {}
  },
  variants: {},
  plugins: []
}
