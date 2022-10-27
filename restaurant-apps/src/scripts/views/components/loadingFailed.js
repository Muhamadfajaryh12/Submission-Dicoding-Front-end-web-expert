class LoadingFailed extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div id="loading-failed">
    <h3>Please refresh this page, please check your connection</h3>
    </div>`;
  }
}
customElements.define('loading-failed', LoadingFailed);
