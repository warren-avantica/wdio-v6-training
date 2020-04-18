describe('testing the browesr', () => {

  it('should open the browser', () => {
    browser.url('http://www.example.com/')
    expect(browser).toHaveUrl('http://www.example.com/')
  })

  it('H1 should ve visible', () => {
    const h1 = $('h1')
    expect(h1).toBeVisible()
  })

  it('p should visible', () => {
    const p = $('p')
    expect(p).toBeVisible()
  })

  it('should get element text', () => {
    const text = $('h1')
    expect(text).toHaveText('Hola')
  })
})