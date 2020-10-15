class App {
  openHomepage() {
    browser.url('/');
  }

  openLoginPage() {
    browser.url('/#login')
  }

  logout() {
    //browser.url('http://zero.webappsecurity.com/logout.html')
  }
}

export default new App()