const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});
Scenario('Post restaurant review', async ({ I }) => {
  const inputReview = {
    name: 'e2e testing',
    review: 'wah enak',
  };

  I.waitForElement('.title', 5);
  I.seeElement('.title');
  I.click(locate('.title').first());

  I.waitForElement('#inputName', 5);
  I.fillField('#inputName', inputReview.name);
  I.fillField('#inputReview', inputReview.review);
  I.waitForElement('#postReviewButton', 5);
  I.click('#postReviewButton');
  I.click('#close-button');

  const lastReviewText = {
    name: await I.grabTextFrom(locate('.customer-review-item span').last()),
    review: await I.grabTextFrom(locate('.customer-review-item p').last()),
  };

  assert.deepEqual(inputReview, lastReviewText);
});
