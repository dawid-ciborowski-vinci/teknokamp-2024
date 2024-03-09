// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

const SITE_NAME = 'LuminUs';

const Navbar = () => {
  renderNavbar();
};

function renderNavbar() {
  const navbar = document.querySelector('#navbarWrapper');

  navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
      <a class="navbar-brand mx-3" href="#">${SITE_NAME}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-between mx-3" id="navbarsExample09">
        <ul class="navbar-nav">
        </ul>
        <button class="btn btn-success my-2 my-sm-0" type="button">Profil</button>
      </div>
    </nav>
  `;
}

export default Navbar;
