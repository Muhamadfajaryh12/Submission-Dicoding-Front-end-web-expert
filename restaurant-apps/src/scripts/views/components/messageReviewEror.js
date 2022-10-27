class MessageReviewEror extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div id="message-eror">
    <i class="fa fa-times-circle-o" aria-hidden="true"></i>
    <h4> review failed to submit, please check your connection </h4>
    <button id="failed-btn">Close</button>
    </div>`;
    const message = document.getElementById('message-eror');
    const btn = document.getElementById('failed-btn');
    btn.addEventListener('click', () => {
      message.classList.remove('display');
    });
  }
}
customElements.define('message-error', MessageReviewEror);
