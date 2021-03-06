import App from '../../page-objects/App'
import LoginPage from '../../page-objects/pages/LoginPage'
import Navbar from '../../page-objects/components/Navbar'
import * as dataHelper from '../../lib/data-helpers'
import SettingsPage from '../../page-objects/pages/SettingsPage';

const email = process.env.WDIO_CONDUIT_EMAIL;
const password = process.env.WDIO_CONDUIT_PASS;

describe("E2E Login page", () => {
  
  it('Should login with valid credentials', () => {
   App.openHomepage();
   Navbar.clickSignIn();
   LoginPage.formIsVisible();
   LoginPage.fillForm(email, password);
   LoginPage.submitForm();
   Navbar.newPostButton.waitForDisplayed();
   expect(Navbar.newPostButton.isDisplayed()).toBe(true);
   Navbar.clickSettings();
   SettingsPage.logout();
  });

  it('Should not login with invalid credentials', () => {
    App.openHomepage();
    Navbar.clickSignIn();
    LoginPage.formIsVisible();
    LoginPage.fillForm('username@user.com', 'password');
    LoginPage.submitForm();
    expect(LoginPage.errorMessage.getText()).toEqual('email or password is invalid')
  });

  it('Should logout from app', () => {
    App.openHomepage();
    Navbar.clickSignIn();
    LoginPage.login(email, password);
    Navbar.newPostButton.waitForDisplayed();
    expect(Navbar.newPostButton.isDisplayed()).toBe(true);
    Navbar.clickSettings();
    SettingsPage.logout();
    expect(Navbar.newPostButton.isDisplayed()).toBe(false);
  });
})