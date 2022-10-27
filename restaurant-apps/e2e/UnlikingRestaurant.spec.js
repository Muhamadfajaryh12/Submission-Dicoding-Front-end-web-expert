const assert = require('assert');

Feature('UnlikingRestaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.seeElement('#container-restaurant-like');
  I.see('Tidak ada Restaurant untuk ditampilkan', '#container-restaurant-like');
  I.amOnPage('/');
  I.waitForElement('.title', 5);
  I.seeElement('.title');
  const firstRestaurant = locate('.title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.waitForElement(firstRestaurant, 15);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');

  const UnfavoritedRestaurantTitle = await I.grabTextFrom('.title');
  assert.strictEqual(firstRestaurantTitle, UnfavoritedRestaurantTitle);

  I.seeElement('#container-restaurant-like');
  I.waitForElement(firstRestaurant, 5);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada Restaurant untuk ditampilkan', '#container-restaurant-like');
});
