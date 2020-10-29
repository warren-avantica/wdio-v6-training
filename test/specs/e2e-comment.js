import App from '../../page-objects/App'
import LoginPage from '../../page-objects/pages/LoginPage'
import Navbar from '../../page-objects/components/Navbar'
import NewArticlePage from '../../page-objects/pages/NewArticlePage'
import ArticleDetailPage from '../../page-objects/pages/ArticleDetailPage'
import SettingsPage from '../../page-objects/pages/SettingsPage'

const faker = require('faker');

const title = faker.lorem.slug(5);
const about = faker.lorem.text(2);
const body = faker.lorem.paragraph(5);
const tags = faker.lorem.words(3);

const email = process.env.WDIO_CONDUIT_EMAIL;
const password = process.env.WDIO_CONDUIT_PASS;

describe('Comment section', () => {

  beforeEach(() => {
    App.openLoginPage();
    LoginPage.login(email, password);
  });

  afterEach(() => {
    Navbar.clickSettings();
    SettingsPage.logout();
  });

  it('should navigate to new comment section', () => {
    Navbar.clickNewPost();  
    expect(NewArticlePage.isFormDisplayed()).toBe(true);
  });

  it('should create a new article', () => {
    Navbar.clickNewPost();
    NewArticlePage.typeTitle(title);
    NewArticlePage.typeAbout(about);
    NewArticlePage.typeBody(body);
    NewArticlePage.typeTags(tags);
    NewArticlePage.submitForm();
    expect(ArticleDetailPage.articleTitle.getText()).toEqual(title);
  });
})