import Base from '../Base'

class Navbar extends Base {

  get signInBtn() {return $('#signin_button')}
  get navTabs() {return $('.nav-tabs')}

  clickSignIn() {
    this.signInBtn.waitForExist();
    this.signInBtn.click();
  }

  isNavbarVisible() {
    this.navTabs.waitForExist();
  }

  isSignInButtonVisible() {
    this.signInBtn.waitForExist();
  }
}

export default new Navbar()