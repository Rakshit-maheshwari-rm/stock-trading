import { useEffect, useState } from 'react';
import './style.css';
import {Tooltip} from '@mui/material';
import axios from 'axios';

function Sidebar() {
  const [watchlist,setWatchlist] = useState([]);
  const [hover,setHover] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState("");
  const [searchTerm,setSearchTerm] = useState("");
  const [searchTermA,setSearchTermA] = useState("");

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/watchlist/all`,{
      params: {
        names: ["NIFTY 50", "SENSEX"]
      }
    }).then((res)=>{
      setWatchlist(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[]);

  useEffect(() => {
    const handler = () => {
      const offcanvasEl = document.getElementById('marketwatchOffcanvas');
      if (offcanvasEl && window.bootstrap) {
        const offcanvas = new window.bootstrap.Offcanvas(offcanvasEl);
        offcanvas.show();
      }
    };
    document.addEventListener('openMarketWatch', handler);
    return () => document.removeEventListener('openMarketWatch', handler);
  }, []);

  const openBuyModal = (item) => {
    setSelectedItem(item);
    setQty(1);
    setPrice("");
    const modal = new window.bootstrap.Modal(document.getElementById("buyModel"));
    modal.show();
  };

  const openSellModal = (item) => {
    setSelectedItem(item);
    setQty(1);
    setPrice("");
    const modal = new window.bootstrap.Modal(document.getElementById("sellModel"));
    modal.show();
  };

  const handleBuy = () =>{
    handleOrder("BUY");
  }

  const handleSell = () =>{
    handleOrder("SELL");
  }

  const handleOrder = async (orderType) => {
    const orderData = {
      name: selectedItem.name,
      qty: qty,
      price: price,
      mode: orderType,
    };

    await axios.post(`${import.meta.env.VITE_API_URL}/orders/place-order`,orderData);

    const modalEl = document.getElementById(orderType === "BUY" ? "buyModel" : "sellModel");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    document.getElementById('toast-head').innerText = `Order Status - ${orderType}`;
    document.getElementById('toastMessage').innerText= `Order Successful - ${selectedItem.name}, Qty - ${qty}, Price - ${price}`;
    const toastEl = document.getElementById("orderToast");
    const toast = new window.bootstrap.Toast(toastEl);
    toast.show();
  };

  return (
    <>
      <div className="sidebar vh-100 ms-xxl-5 shadow-sm d-none d-lg-block">
        <div className="d-flex align-items-center gap-2 px-2 py-1 opacity-50 border-bottom">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" className="form-control border-0 shadow-none"
            placeholder="Search (infy bse, nifty fut, etc)" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
          <span>{watchlist.length}/50</span>
        </div>

        <div className="container text-14">
          <ul className="list-unstyled text-13">
            <ul className="list-unstyled text-13">
            {watchlist.map((watchlist, index) => {
              const matchesSearch = watchlist.name.toLowerCase().includes(searchTerm.toLowerCase());
              return(
            <li key={index} className={`${!matchesSearch?"blurred-row":""} row py-2 align-items-center position-relative`} onMouseEnter={()=> setHover(index)}
                onMouseLeave={() => setHover(null)}>
                <div className={`${watchlist.isDown?"profit":"loss"} col-5`}>{watchlist.name}</div>
                <div className="col-2 px-0 text-end opacity-50">{watchlist.change}</div>
                <div className="col-2 px-0 text-end opacity-75">{watchlist.percent}</div>
                <div className={`${watchlist.isDown?"profit":"loss"} col-1 px-0 text-end`}>
                    <i className={watchlist.isDown ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up" }></i>
                </div>
                <div className={`${watchlist.isDown?"profit":"loss"} col-2 text-end`}>{watchlist.price}</div>
                {hover === index &&
                <WatchlistActions item={watchlist} onBuy={openBuyModal} onSell={openSellModal} />}
            </li>
            )
          })}
        </ul>
          </ul>
        </div>
      </div>

      <div className="offcanvas offcanvas-start offcanvas-fullscreen" tabIndex="-1" id="marketwatchOffcanvas" aria-labelledby="marketwatchLabel">
        <div className="offcanvas-header">
          <h5 id="marketwatchLabel">MarketWatch</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-flex align-items-center gap-2 px-2 py-1 opacity-50 border-bottom">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" className="form-control border-0 shadow-none"
              placeholder="Search (infy bse, nifty fut, etc)" value={searchTermA} onChange={(e)=>{setSearchTermA(e.target.value)}}/>
            <span>{watchlist.length}/50</span>
          </div>

          <div className="container text-14">
            <ul className="list-unstyled text-13">
              {watchlist.map((wl, index) => {
                const matchesSearch = wl.name.toLowerCase().includes(searchTermA.toLowerCase());
                return(
                <li key={index} className={`${!matchesSearch?"blurred-row":""} row py-2 align-items-center position-relative`} onMouseEnter={()=> setHover(index)}
                  onMouseLeave={() => setHover(null)}>
                  <div className={`${wl.isDown?"profit":"loss"} col-5`}>{wl.name}</div>
                  <div className="col-2 px-0 text-end opacity-50">{wl.change}</div>
                  <div className="col-2 px-0 text-end opacity-75">{wl.percent}</div>
                  <div className={`${wl.isDown?"profit":"loss"} col-1 px-0 text-end`}>
                    <i className={wl.isDown ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up" }></i>
                  </div>
                  <div className={`${wl.isDown?"profit":"loss"} col-2 text-end`}>{wl.price}</div>
                  {hover === index &&
                    <WatchlistActions item={wl} onBuy={openBuyModal} onSell={openSellModal} />}
                </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="position-fixed bottom-0 end-0 p-3 my-toast">
        <div id="orderToast" className="toast hide" data-bs-delay="10000" role="alert" aria-live="assertive"
          aria-atomic="true">
          <div className="toast-header bg-primary text-white">
            <strong className="me-auto" id='toast-head'>Order Status</strong>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body bg-light" id="toastMessage">
            Order Successfully Placed!
          </div>
        </div>
      </div>

      <div className="modal fade" id="buyModel" tabIndex="-1" aria-labelledby="buyModel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h1 className="modal-title text-14" id="buyModel"> {selectedItem?.name}</h1>
            </div>
            <div className="modal-body">
              <form action="">
                <div>
                  <label htmlFor="qty" className='form-label mb-1'>Qty.</label>
                  <input type="number" name="qty" id="qty" value={qty} className='form-control'
                    onChange={(e)=>setQty(e.target.value)} />
                </div>
                <div className='mt-2'>
                  <label htmlFor="price" className='form-label mb-1'>Price</label>
                  <input type="number" name="price" id="price" value={price}
                    className='form-control' onChange={(e)=>setPrice(e.target.value)} />
                </div>
                <div className="modal-footer p-0">
                  <div className='text-12 d-flex pt-1 gap-3'>
                    <p className='mb-0'>Margin N/A</p>
                    <p className='mb-0'>Charges N/A</p>
                  </div>
                  <div className='w-100 text-end'>
                    <input type="checkbox" name="intraday" id="intraday" className='form-check-input' />
                    <label htmlFor="intraday" className='form-check-label ms-1'>Intraday</label>
                  </div>
                  <button type="button" className="btn btn-primary w-100" onClick={handleBuy}>Buy</button>
                  <button type="button" className="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="sellModel" tabIndex="-1" aria-labelledby="sellModel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header bg-warning text-white">
              <h1 className="modal-title text-14" id="sellModel"> {selectedItem?.name}</h1>
            </div>
            <div className="modal-body">
              <form action="">
                <div>
                  <label htmlFor="qty" className='form-label mb-1'>Qty.</label>
                  <input type="number" name="qty" id="qty" className='form-control'
                    value={qty} onChange={(e)=>{setQty(e.target.value)}}/>
                </div>
                <div className='mt-2'>
                  <label htmlFor="price" className='form-label mb-1'>Price</label>
                  <input type="number" name="price" id="price" className='form-control'
                    value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                </div>
                <div className="modal-footer p-0">
                  <div className='text-12 d-flex pt-1 gap-3'>
                    <p className='mb-0'>Margin N/A</p>
                    <p className='mb-0'>Charges N/A</p>
                  </div>
                  <div className='w-100 text-end'>
                    <input type="checkbox" name="intraday" id="intraday" className='form-check-input' />
                    <label htmlFor="intraday" className='form-check-label ms-1'>Intraday</label>
                  </div>
                  <button type="button" className="btn btn-warning text-white w-100" onClick={handleSell}>Sell</button>
                  <button type="button" className="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

const WatchlistActions = ({ item, onBuy,onSell }) => {
  return (
    <div className="d-flex justify-content-end gap-1 position-absolute">

      <Tooltip title="Buy" placement="top-end">
        <button variant="outlined" className='action-btn buy-btn' onClick={()=> onBuy(item)}>B</button>
      </Tooltip>

      <Tooltip title="Sell" placement="top-end">
        <button variant="outlined" className='action-btn sell-btn' onClick={()=> onSell(item)}>S</button>
      </Tooltip>

      <Tooltip title="Market Depth (D)" placement="top-end">
        <button variant="outlined" className='action-btn blur-btn'>
          <i className="fa-solid fa-bars"></i>
        </button>
      </Tooltip>

      <Tooltip title="Chart (C)" placement="top-end">
        <button variant="outlined" className='action-btn blur-btn'>
          <i className="fa-solid fa-chart-line"></i>
        </button>
      </Tooltip>

      <Tooltip title="Delete" placement="top-end">
        <button variant="outlined" className='action-btn blur-btn'>
          <i className="fa-solid fa-trash"></i>
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top-end">
        <button variant="outlined" className='action-btn blur-btn'>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </Tooltip>

    </div>
  );
};