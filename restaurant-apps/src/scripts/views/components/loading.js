class Loading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<div id="loading"></div>';
  }
}
customElements.define('loading-bar', Loading);
