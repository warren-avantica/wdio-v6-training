import HomePage from '../../page-objects/pages/HomePage'
import App from '../../page-objects/App'
import LoginPage from '../../page-objects/pages/LoginPage'

const email = require('config').get('app.admin.email')
const password = require('config').get('app.admin.password')

// beforeEach(() => {
//   App.openLoginPage();
//   LoginPage.login(email, password)
// });

// afterEach(() => {
//   browser.execute(() => localStorage.clear())
// });

describe('Homepage', () => {

  it('should count pagination size', () => {
    App.openHomepage();
    browser.scrollIntoElement('.pagination');
    expect(HomePage.pagination.length).toBeGreaterThan(1);
  });

  it('should count tags size', () => {
    App.openHomepage();
    expect(HomePage.tagsList).toExist();
    expect(HomePage.tagsList.length).toBeGreaterThan(1);
  });

});