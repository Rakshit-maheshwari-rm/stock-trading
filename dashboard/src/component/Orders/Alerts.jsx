import { useEffect, useState } from "react";
import axios from "axios";

function Alerts() {

const [form, setForm] = useState({
  name: "",
  property: "",
  instrument: "",
  operator: "",
  value: "",
  compareProperty: "",
  compareInstrument: ""
});
const [alerts,setAlerts] = useState([]);
const [selectCount, setSelectCount] = useState(0);
const [alertType, setAlertType] = useState("value");
const [searchTerm,setSearchTerm] = useState("");

useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/alert/get`).then((res)=>{
        setAlerts(res.data);
    }).catch((err)=>
        {console.log(err)})
},[]);

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const createAlert = async() =>{
    await axios.post(`${import.meta.env.VITE_API_URL}/alert/create`,{
        name: form.name,
        property: form.property,
        instrument: form.instrument,
        operator: form.operator,
        alertType,
        value: form.value,
        compareProperty: form.compareProperty,
        compareInstrument: form.compareInstrument
    }); 
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/alert/get`);
    setAlerts(res.data);

    const modal = document.getElementById('newAlert');
    const bsModal = window.bootstrap.Modal.getInstance(modal);
    bsModal.hide();
}

const handleCheckboxChange = () => {
const checkboxes = document.querySelectorAll("#alertTable tbody input[type='checkbox']");
let count = 0;
checkboxes.forEach(cb => {
if (cb.checked) count++;
});
setSelectCount(count);
};

const handleSelectAll = (e) => {
const checked = e.target.checked;
const checkboxes = document.querySelectorAll("#alertTable tbody input[type='checkbox']");
checkboxes.forEach(cb => cb.checked = checked);
setSelectCount(checked ? checkboxes.length : 0);
};


return (
<div className="container">
    <div className="row py-3">
        <div className="col-12 d-none d-md-flex  mb-3">
            <p className="fs-5 mb-0">Alerts</p>
            <div className="d-flex ms-auto gap-3">
                <button className="btn btn-primary text-12" data-bs-toggle="modal" data-bs-target="#newAlert">Newalert</button>
                <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            </div>
        </div>
        <div className="col-12 d-md-none  mb-3">
            <p className="fs-5 mb-2">Alerts</p>
            <div className="d-flex ms-auto justify-content-between">
                <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                <button className="btn btn-primary text-12" data-bs-toggle="modal" data-bs-target="#newAlert">New
                    alert</button>
            </div>
        </div>
                <div className="modal fade" id="newAlert" tabIndex="-1" aria-labelledby="newAlert" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="newAlert">New alert</h1>
                            </div>
                            <div className="modal-body">
                                <input type="text" name="name" className="form-control"
                                    placeholder="Alert name" value={form.name} onChange={handleChange} />
                                <div className="row">
                                    <div className="col-6 mt-3">
                                        <label htmlFor="property" className="form-label mb-0">Property</label>
                                        <select name="property" id="property" className="form-control" value={form.property} onChange={handleChange}>
                                            <option value="LAST_TRADED_PRICE">Last Traded Price</option>
                                            <option value="HIGH_PRICE">High Price</option>
                                            <option value="LOW_PRICE">Low Price</option>
                                            <option value="OPEN_PRICE">Open Price</option>
                                            <option value="CLOSE_PRICE">Close Price</option>
                                            <option value="DAY_CHANGE">Day Change</option>
                                            <option value="DAY_CHANGE_PERCENT">Day Change Percent</option>
                                            <option value="INTRADAY_CHANGE">Intra Day Change</option>
                                            <option value="INTRADAY_CHANGE_PERCENT">Intra Day Change Percent</option>
                                            <option value="LAST_TRADED_QUANTITY">Last Traded Quantity</option>
                                            <option value="AVERAGE_TRADE_PRICE">Average Trade Price</option>
                                            <option value="VOLUME_TRADED">Volume Traded</option>
                                            <option value="TOTAL_BUY_QUANTITY">Total Buy Quantity</option>
                                            <option value="TOTAL_SELL_QUANTITY">Total Sell Quantity</option>
                                            <option value="OPEN_INTEREST">Open Interest</option>
                                            <option value="OPEN_INTEREST_DAY_HIGH">Open Interest Day High</option>
                                            <option value="OPEN_INTEREST_DAY_LOW">Open Interest Day Low</option>
                                        </select>
                                    </div>
                                    <div className="col-6 mt-3">
                                        <label htmlFor="instrument" className="form-label mb-0">Of</label>
                                        <input type="text" name="instrument" className="form-control" 
                                        placeholder="Search (infy bse, nifty fut, etc)" value={form.instrument} onChange={handleChange}/>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 mt-3">
                                            <label htmlFor="operator" className="form-label mb-0">Is</label>
                                            <select name="operator" id="operator" className="form-control" value={form.operator} onChange={handleChange}>
                                                <option value=">">Greater than {'(>)'}</option>
                                                <option value=">=">Greater than or equal to {'(>=)'}</option>
                                                <option value="<">Less than {'(<)'}</option>
                                                <option value="<=">Less than or equal to {'(<=)'}</option>
                                                <option value="==">Equal To {'(==)'}</option>
                                            </select>
                                        </div>
                                        <div className="col-6 mt-3 d-flex justify-content-around">
                                            <div>
                                                <input type="radio" name="alertType" id="forvalue" checked={alertType
                                                    === "value"} onChange={()=> setAlertType("value")}/>
                                                <label htmlFor="forvalue" className="form-label mb-0">Value</label>
                                            </div>

                                            <div>
                                                <input type="radio" name="alertType" id="forinstrument"
                                                    checked={alertType === "instrument"} onChange={()=>
                                                setAlertType("instrument")}/>
                                                <label htmlFor="forinstrument"
                                                    className="form-label mb-0">Instrument</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {alertType === "value" && (
                                        <div className="col-6 mt-3">
                                            <label htmlFor="value" className="form-label mb-0">Value</label>
                                            <input type="number" name="value" id="value"
                                                className="form-control" value={form.value} onChange={handleChange}/>
                                            <p className="opacity-75 text-12 mt-1">0.00 % of LastTradedPrice</p>
                                        </div>
                                        )}

                                        {alertType === "instrument" && (
                                        <div className="row mt-2">
                                            <div className="col-6 mt-3">
                                                <label htmlFor="compareProperty" className="form-label mb-0">Property</label>
                                                <select name="compareProperty" id="compareProperty" className="form-control" value={form.compareProperty} onChange={handleChange}>
                                                    <option value="LAST_TRADED_PRICE">Last Traded Price</option>
                                                    <option value="HIGH_PRICE">High Price</option>
                                                    <option value="LOW_PRICE">Low Price</option>
                                                    <option value="OPEN_PRICE">Open Price</option>
                                                    <option value="CLOSE_PRICE">Close Price</option>
                                                    <option value="DAY_CHANGE">Day Change</option>
                                                    <option value="DAY_CHANGE_PERCENT">Day Change Percent</option>
                                                    <option value="INTRADAY_CHANGE">Intra Day Change</option>
                                                    <option value="INTRADAY_CHANGE_PERCENT">Intra Day Change Percent</option>
                                                    <option value="LAST_TRADED_QUANTITY">Last Traded Quantity</option>
                                                    <option value="AVERAGE_TRADE_PRICE">Average Trade Price</option>
                                                    <option value="VOLUME_TRADED">Volume Traded</option>
                                                    <option value="TOTAL_BUY_QUANTITY">Total Buy Quantity</option>
                                                    <option value="TOTAL_SELL_QUANTITY">Total Sell Quantity</option>
                                                    <option value="OPEN_INTEREST">Open Interest</option>
                                                    <option value="OPEN_INTEREST_DAY_HIGH">Open Interest Day High</option>
                                                    <option value="OPEN_INTEREST_DAY_LOW">Open Interest Day Low</option>
                                                </select>
                                            </div>

                                            <div className="col-6 mt-3">
                                                <label htmlFor="compareInstrument" className="form-label mb-0">Of</label>
                                                <input type="text" name="compareInstrument" id="compareInstrument"
                                                    className="form-control"
                                                    placeholder="Search (infy bse, nifty fut, etc)" value={form.compareInstrument} onChange={handleChange} />
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={createAlert}>
                                    Create
                                </button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        <div className="table-responsive d-none d-md-block">
            <table className="table border-top text-14" id="alertTable">
                <thead className="opacity-75">
                    <tr>
                        <td scope="col">
                            <input type="checkbox" id="selectAll" onChange={handleSelectAll} />
                        </td>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Triggered</td>
                        <td>Created on</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        alerts.map((alert,index)=>{
                            const matchesSearch = alert.name.toLowerCase().includes(searchTerm.toLowerCase());
                            return(
                            <tr key={alert._id || index} className={!matchesSearch?"blurred-row":""}>
                                <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
                                <td className="alert-title">{alert.name}</td>
                                <td className={alert.status==="ENABLED"?"enabled":"disabled"}>{alert.status}</td>
                                <td>{alert.triggeredCount}</td>
                                <td>{new Date(alert.createdAt).toISOString().split('T')[0]}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

        {selectCount > 0 && (
        <div className="mt-3">
            <button className="btn btn-primary">
                <i className="fa-solid fa-trash-can me-2"></i>Delete Selected ({selectCount})
            </button>
        </div>
        )}
        <div className="d-md-none">
           {alerts.map((alert, index) => {
            const matchesSearch = alert.name.toLowerCase().includes(searchTerm.toLowerCase());
            return (
                <div key={index || alert._id} className={!matchesSearch?"blurred-row":""}>
                <div className="border-top d-flex py-2">
                    <div className="col-4">
                        <p className="mb-1 alert-title">{alert.name}</p>
                    </div>
                    <div className="col-4 text-center">
                        <p className={alert.status==="ENABLED"?"enabled mb-1":"disabled mb-1"}>{alert.status}</p>
                        <p className="mb-1">{alert.triggeredCount}</p>
                    </div>
                    <div className="col-4 text-end">
                        <p className="mb-1">{new Date(alert.createdAt).toISOString().split('T')[0]}</p>
                    </div>
                </div>
            </div>
            );
            })}
        </div>
    </div>
</div>
);
}

export default Alerts;