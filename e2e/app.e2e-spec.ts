import { AppPage } from './app.po';

describe('widgets App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to page', () => {
    page.navigateTo();
  });
});
