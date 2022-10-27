import '../components/loading';
import '../components/jumbotron';
import '../components/loadingFailed';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createSkeletonRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
    <jumbotron-banner></jumbotron-banner>
    <div id="container-restaurant">
    <h2 class ="content__heading">Restaurant</h2>
    <loading-failed></loading-failed>
    <div id="content-restaurant" class="content-restaurant">
    ${createSkeletonRestaurantItemTemplate(20)}
    </div>
    </div> 
      `;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurantList();
    const restaurantsContainer = document.querySelector('#content-restaurant');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurant;
