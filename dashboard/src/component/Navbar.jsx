import './style.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";

function Navbar(){
const navigate = useNavigate();
const [user, setUser] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  const FRONT_URL = import.meta.env.VITE_FRONT_URL;

  useEffect(() => {
    axios.get(`${API_URL}/check`, { withCredentials: true })
      .then(res => {
        if (res.data.loggedIn) setUser(res.data.user);
        else window.location.href = `${FRONT_URL}/login`;
      })
      .catch(() => window.location.href = `${FRONT_URL}/login`);
  }, []);
const handleLogout = async () => {
try {
await axios.post(
`${import.meta.env.VITE_API_URL}/logout`,
{},
{ withCredentials: true }
);
window.location.href = `${import.meta.env.VITE_FRONT_URL}/login`;
} catch (error) {
console.error("Logout failed:", error);
}
};

const openMarketWatch = () => {
document.dispatchEvent(new CustomEvent('openMarketWatch'));

const navbar = document.getElementById("navbarSupportedContent");
if (navbar?.classList.contains("show")) {
const bsCollapse = new window.bootstrap.Collapse(navbar);
bsCollapse.hide();
}
};

const location = useLocation();

const routeMap = {
"/": "Dashboard",
"/orders": "Orders",
"/holdings": "Holdings",
"/positions": "Positions",
"/bids": "Bids",
"/funds": "Funds",
"/profile": "Profile",
"/edit-profile": "Edit Profile",
};

const currentPage = routeMap[location.pathname] || "Dashboard";

return (
<nav className="navbar navbar-expand-lg fixed-top bg-body shadow-sm border-bottom">
    <div className="container">
        <div className="d-none d-lg-flex w-100 align-items-center">
            <img src="images/kite-logo.svg" alt="kite_logo" className="img-fluid kite_logo" />

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse navbar-custom" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-12 gap-3 align-items-center center-item">
                    <li className="nav-item">
                        <NavLink className="nav-link anchor" to="/">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link anchor" to="/orders">Orders</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link anchor" to="/holdings">Holdings</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link anchor" to="/positions">Positions</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link anchor" to="/bids">Bids</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link anchor" to="/funds">Funds</NavLink>
                    </li>
                    <li className="nav-item show-marketwatch">
                        <button className="nav-link anchor btn btn-link p-0" onClick={openMarketWatch}
                            aria-label="Open MarketWatch" type="button">
                            MarketWatch
                        </button>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa-solid fa-bell"></i></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {user?.username}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end text-12">
                            <li className="dropdown-header small">
                                <strong>{user?.username}</strong><br />
                                <span className="text-muted">{user?.email}</span>
                            </li>
                            <li><a className="dropdown-item" href="/profile"><i className="fa-solid fa-user me-1"></i>My
                                    profile /
                                    Settings</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#"><i
                                        className="fa-regular fa-circle-dot me-1"></i>Console</a></li>
                            <li><a className="dropdown-item" href="#"><i
                                        className="fa-solid fa-coins me-1"></i>Coin</a>
                            </li>
                            <li><a className="dropdown-item" href="#"><i
                                        className="fa-solid fa-headset me-1"></i>Support</a>
                            </li>
                            <li><a className="dropdown-item" href="#"><i
                                        className="fa-solid fa-user-plus me-1"></i>Invite
                                    friends</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#"><i
                                        className="fa-regular fa-compass me-1"></i>Tour
                                    Kite</a></li>
                            <li><a className="dropdown-item" href="#"><i
                                        className="fa-solid fa-keyboard me-1"></i>Keyboard
                                    shortcuts</a></li>
                            <li><a className="dropdown-item" href="#"><i
                                        className="fa-solid fa-book-bookmark me-1"></i>User
                                    manual</a></li>
                            <li><a className="dropdown-item" href="#" onClick={handleLogout}><i
                                        className="fa-solid fa-arrow-right-from-bracket me-1"></i>Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div className="d-none d-md-flex d-lg-none w-100 align-items-center justify-content-between">

            <img src="images/kite-logo.svg" alt="kite_logo" className="img-fluid kite_logo" />
            <ul className="navbar-nav flex-row gap-3">
                <NavLink className="nav-link" to={location.pathname}>
                    {currentPage}
                </NavLink>
            </ul>

            <div className="d-flex gap-3 align-items-center">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {user?.username}
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end text-12">
                        <li className="dropdown-item show-marketwatch">
                            <button className="nav-link anchor btn btn-link p-0" onClick={openMarketWatch}
                                aria-label="Open MarketWatch" type="button">
                                <i className="fa-regular fa-bookmark me-1"></i>MarketWatch
                            </button>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/"><i
                                    className="fa-regular fa-compass me-1"></i>Dashboard</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/orders"><i
                                    className="fa-solid fa-book me-1"></i>Orders</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/holdings"><i
                                    className="fa-solid fa-suitcase me-1"></i>Holdings</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/positions"><i
                                    className="fa-regular fa-file-lines me-1"></i>Positions</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/bids"><i
                                    className="fa-regular fa-clock me-1"></i>Bids</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/funds"><i
                                    className="fa-regular fa-file-lines me-1"></i>Funds</NavLink>
                        </li>
                        <li><a className="dropdown-item" href="/profile"><i className="fa-solid fa-user me-1"></i>My
                                profile /
                                Settings</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleLogout}><i
                                    className="fa-solid fa-arrow-right-from-bracket me-1"></i>Logout</a></li>
                    </ul>
            </div>
        </div>
    <div className="d-flex d-md-none w-100 align-items-center justify-content-between">
            <img src="images/kite-logo.svg" alt="kite_logo" className="img-fluid kite_logo" />
            <ul className="navbar-nav flex-row gap-3">
                <NavLink className="nav-link" to={location.pathname}>
                    {currentPage}
                </NavLink>
            </ul>
            <div className="dropdown">
                <i className="fa-solid fa-user fs-5" data-bs-toggle="dropdown" role="button"></i>
<ul className="dropdown-menu dropdown-menu-end text-12">
                        <li className="dropdown-item show-marketwatch">
                            <button className="nav-link anchor btn btn-link p-0" onClick={openMarketWatch}
                                aria-label="Open MarketWatch" type="button">
                                <i className="fa-regular fa-bookmark me-1"></i>MarketWatch
                            </button>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/"><i
                                    className="fa-regular fa-compass me-1"></i>Dashboard</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/orders"><i
                                    className="fa-solid fa-book me-1"></i>Orders</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/holdings"><i
                                    className="fa-solid fa-suitcase me-1"></i>Holdings</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/positions"><i
                                    className="fa-regular fa-file-lines me-1"></i>Positions</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/bids"><i
                                    className="fa-regular fa-clock me-1"></i>Bids</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link anchor" to="/funds"><i
                                    className="fa-regular fa-file-lines me-1"></i>Funds</NavLink>
                        </li>
                        <li><a className="dropdown-item" href="/profile"><i className="fa-solid fa-user me-1"></i>My
                                profile /
                                Settings</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleLogout}><i
                                    className="fa-solid fa-arrow-right-from-bracket me-1"></i>Logout</a></li>
                    </ul>
            </div>
    </div>
    </div>
</nav>
);
}

export default Navbar;
