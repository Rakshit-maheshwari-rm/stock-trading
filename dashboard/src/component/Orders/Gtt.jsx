import { useEffect, useState } from "react";
import { downloadTable } from "../utils";
import axios from "axios";

function Gtt(){
const [searchTerm,setSearchTerm] = useState("");
const [gtt,setGtt] = useState([]);
useEffect(()=>{
axios.get(`${import.meta.env.VITE_API_URL}/gtt/get-gtt`).then((res)=>{
setGtt(res.data);
}).catch((err)=>{
console.log(err);
});
},[]);

return(
<div className="container">
    <div className="row py-4">
        <div className="col-12 d-none d-md-flex">
            <p className="fs-5 mb-0">GTT</p>
            <div className="d-flex ms-auto align-items-center gap-3 mb-3">
                <button className="btn btn-primary text-12" data-bs-toggle="modal" data-bs-target="#newGttModel">New
                    GTT</button>
                <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)}}/>
                <a href="#" className="text-decoration-none text-12" onClick={()=> downloadTable("gttTable",
                    "GTT")}>
                    <i className="fa-solid fa-download"></i>
                    Download
                </a>
            </div>
        </div>

        <div className="col-12 d-md-none">
            <div className="d-flex ms-auto align-items-center justify-content-between mb-3">
                            <p className="fs-5 mb-0">GTT</p>
                            <button className="btn btn-primary text-12" data-bs-toggle="modal" data-bs-target="#newGttModel">New
                    GTT</button>
            </div>
            <div className="d-flex ms-auto align-items-center justify-content-between mb-3">
                <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)}}/>
                <a href="#" className="text-decoration-none text-12" onClick={()=> downloadTable("gttTable",
                    "GTT")}>
                    <i className="fa-solid fa-download"></i>
                    Download
                </a>
            </div>
        </div>

        <div className="modal fade" id="newGttModel" tabIndex="-1" aria-labelledby="newGttModel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="newGttModel"><input type="text"
                                        className="form-control" placeholder="Search (infy bse, nifty fut, etc)" /></h1>
                            </div>
                            <div className="modal-body text-center">
                                <i className="fa-solid fa-magnifying-glass fs-4"></i>
                                <h6 className="opacity-75 py-2 fs-4">Find an instrument</h6>
                                <p>Use the above search bar to find an instrument</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        <div className="table-responsive d-none d-md-block">
            <table className="table border-top text-14" id="gttTable">
                <thead className="opacity-75">
                    <tr>
                        <td scope="col">Created on</td>
                        <td scope="col">Instrument</td>
                        <td scope="col">Type</td>
                        <td scope="col">LTP</td>
                        <td scope="col">Quantity</td>
                        <td scope="col">Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    gtt.map((item,index)=>{
                    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
                    return(
                    <tr key={index || item._id} className={!matchesSearch?"blurred-row":""}>
                        <td>{new Date(item.createdAt).toISOString().split('T')[0]}</td>
                        <td>{item.name}</td>
                        <td className={item.type==="SELL"?"sell":"buy"}>{item.type}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td className={item.status==="ACTIVE"?"act":"triggered"}>{item.status}</td>
                    </tr>
                    )
                    })
                    }
                </tbody>
            </table>
        </div>
        <div className="d-md-none">
           {gtt.map((item, index) => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            return (
                <div key={index || item._id} className={!matchesSearch ? "blurred-row" : ""}>
                <div className="border-top d-flex py-2">
                    <div className="col-6">
                        <p className={item.type === "SELL" ? "sell mb-1" : "buy mb-1"}> {item.type}</p>
                        <p className="mb-1">{new Date(item.createdAt).toISOString().split('T')[0]}</p>
                        <p className="mb-1">{item.name}</p>
                    </div>
                    <div className="col-6 text-end">
                        <p className="mb-1">{item.price}</p>
                        <p className="mb-1">{item.qty}</p>
                        <p className="mb-1">
                        <span className={item.status === "ACTIVE" ? "act" : "triggered"}> {item.status}</span>
                        </p>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
    </div>
</div>
)
}

export default Gtt;