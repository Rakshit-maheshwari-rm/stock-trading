import { useEffect, useState } from "react";
import axios from "axios";

function Profile(){
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
return(
<div className="container">
    <div className="row mt-4">
        <div className="d-flex text-center">
            <p className="fs-5 mb-0">Profile</p>
            <div className="d-flex ms-auto gap-3">
                <a href="#" className="text-decoration-none text-12">Apps</a>
                <a href="/edit-profile" className="text-decoration-none text-12">Password & Security</a>
            </div>
        </div>
        <div className="border-top d-flex gap-5 mt-2 pt-4 align-items-center">
            <img src="images/demo_profile.png" alt="profile_img" className="img-fluid rounded-circle profile-img" />
            <p className="fs-4">{user?.username}</p>
        </div>
        <a href="#" className="text-decoration-none text-12 mt-2">Change photo</a>
        <div className="mt-2 pt-2">
            <div className="row">
                <div className="col-12 col-md-7 text-14">
                    <div className="d-flex align-items-center">
                        <p className="fs-5 mb-2">Account</p>
                        <a href="#" className="text-12 text-decoration-none ms-auto">
                            <i className="fa-solid fa-eye me-1"></i>Manage
                        </a>
                    </div>
                    <div className="row mb-3 border-top pt-3">
                        <div className="col-5 opacity-50">Support code</div>
                        <div className="col-7">
                            <a href="#" className="text-12 text-decoration-none">
                                <i className="fa-solid fa-eye me-1"></i>View
                            </a>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-5 opacity-50">E-mail</div>
                        <div className="col-7">demo@zerodha.com</div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-5 opacity-50">PAN</div>
                        <div className="col-7">*123C</div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-5 opacity-50">Phone</div>
                        <div className="col-7">*1234</div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-5 opacity-50">Demat (BO)</div>
                        <div className="col-7">
                            <a href="#" className="text-decoration-none">1200000000011111</a>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-5 opacity-50">Segments</div>
                        <div className="col-7">
                            <a href="#" className="text-decoration-none">NFO, MF, CDS, MCX, BSE, NSE</a>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-5 opacity-50">Demat authorisation</div>
                        <div className="col-7">
                            <a href="#" className="text-decoration-none">POA</a>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-md-5">
                    <div className="d-flex align-items-center">
                        <p className="fs-5 mb-2">Bank accounts</p>
                        <a href="#" className="text-12 text-decoration-none ms-auto">
                            <i className="fa-solid fa-eye me-1"></i>Manage
                        </a>
                    </div>
                    <p className="mb-0 text-14 border-top pt-3">
                        *1234 <span className="text-12 opacity-75">ICICI BANK</span>
                    </p>
                </div>
            </div>
        </div>
        <div className="mt-2 pt-2">
            <div className="row">
                <div className="col-12 col-md-7 text-14">
                    <p className="fs-5 mb-2">Settings</p>
                    <div className="row mb-4 border-top pt-3">
                        <div className="col-5">Chart</div>
                        <div className="col-7 d-flex flex-column gap-2">
                            <div> <input type="radio" id="chartIQ" name="chart" />
                                <label htmlFor="chartIQ" className="ms-2">ChartIQ</label>
                            </div>
                            <div> <input type="radio" id="tradingView1" name="chart" />
                                <label htmlFor="tradingView1" className="ms-2">TradingView v1.0</label>
                            </div>
                            <div> <input type="radio" id="tradingView2" name="chart" />
                                <label htmlFor="tradingView2" className="ms-2">TradingView v2.0 <span
                                        className="text-12 btn btn-success px-2 py-0 ms-2">Beta</span></label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-5">Theme</div>
                        <div className="col-7 d-flex gap-3">
                            <div>
                                <input type="radio" id="default" name="theme" />
                                <label htmlFor="default" className="ms-2">Default</label>
                            </div>
                            <div>
                                <input type="radio" id="dark" name="theme" />
                                <label htmlFor="dark" className="ms-2">Dark</label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-5">
                            <label className="form-check-label mb-0" htmlFor="switchCheckChecked">
                                Instant order updates
                            </label>
                        </div>

                        <div className="col-7">
                            <div className="form-check form-switch m-0">
                                <input className="form-check-input" type="checkbox" role="switch"
                                    id="switchCheckChecked" defaultChecked />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-5">
                            <label className="form-check-label mb-0" htmlFor="switchCheckChecked">
                                Sticky order window
                            </label>
                        </div>

                        <div className="col-7">
                            <div className="form-check form-switch m-0">
                                <input className="form-check-input" type="checkbox" role="switch"
                                    id="switchCheckChecked" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="d-flex align-items-center">
                        <p className="fs-5 mb-2">Sessions</p>
                        <a href="#" className="text-12 text-decoration-none ms-auto">
                            Clear all
                        </a>
                    </div>
                    <p className="mb-0 text-14 border-top pt-3">
                        <li>Kite web</li>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Profile;