// Use browser to access other sites (that are running angular)
import { element, by } from 'protractor';

// Use SkyHostBrowser to access your locally served SPA
import { SkyHostBrowser } from '@blackbaud/skyux-builder/runtime/testing/e2e';

describe('Home Component', () => {

  // done is optional callback if you're doing async tests
  it('should render', (done) => {

    // Host URL + SPA Name automatically included
    SkyHostBrowser.get('/');
    expect(element(by.tagName('h1')).getText()).toBe('Stache 2');

    // // Since we've said this is an async test, we need to call done
    done();
  });
});
