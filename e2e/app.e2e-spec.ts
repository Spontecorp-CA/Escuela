import { EscuelaPage } from './app.po';

describe('escuela App', () => {
  let page: EscuelaPage;

  beforeEach(() => {
    page = new EscuelaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
