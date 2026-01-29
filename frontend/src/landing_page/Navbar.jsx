import { NavLink } from "react-router-dom";

function Navbar() {
return (
<nav className="navbar fixed-top bg-white navbar-expand-lg bg-body-tertiaryv p-3 border-bottom">
    <div className="container px-5">
        <NavLink class="navbar-brand" to="/">
            <img src="images/logo.svg" alt="logo" width="150" height="18" />
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0 navbar-links">

                <li className="nav-item mx-3">
                    <NavLink  className="nav-link" to="/signup">Signup/Login</NavLink >
                </li>

                <li className="nav-item mx-3">
                    <NavLink  className="nav-link" to="/about">About</NavLink >
                </li>

                <li className="nav-item mx-3">
                    <NavLink  className="nav-link" to="/products">Products</NavLink >
                </li>

                <li className="nav-item mx-3">
                    <NavLink  className="nav-link" to="/pricing">Pricing</NavLink >
                </li>

                <li className="nav-item mx-3">
                    <NavLink  className="nav-link" to="/support">Support</NavLink >
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link d-none d-lg-block" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <a href=""><i class="fa-solid fa-bars text-black"></i></a>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Trading Platform</a></li>
                        <li><a class="dropdown-item" href="#">Backoffice</a></li>
                        <li><a class="dropdown-item" href="#">Trading APIs</a></li>
                        <li><a class="dropdown-item" href="#">Mutual funds</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Calculators</a></li>
                        <li><a class="dropdown-item" href="#">Brokerage Calculators</a></li>
                        <li><a class="dropdown-item" href="#">Margin Calculators</a></li>
                        <li><a class="dropdown-item" href="#">SIP Calculators</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Z-connect blog</a></li>
                        <li><a class="dropdown-item" href="#">Bulletin</a></li>
                        <li><a class="dropdown-item" href="#">IPOs</a></li>
                        <li><a class="dropdown-item" href="#">Markets</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
);
}

export default Navbar;