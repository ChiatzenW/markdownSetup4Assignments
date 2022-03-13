module.exports = {
  onWillParseMarkdown: function(markdown) {
    return new Promise((resolve, reject)=> {
      //add parser for "<TODO>", "</TODO>"
      markdown = markdown.replace(/<TODO>/g, '<span class="todo">TODO:');
      markdown = markdown.replace(/<\/TODO>/g, '</span>');
      return resolve(markdown)
    })
  },
  onDidParseMarkdown: function(html, {cheerio}) {
    return new Promise((resolve, reject)=> {
      return resolve(html)
    })
  },
  onWillTransformMarkdown: function (markdown) {
        return new Promise((resolve, reject) => {
            return resolve(markdown);
        });
    },
  onDidTransformMarkdown: function (markdown) {
      return new Promise((resolve, reject) => {
          return resolve(markdown);
      });
  }
}