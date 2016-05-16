import { FacialExpressionsPage } from './app.po';

describe('facial-expressions App', function() {
  let page: FacialExpressionsPage;

  beforeEach(() => {
    page = new FacialExpressionsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('facial-expressions works!');
  });
});
