import { PsDemo1Page } from './app.po';

describe('ps-demo1 App', function() {
  let page: PsDemo1Page;

  beforeEach(() => {
    page = new PsDemo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
