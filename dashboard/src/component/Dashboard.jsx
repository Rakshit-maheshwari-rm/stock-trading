import { useEffect, useState } from "react";
import { calculateTotals,formatCompactNumber } from "./utils";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Dashboard() {
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

  const [holdings,setHoldings] = useState([]);
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/holdings/all`).then((res)=>{
      setHoldings(res.data)
    }).catch((e)=>console.log(e));
  },[]);

  const totals = calculateTotals(holdings);
  const {weightedNetPercent} = totals;
  return (
    <div className="container">
      <div className="row">
        <p className="border-bottom fs-4 py-3">Hi, {user?.username}</p>
        <div className="col-12 col-lg-6 py-3">
          <p className="fs-6"><i className="fa-solid fa-cruzeiro-sign me-2"></i>Equity</p>
          <div className="row mt-4">
            <div className="col-6 border-end">
              <p className="fs-1 mb-0 fw-lighter">1L</p>
              <p className="text-muted">Margin available</p>
            </div>
            <div className="col-6 ps-4">
              <p className="text-muted text-12">Margins used <span className="ms-2 fw-bold">0</span></p>
              <p className="text-muted text-12">Opening balance <span className="fw-bold">1L</span></p>
              <a href="#" className="text-decoration-none text-12">
                <i className="fa-solid fa-circle-notch me-1"></i>View Statement
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 py-3">
          <p className="fs-6"><i className="fa-solid fa-droplet me-2"></i>Commodity</p>
          <div className="row mt-4">
            <div className="col-6 border-end">
              <p className="fs-1 mb-0 fw-lighter">50k</p>
              <p className="text-muted">Margin available</p>
            </div>
            <div className="col-6 ps-4">
              <p className="text-muted text-12">Margins used <span className="ms-2 fw-bold">0</span></p>
              <p className="text-muted text-12">Opening balance <span className="fw-bold">50k</span></p>
              <a href="#" className="text-decoration-none text-12">
                <i className="fa-solid fa-circle-notch me-1"></i>View Statement
              </a>
            </div>
          </div>
        </div>

        <div className="row border-top mt-4">
          <div className="col-lg-7 col-12 pt-3">
            <p className="fs-6"><i className="fa-solid fa-suitcase me-2"></i>Holdings</p>
            <div className="row">
              <div className="col-6 border-end">
                <h1 className="fw-normal pt-2 text-success">
                  {formatCompactNumber(totals.totalProfit)}
                  <span className="fs-6 ms-2">{weightedNetPercent>0?"+":""}{weightedNetPercent.toFixed(2)}%</span>
                </h1>
                <p className="text-muted">P&amp;L</p>
              </div>
              <div className="col-6 text-center">
                <p className="text-muted">Current value <span className="fw-medium ms-2">{formatCompactNumber(totals.totalCurrentValue)}</span></p>
                <p className="text-muted">Investment <span className="fw-medium ms-4">{formatCompactNumber(totals.totalInvestment)}</span></p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12 text-center pt-3">
            <a href="#">
              <img 
                src="images/invite-friends.png" 
                alt="invite_friends_img" 
                className="img-fluid w-50 mt-3" 
              />
            </a>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Dashboard;