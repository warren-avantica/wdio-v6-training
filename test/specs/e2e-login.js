import App from '../../page-objects/App'
import LoginPage from '../../page-objects/pages/LoginPage'
import Navbar from '../../page-objects/components/Navbar'
import * as dataHelper from '../../lib/data-helpers'

describe("E2E Login page", () => {
  
  it('Should not login with invalid credentials', () => {
    App.openHomepage();
    Navbar.clickSignIn();
    LoginPage.formIsVisible();
    console.log(dataHelper.getRandomName());
    LoginPage.fillForm(dataHelper.getRandomName(), 'invalid');
    LoginPage.submitForm();
    expect(LoginPage.errorMessage).toHaveText('Login and/or password are wrong.');
  });

  it('Should login with invalid credentials', () => {
    App.openHomepage();
    Navbar.clickSignIn();
    LoginPage.formIsVisible();
    LoginPage.fillForm('username', 'password');
    LoginPage.submitForm();
    Navbar.isNavbarVisible();
  });

  it('Should logout from app', () => {
    App.logout();
    Navbar.isSignInButtonVisible();
  });
})