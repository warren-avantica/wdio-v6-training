import RegisterPage from '../../page-objects/pages/RegisterPage'
import NavBar from '../../page-objects/components/Navbar'
import App from '../../page-objects/App';
import HomePage from '../../page-objects/pages/HomePage'

const faker = require('faker');

const username = faker.internet.userName();
const email = faker.internet.email();
const password = process.env.WDIO_CONDUIT_PASS;

describe('Sign up page', () => {

  it('should signup correctly', () => {
    App.openHomepage();
    NavBar.clickSignUp();
    RegisterPage.typeUsername(username);
    RegisterPage.typeEmail(email);
    RegisterPage.typePassword(password);
    RegisterPage.submitForm();
    HomePage.globalFeedTab.waitForDisplayed();
    expect(NavBar.userProfileBtn.getText()).toEqual(username);
    expect(HomePage.userFeedTab.isExisting()).toBe(true); 
  }); 

});