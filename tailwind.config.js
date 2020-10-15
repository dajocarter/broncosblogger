module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: {
    enabled: true,
    content: [
      './**/*.njk',
      './**/*.html'
    ]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}
