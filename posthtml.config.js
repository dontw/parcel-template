const Content = require('./content.config')
const { title, description, keywords, url, faviconUrl, imageUrl } = Content
module.exports = {
  plugins: [
    require('posthtml-expressions')({
      locals: {
        title,
        description,
        keywords,
        url,
        faviconUrl,
        imageUrl
      }
    })
  ]
}
