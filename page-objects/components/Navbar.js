import Base from '../Base'

class Navbar extends Base {

  get signInBtn() {return $('#signin_button')}
  get navTabs() {return $('.nav-tabs')}
  get settingsButton() {return $('.icon-cog')}
  get helpButton() {return $('#help_link')}

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

  clickSettings() {
    this.settingsButton.waitForExist();
    this.settingsButton.click();
  }

  clickSettings() {
    this.helpButton.waitForExist();
    this.helpButton.click();
  }
}

export default new Navbar()