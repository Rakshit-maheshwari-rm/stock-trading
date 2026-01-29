import { Routes, Route, NavLink  } from 'react-router-dom';
import '../style.css';
import OpenOrders from './OpenOrders';
import Gtt from './Gtt';
import Baskets from './Baskets';
import SIP from './SIP';
import Alerts from './Alerts';

function Orders(){
return(
    <>
    <nav className="navbar navbar-expand border-bottom">
    <div className="container-fluid">
        <div className="collapse navbar-collapse order-custom" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto text-12 gap-3">
                <li className="nav-item">
                    <NavLink className="nav-link anchor" to="/orders" end>Orders</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link anchor" to="/orders/gtt">GTT</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link anchor" to="/orders/baskets">Baskets</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link anchor" to="/orders/sip">SIP</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link anchor" to="/orders/alerts">Alerts</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>

<Routes>
    <Route index element={<OpenOrders />} />
    <Route path="gtt" element={<Gtt />} /> 
    <Route path="baskets" element={<Baskets />} />
    <Route path="sip" element={<SIP />} />
    <Route path="alerts" element={<Alerts />} />
</Routes>
</>
)
}

export default Orders;