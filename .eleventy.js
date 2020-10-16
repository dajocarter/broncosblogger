const { DateTime } = require('luxon')

module.exports = function (eleventyConfig) {
  // Pass through assets to generated website
  eleventyConfig.addPassthroughCopy('./src/css/styles.css')
  eleventyConfig.addPassthroughCopy('./src/img')
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

  return { // data and includes is relative to input
    dir: {
      input: "src", // specify input directory
      data: "_data", // specify data config directory
      includes: "_includes", // specify layouts directory
      output: "_site" // specify output directory
    }
  }
}