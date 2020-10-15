import Base from '../Base'

class LoginPage extends Base { 
  
  get loginForm() {return $('form')}
  get emailInput() {return $('input[type="email"]')}
  get passwordInput() {return $('input[type="password"]')}
  get submitBtn() {return $('button[type="submit"]')}
  get errorMessage() {return $('.error-messages li')}
  get needAnAccountLink() {return $('a=Need an account?')}

  formIsVisible() {
    this.loginForm.waitForExist();
  }

  fillForm(username, password) {
    this.emailInput.setValue(username);
    this.passwordInput.setValue(password);
  }

  submitForm() {
    this.submitBtn.click();
  }

  login(username, password) {
    this.loginForm.waitForExist();
    this.emailInput.setValue(username);
    this.passwordInput.setValue(password);
    this.submitBtn.click();
  }

}

export default new LoginPage()