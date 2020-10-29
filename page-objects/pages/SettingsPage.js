import Base from '../Base'

class SettingsPage extends Base {

  get logoutBtn() {return $('.btn.btn-outline-danger')}


  logout() {
    this.logoutBtn.waitForExist();
    this.logoutBtn.scrollIntoView();
    this.logoutBtn.click();
  }
}

export default new SettingsPage()