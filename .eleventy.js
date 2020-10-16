module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/styles.css')
  eleventyConfig.addPassthroughCopy('./src/img')

  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')

  return {
      dir: {
      input: "src", // specify input directory
      data: "_data", // specify data config directory
      includes: "_includes", // specify layouts directory
      output: "_site" // specify output directory
    }
  }
}