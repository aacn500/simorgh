import {
  errorMessage,
  errorPageInlineLink,
  errorTitle,
  hasHtmlLangDirAttributes,
} from '../support/bodyTestHelper';
import { describeForLocalOnly } from '../support/limitEnvRuns';
import news from '../../src/app/lib/config/services/news';

// This is duplicated between this file and errorPagePersian.js.
// This is because both these files will be consolidated into 1 file in a later PR.
const nonExistentAsset = 'cxvxrj8tvppo';

// It is safe to test only that a 404 is returned on all environments
describe('Test we get a 404', () => {
  it('should return a 404 error code', () => {
    cy.request({
      url: `/news/articles/${nonExistentAsset}`,
      failOnStatusCode: false,
    }).then(({ status }) => {
      expect(status).to.eq(404);
    });
  });
});

// These must only ever be run locally as otherwise you're testing
// the mozart page not the response from this application.
describeForLocalOnly('Local Article Error Page Tests', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    cy.visit(`/news/articles/${nonExistentAsset}`, {
      failOnStatusCode: false,
    });
  });

  it('should return a 404 error code', () => {
    cy.testResponseCodeAndType(
      `/news/articles/${nonExistentAsset}`,
      404,
      'text/html',
    );
  });

  it('should have the correct lang & dir attributes', () => {
    hasHtmlLangDirAttributes({ lang: 'en-GB', dir: 'ltr' });
  });

  it('should display a relevant error message on screen', () => {
    cy.visit(`/news/articles/${nonExistentAsset}`, {
      failOnStatusCode: false,
    });
    errorMessage(news);

    cy.visit(`/news/articles/${nonExistentAsset}`, {
      failOnStatusCode: false,
    });
    errorMessage(news);
  });

  it('should have an inline link on the page that is linked to the home page', () => {
    errorPageInlineLink(news);
  });

  it('should have a relevant error title in the head', () => {
    errorTitle(news);
  });
});
