import Base from '../Base'

class Navbar extends Base {

  get signInBtn() {return $('a=Sign in')}
  get signUpBtn() {return $('a=Sign up')}
  get homeBtn() {return $('a=Home')}
  get navTabs() {return $('.nav-tabs')}
  get settingsButton() {return $('a*=Settings')}
  get newPostButton() {return $('a*=New Post')}
  get helpButton() {return $('#help_link')}
  get userProfileBtn() {return $('.navbar-nav > li:nth-last-child(1)')}

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

  clickSignUpBtn() {
    this.signUpBtn.waitForExist();
    this.signUpBtn.click();
  }

  clickSettings() {
    this.settingsButton.waitForExist();
    this.settingsButton.click();
  }

  clickHelp() {
    this.helpButton.waitForExist();
    this.helpButton.click();
  }

  clickNewPost() {
    this.newPostButton.waitForDisplayed();
    this.newPostButton.click();
  }

  isUserProfileBtnDisplayed() {
    this.userProfileBtn.waitForDisplayed();
  }
}

export default new Navbar()