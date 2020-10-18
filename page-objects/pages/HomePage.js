const { default: Base } = require("../Base");

class HomePage extends Base {

  get globalFeedTab() {return $('a=Global Feed')}
  get userFeedTab() {return $('a=Your Feed')}
  get articlesList() {return $$('.article-preview')}
  get tagsList() {return $$('.tag-pill')}
  get pagination() {return $$('.page-item')}
  get currentTag() {return $()}

  selectAvailableTag(tagName) {
    this.tagsList.map((tag) => {
      if(tag.getText() == tagName) {
        tag.click();
      }
    })
  }
}

export default new HomePage()