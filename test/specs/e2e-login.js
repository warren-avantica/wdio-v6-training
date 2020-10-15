import App from '../../page-objects/App'
import LoginPage from '../../page-objects/pages/LoginPage'
import Navbar from '../../page-objects/components/Navbar'
import * as dataHelper from '../../lib/data-helpers'

const email = require('config').get('app.admin.email')
const password = require('config').get('app.admin.password')

describe("E2E Login page", () => {
  
  it('Should not login with invalid credentials', () => {
   App.openHomepage();
   Navbar.clickSignIn();
   LoginPage.formIsVisible();
   LoginPage.fillForm('asd@asd.com', password);
   LoginPage.submitForm();
   expect(LoginPage.errorMessage.getText()).toEqual('email or password is invalid')
  });

  // it('Should login with valid credentials', () => {
  //   App.openHomepage();
  //   Navbar.clickSignIn();
  //   LoginPage.formIsVisible();
  //   LoginPage.fillForm('username', 'password');
  //   LoginPage.submitForm();
  //   Navbar.isNavbarVisible();
  // });

  // it('Should logout from app', () => {
  //   App.logout();
  //   Navbar.isSignInButtonVisible();
  // });
})