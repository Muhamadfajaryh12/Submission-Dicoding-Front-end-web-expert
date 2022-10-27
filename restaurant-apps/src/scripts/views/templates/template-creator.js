import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const truncateString = (str, num) => {
  if (str?.length > num) {
    return `${str.slice(0, num)}...`;
  }

  return str;
};
const Categori = (categori) => {
  let items = '';
  categori.forEach((item) => {
    items += `<p># ${item.name}</p>`;
  });
  return items;
};
const createRestaurantItemTemplate = (restaurant) => `
  <div class="card">
    <div class="card-header">
      <img id="image" class="lazyload" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
    </div>
    <div class="card-body">
      <a class="title" href="/#/detail/${restaurant.id}">${restaurant.name}</a>
          <div class="information">
            <h5>${restaurant.city} | ${restaurant.rating} ⭐️</h5>
          </div>
        <p class="deskripsi">${truncateString(restaurant?.description, 300)}</p>
    </div>
  </div>
  `;
const createSkeletonRestaurantItemTemplate = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="card">
      <div class="card-header">
        <img id="image" alt="skeleton" src="./images/placeholder.png">
      </div>
      <div class="card-body">
        <div class="skeleton">Lorem ipsum dolor sit.</div>
        <h5 class="skeleton">Lorem ipsum dolor sit.</h5>
        <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
      </div>
    </div>
    `;
  }
  return template;
};

const createRestaurantDetailTemplate = (restaurant) => `

  <h2 tabindex="0" class="detail-title">${restaurant.name}</h2>
  <img class="detail-poster" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div tabindex="0" class="detail-info">
    <h3>Restaurant Information</h3>
      <h4>Restaurant Name</h4>
      <p>${restaurant.name}</p>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating} ⭐️</p>
      <h4>Categori</h4>
      <div class="categori">
          ${Categori(restaurant.categories)}
      </div>
  </div>
  <div class="detail-deskripsi">
    <h3  tabindex="0">Description</h3>
    <p  tabindex="0">${restaurant.description}</p>
  </div>
  <div class="detail-menu">
    <h3 tabindex="0">Menu</h3>
    <div class="container-menu">
      <div class="container-food">
        <h4 tabindex="0"> Foods </h4>
        <ol tabindex="0" class="menu-food"></ol>
      </div>
      <div class="container-drink">
      <h4 tabindex="0"> Drinks </h4> 
      <ol tabindex="0" class="menu-drink"></ol>
      </div>
    </div>
  </div>
  <div class="detail-review">
    <h3 tabindex ="0"> Customer Review </h3>
    <div class="container-review"></div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createCustomerReviewTemplate = (customerReview) => `
  <div class="customer-review-item" tabindex="0" aria-label="${customerReview.name} memberikan review pada ${customerReview.date}. Dan pesan reviewnya adalah ${customerReview.review}.">
    <div class="reviewer">
    <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i><span>${customerReview.name}</span>  - <i>${customerReview.date}</i>
    </div>
    <p class="text-review">${customerReview.review}</p>
    </div>
`;
const createRestaurantFormReviewTemplate = () => `
  <h3 tabindex="0">Add Review</h3>
  <form id="reviewForm">
    <div class="input-group">
      <label for="inputName">Name</label>
      <input type="text" id="inputName" required placeholder="Enter your name">
    </div>
    <div class="input-group">
      <label for="inputReview">Your review</label>
      <textarea id="inputReview" required placeholder="Enter the review you gave"></textarea>
    </div>
    <div class="button-center">
    <button type="submit" id="postReviewButton">Submit</button>
    </div>
  </form>
`;
const createRestoMenuDrinkTemplate = (foodz) => `
    <li class="item-drink">${foodz.name}</li>
`;
const createRestoMenuFoodTemplate = (foodz) => `
    <li class="item-food">${foodz.name}</li>
`;
const createEmptyFavoriteRestaurantTemplate = () => `
  <h4>Tidak ada Restaurant untuk ditampilkan<h4>`;
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createCustomerReviewTemplate,
  createRestaurantFormReviewTemplate,
  createRestoMenuDrinkTemplate,
  createRestoMenuFoodTemplate,
  createEmptyFavoriteRestaurantTemplate,
  createSkeletonRestaurantItemTemplate,
};
