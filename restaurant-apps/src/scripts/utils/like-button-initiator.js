import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../views/templates/template-creator';

const message = document.querySelector('#message-container');
const messageText = document.getElementById('condition');

const displayAdd = () => {
  message.classList.add('display');
  messageText.classList.add('success');
  messageText.innerHTML = 'successfuly added';
  setTimeout(() => {
    message.classList.remove('display');
    messageText.classList.remove('success');
  }, 1000);
};

const displayRemove = () => {
  message.classList.add('display');
  messageText.classList.add('remove');
  messageText.innerHTML = 'successfully remove';
  setTimeout(() => {
    message.classList.remove('display');
    messageText.classList.remove('remove');
  }, 1000);
};
const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      displayAdd();
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      displayRemove();
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
