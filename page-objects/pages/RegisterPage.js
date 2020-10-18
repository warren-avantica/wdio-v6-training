class RegisterPage {

  get usernameInput() {return $('input[type="text"]')}
  get emailInput() {return $('input[type="email"]')}
  get passwordInput() {return $('input[type="password"]')}
  get submitBtn() {return $('button[type="submit"]')}

  typeUsername(username) {
    this.usernameInput.waitForExist();
    this.usernameInput.setValue(username);
  }

  typeEmail(email) {
    this.emailInput.waitForExist();
    this.emailInput.setValue(email);
  }

  typePassword(password) {
    this.passwordInput.waitForExist();
    this.passwordInput.setValue(password);
  }

  submitForm() {
    this.submitBtn.waitForExist();
    this.submitBtn.click();
  }
}

export default new RegisterPage()