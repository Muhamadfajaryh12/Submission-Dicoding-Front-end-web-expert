class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="app-bar">
        <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
            <h1>RestoApps</h1>
            <picture>
            <source media ="(max-width:600px)" srcset="./logo/logo-mobile.png">
            <img src="./logo/logo-dekstop.png" alt="Logo">
            </picture>  
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="#/restaurant">Restaurant</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://github.com/Muhamadfajaryh12?tab=repositories">About</a></li>
            </ul>
        </nav>
    </div>`;
  }
}
customElements.define('nav-bar', Navbar);
