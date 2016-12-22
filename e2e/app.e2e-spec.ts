import { DinamicasCliPage } from './app.po';

describe('dinamicas-cli App', function() {
  let page: DinamicasCliPage;

  beforeEach(() => {
    page = new DinamicasCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
