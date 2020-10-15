import Base from '../Base'

class Navbar extends Base {

  get signInBtn() {return $('a=Sign in')}
  get signUpBtn() {return $('a=Sign up')}
  get homeBtn() {return $('a=Home')}
  get navTabs() {return $('.nav-tabs')}
  get settingsButton() {return $('.icon-cog')}
  get newPostButton() {return $('a*=New Post')}
  get helpButton() {return $('#help_link')}

  clickSignIn() {
    this.signInBtn.waitForExist();
    this.signInBtn.click();
  }
  clickSignUp() {
    this.signUpBtn.waitForExist();
    this.signUpBtn.click();
  }
  clickHomeBtn() {
    this.homeBtn.waitForExist();
    this.homeBtn.click();
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