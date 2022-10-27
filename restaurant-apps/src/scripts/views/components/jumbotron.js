class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="jumbotron-container">
            <div  class="jumbotron-content">
            <picture>
            <source  media ="(max-width:600px)" srcset="./heros/hero-image_2-mobile.jpg">
            <img  class="jumbotron-image" src="./heros/hero-image_2-dekstop.jpg" alt="banner-jumbotron">  
            </picture>  
            <h2>  Welcome to the <span>Restaurant Apps</span> you can search for the restaurant you want here<h2>
            </div>
        </div>`;
  }
}
customElements.define('jumbotron-banner', Jumbotron);
