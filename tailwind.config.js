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
      './src/**/*.njk',
      './src/**/*.html'
    ]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}
