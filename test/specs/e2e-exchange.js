import App from '../../page-objects/App'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('E2E Tests - Currency exchange', () => {
  
  it('Should log into application', () => {
    App.openHomepage();
    Navbar.clickSignIn();
    LoginPage.formIsVisible();
    LoginPage.fillForm('username', 'password');
    LoginPage.submitForm();
    Navbar.isNavbarVisible();
  });
})