const Content = require('./content.config')
const { env, title, description, keywords, url, faviconUrl, imageUrl } = Content
module.exports = {
  plugins: [
    require('posthtml-expressions')({
      locals: {
        env,
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
