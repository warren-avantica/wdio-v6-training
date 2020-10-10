import App from '../../page-objects/App'

describe("E2E Feedback page", () => {
  
  it('Should load feedback form', () => {
    App.openHomepage();
    $('#feedback').waitForExist();
    $('#feedback').click();
    $('form').waitForExist();
  });
})