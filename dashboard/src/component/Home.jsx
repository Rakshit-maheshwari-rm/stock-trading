import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Orders from "./Orders/Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Bids from "./Bids";
import Funds from "./Funds";
import Dashboard from "./Dashboard";
import Error from "./Error";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import ProfileEdit from "./Profile-edit";

function Home() {
  
  return (
    <>
      <Navbar />
      <div className="main-layout d-flex">
        <Sidebar />
        <div className="main-content shadow-sm me-xxl-5 mt-5 p-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders/*" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/bids" element={<Bids />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/edit-profile" element={<ProfileEdit/>}/>
            <Route path="/logout" element={<ProfileEdit/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        </div>
    </>
  );
}

export default Home;
