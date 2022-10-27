import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantFormReviewTemplate,
  createRestoMenuFoodTemplate,
  createRestoMenuDrinkTemplate,
  createCustomerReviewTemplate,
} from '../templates/template-creator';
import PostReview from '../../utils/post-review';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import '../components/messageReview';
import '../components/messageReviewEror';
import '../components/loading';
import '../components/loadingFailed';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <loading-bar></loading-bar>
    <loading-failed></loading-failed>
      <div id="detail">
        <div id="detail-restaurant" class="detail-restaurant"></div>
      </div>
          <div class="wrapModal">
          <div id="customerReviewContainer"></div>
          <message-review></message-review>
          <message-error></message-error>
          </div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#detail-restaurant');
    const formReviewContainer = document.querySelector('#customerReviewContainer');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const food = document.querySelector('.menu-food');
    restaurant.menus.foods.forEach((menu) => {
      food.innerHTML += createRestoMenuFoodTemplate(menu);
    });

    const drink = document.querySelector('.menu-drink');
    restaurant.menus.drinks.forEach((menu) => {
      drink.innerHTML += createRestoMenuDrinkTemplate(menu);
    });

    const review = document.querySelector('.container-review');
    restaurant.customerReviews.forEach((customerReview) => {
      review.innerHTML += createCustomerReviewTemplate(customerReview);
    });

    formReviewContainer.innerHTML = createRestaurantFormReviewTemplate();
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        description: restaurant.description,
      },
    });

    const btnSubmit = document.querySelector('#reviewForm');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');
    btnSubmit.addEventListener('submit', (e) => {
      e.preventDefault();
      PostReview(url, nameInput.value, reviewInput.value);
      nameInput.value = '';
      reviewInput.value = '';
    });
  },
};

export default Detail;
