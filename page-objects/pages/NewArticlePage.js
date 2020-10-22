class NewArticlePage {
  
  get titleInput() {return $('.form-group:nth-child(1) input')}
  get aboutInput() {return $('input[placeholder="What\'s this article about?"]')}
  get bodyInput() {return $('textarea')}
  get tagsInput() {return $('.form-group:nth-child(4) input')}
  get submitBtn() {return $('button[type="button"]')}
  get newArticleForm() {return $('form')}

  typeTitle(text) {
    this.titleInput.waitForDisplayed();
    this.titleInput.setValue(text);
  }

  typeAbout(text) {
    this.aboutInput.waitForDisplayed();
    this.aboutInput.setValue(text);
  }

  typeBody(text) {
    this.bodyInput.waitForDisplayed();
    this.bodyInput.setValue(text);
  }

  typeTags(text) {
    this.tagsInput.waitForDisplayed();
    this.tagsInput.setValue(text);
  }

  submitForm() {
    this.submitBtn.click();
  }

  isFormDisplayed() {
    return this.newArticleForm.isDisplayed();
  }

}

export default new NewArticlePage()