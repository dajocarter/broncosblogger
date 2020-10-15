module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')

  return {
      dir: {
      input: ".", // specify input directory
      data: "_data", // specify data config directory
      includes: "_includes", // specify layouts directory
      output: "_site" // specify output directory
    }
  }
}