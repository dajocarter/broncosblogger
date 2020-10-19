const { DateTime } = require('luxon')
const markdownIt = require('markdown-it')
const markdownItEmoji = require('markdown-it-emoji')
const htmlMinifier = require('html-minifier')

module.exports = function (eleventyConfig) {
  // Pass through assets to generated website
  eleventyConfig.addPassthroughCopy('./src/css/styles.css')
  eleventyConfig.addPassthroughCopy('./src/img')
  eleventyConfig.addPassthroughCopy('./src/js')
  // Create aliases for layouts to not have to specify directory everywhere
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')
  // Create filters to apply to content
  eleventyConfig.addFilter('humanDateString', date => {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat('LLLL d, yyyy')
  })
  eleventyConfig.addFilter('htmlDateString', date => {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat('yyyy-LL-dd')
  })
  // MarkDown overrides
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItEmoji)
  eleventyConfig.setLibrary('md', markdownLibrary)
  // Minify HTML
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return htmlMinifier.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true
      })
    }
    return content
  })

  return { // data and includes is relative to input
    dir: {
      input: "src", // specify input directory
      data: "_data", // specify data config directory
      includes: "_includes", // specify layouts directory
      output: "_site" // specify output directory
    }
  }
}