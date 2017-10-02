import { InnerSpacePage } from './app.po';

describe('inner-space App', () => {
  let page: InnerSpacePage;

  beforeEach(() => {
    page = new InnerSpacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
