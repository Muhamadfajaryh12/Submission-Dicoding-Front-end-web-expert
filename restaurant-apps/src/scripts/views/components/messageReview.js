class MessageReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div tabindex="0" id="container-message-review">
    <i class="fa fa-check-circle-o fa-2x" aria-hidden="true"></i>
    <h4> Review successfully submitted </h4>
    <button id="close-button">Close</button>
    </div>`;

    const btn = document.getElementById('close-button');
    const message = document.getElementById('container-message-review');
    btn.addEventListener('click', () => {
      console.log(message);
      message.classList.remove('display');
    });
  }
}
customElements.define('message-review', MessageReview);
