// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

const SITE_NAME = 'LuminUs';

const Navbar = () => {
  renderNavbar();
};

function renderNavbar() {

  const navbar = document.querySelector('#navbarWrapper');

  navbar.innerHTML =  `
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">${SITE_NAME}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
`;
}

export default Navbar;
