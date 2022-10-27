import RestaurantSource from '../data/restaurant-source';

const PostReview = async (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  const reviewContainer = document.querySelector('.container-review');
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const message = document.querySelector('#container-message-review');
  console.log(message);
  const display = () => {
    message.classList.add('display');
  };
  const messageEror = document.querySelector('#message-eror');
  console.log(messageEror);
  const displayEror = () => {
    messageEror.classList.add('display');
  };
  const date = new Date().toLocaleDateString('id-ID', options);
  const responseJSON = await RestaurantSource.PostReview(dataInput);
  console.log(responseJSON.error);
  if (await responseJSON.error === false) {
    display();
    reviewContainer.innerHTML += `
    <div class="customer-review-item" tabindex="0" aria-label="${name} memberikan review pada ${date}. Dan pesan reviewnya adalah ${review}.">
    <div class="reviewer">
    <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i><span>${name}</span>  - <i>${date}</i>
    </div>
    <p class="text-review">${review}</p>
    </div>`;
  } else {
    displayEror();
  }
};

export default PostReview;
