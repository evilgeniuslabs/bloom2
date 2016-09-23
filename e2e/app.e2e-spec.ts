import { Bloom2Page } from './app.po';

describe('bloom2 App', function() {
  let page: Bloom2Page;

  beforeEach(() => {
    page = new Bloom2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
