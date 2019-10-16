const Content = require('./content.config')
const { title, description, url, imageUrl } = Content
module.exports = {
  plugins: [
    require('posthtml-expressions')({
      locals: {
        title,
        description,
        url,
        imageUrl
      }
    })
  ]
}
