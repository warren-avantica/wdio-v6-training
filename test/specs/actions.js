describe('Browser actions', () => {

  it('should open the browser', () => {
    browser.url('https://devexpress.github.io/testcafe/example')
  })

  it('checkbox and radio button', () => {
    const radio = $('#linux');
    radio.waitForExist();
    radio.click();
    browser.pause(3000);

    const checkbox = $('#remote-testing')
    checkbox.waitForExist()
    checkbox.click()
    browser.pause(3000);
  })

  it.only('select box', () => {
    browser.url('https://devexpress.github.io/testcafe/example')
    const selectbox = $('#preferred-interface')
    selectbox.waitForExist()
    selectbox.selectByVisibleText('Both')
  })
})