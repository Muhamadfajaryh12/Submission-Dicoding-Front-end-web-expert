import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurantList() {
    const loadFailed = document.getElementById('loading-failed');
    const displayLoadingFailed = () => {
      loadFailed.classList.add('display');
    };
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
      const responseJson = await response.json();
      console.log(responseJson.restaurants);
      return responseJson.restaurants;
    } catch (error) {
      return displayLoadingFailed();
    }
  }

  static async getRestaurantDetail(id) {
    const loadFailed = document.getElementById('loading-failed');
    const displayLoadingFailed = () => {
      loadFailed.classList.add('display');
    };
    const loader = document.querySelector('#loading');
    const displayLoading = () => {
      loader.classList.add('display');
      setTimeout(() => {
        loader.classList.remove('display');
      }, 5000);
    };
    const hideLoading = () => {
      loader.classList.remove('display');
    };
    try {
      displayLoading();
      const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
      const responseJson = await response.json();
      console.log(responseJson);
      hideLoading();
      return responseJson.restaurant;
    } catch (error) {
      return displayLoadingFailed();
    }
  }

  static async PostReview(dataInput) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataInput),
      });
      return response.json();
    } catch (error) {
      return { error: true };
    }
  }
}

export default RestaurantSource;
