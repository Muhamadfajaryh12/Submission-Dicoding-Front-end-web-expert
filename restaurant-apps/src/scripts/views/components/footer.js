class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>Copyright 2022</p>
    `;
  }
}
customElements.define('footer-container', Footer);
