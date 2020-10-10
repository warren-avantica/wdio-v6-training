import Base from '../Base'

class LoginPage extends Base { 
  
  get loginForm() {return $('#login_form')}
  get usernameInput() {return $('#user_login')}
  get passwordInput() {return $('#user_password')}
  get submitBtn() {return $('input[type="submit"]')}
  get errorMessage() {return $('.alert-error')}

  formIsVisible() {
    this.loginForm.waitForExist();
  }

  fillForm(username, password) {
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
  }

  submitForm() {
    this.submitBtn.click();
  }

}

export default new LoginPage()