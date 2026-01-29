import { useEffect, useState } from "react";
import "../style.css";
import { downloadTable,fetchOrders } from "../utils";
import axios from "axios";

function OpenOrders(){

const [orders,setOrders] = useState([]);
const [selectedOrders, setSelectedOrders] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [searchTermB, setSearchTermB] = useState("");
const selectCount = selectedOrders.length;

const handleOrderSelect = (orderId) => {
setSelectedOrders((prev) =>
prev.includes(orderId)
? prev.filter((id) => id !== orderId)
: [...prev, orderId]
);
};

const selectedOrderDetails = orders.filter(order =>
selectedOrders.includes(order._id)
);

useEffect(() => {
const getOrders = async () => {
const data = await fetchOrders();
setOrders(data);
};

getOrders();
}, []);

const deleteOrder = async()=>{
try{
axios.delete(`${import.meta.env.VITE_API_URL}/orders/delete-order`,{
data:{
orderIds : selectedOrders,
},
})
const modal = document.getElementById("exitOrderModel");
const bsModal = window.bootstrap.Modal.getInstance(modal);
bsModal.hide();

}catch(err){
console.log(err);
alert("Failed to delete orders");
}
};

return(
<div className="container">
    <div className="row py-4">
        <div className="col-12 d-none d-md-flex mb-3 ">
            <p className="fs-5 mb-0">Open orders</p>
            <div className="d-flex ms-auto align-items-center gap-3 text-12">
                <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm} onChange={(e)=>
                setSearchTerm(e.target.value)}/>
                <a href="#" className="text-decoration-none" onClick={()=> downloadTable("ordersTable",
                    "Open-Orders")}>
                    <i className="fa-solid fa-download"></i>
                    Download
                </a>
            </div>
        </div>

        <div className="col-12 d-md-none mb-3 d-md-none">
            <p className="fs-5 mb-0">Open orders</p>
            <div className="d-flex ms-auto align-items-center justify-content-between text-12 mt-3">
                <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm} onChange={(e)=>
                setSearchTerm(e.target.value)}/>
                <a href="#" className="text-decoration-none" onClick={()=> downloadTable("ordersTable",
                    "Open-Orders")}>
                    <i className="fa-solid fa-download"></i>
                    Download
                </a>
            </div>
        </div>

        <div className="table-responsive d-none d-md-block">
            <table className="table border-top text-14" id="ordersTable">
                <thead className="opacity-75">
                    <tr>
                        <td scope="col"><input type="checkbox" checked={ orders.length> 0 &&
                            selectedOrders.length === orders.length
                            }
                            onChange={(e) => {
                            if (e.target.checked) {
                            setSelectedOrders(orders.map((o) => o._id));
                            } else {
                            setSelectedOrders([]);
                            }
                            }}
                            />
                        </td>
                        <td scope="col">Time</td>
                        <td scope="col">Type</td>
                        <td scope="col">Instrument</td>
                        <td scope="col">Qty.</td>
                        <td scope="col">LTP</td>
                        <td scope="col">Status</td>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => {
                    const matchesSearch =
                    order.name.toLowerCase().includes(searchTerm.toLowerCase());

                    return (
                    <tr key={order._id || index} className={!matchesSearch ? "blurred-row" : "" }>
                        <td scope="row">
                            <input type="checkbox" checked={selectedOrders.includes(order._id)} onChange={()=>
                            handleOrderSelect(order._id)}
                            />

                        </td>
                        <td>{new Date(order.createdAt).toISOString().split('T')[0]}</td>
                        <td className={order.mode === "SELL" ? "sell" : "buy" }>{order.mode}</td>
                        <td>{order.name}</td>
                        <td>{order.qty}</td>
                        <td>{order.price}</td>
                        <td>OPEN</td>
                    </tr>
                    );
                    })}
                </tbody>
            </table>

            {selectCount > 0 && selectCount <2 && ( <div className="mt-3">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exitOrderModel">
                    Cancel {selectCount} order
                </button>
            </div>
            )}

            {selectCount > 1 && (
            <div className="mt-3">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exitOrderModel">
                    Exit/Cancel {selectCount} orders
                </button>
            </div>
            )}

            <div className="modal" id="exitOrderModel" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Exit/Cancel orders</h5>
                    </div>
                    <div className="modal-body">
                        {
                        selectedOrderDetails.map((order)=>(
                        <div key={order._id}>
                            <strong>{order.name}</strong> —
                            {order.mode} | Qty: {order.qty} | Price: {order.price}
                        </div>
                        ))
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={deleteOrder}>Exit</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="d-md-none">
           {orders.map((order, index) => {
            const matchesSearch = order.name.toLowerCase().includes(searchTerm.toLowerCase());
            return (
                <div key={index || order._id} className={!matchesSearch ? "blurred-row" : ""}>
                <div className="border-top d-flex py-2">
                    <div className="col-6">
                        <p className="mb-1">{new Date(order.createdAt).toISOString().split('T')[0]}</p>
                        <p className={order.mode === "SELL" ? "sell mb-1" : "buy mb-1"}> {order.mode}</p>
                        <p className="mb-1">{order.name}</p>
                    </div>
                    <div className="col-6 text-end">
                        <p className="mb-1">{order.price}</p>
                        <p className="mb-1">{order.qty}</p>
                        <p className="mb-1">OPEN</p>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
    <div className="col-12 d-none d-md-flex mt-5 mb-3">
        <p className="fs-5 mb-0">Executed orders</p>
        <div className="d-flex ms-auto align-items-center gap-3 text-12">
            <input type="text" placeholder="Search" className="form-control w-50" value={searchTermB} onChange={(e)=>{setSearchTermB(e.target.value)}}/>
            <a href="#" className="text-decoration-none"onClick={()=> downloadTable("executedTable",
                "Executed-Orders")}><i className="fa-solid fa-download"></i>Download</a>
        </div>
    </div>

    <div className="col-12 d-md-none mt-5 mb-3">
        <p className="fs-5 mb-0">Executed orders</p>
        <div className="d-flex ms-auto align-items-center justify-content-between mt-3 text-12">
            <input type="text" placeholder="Search" className="form-control w-50" value={searchTermB} onChange={(e)=>{setSearchTermB(e.target.value)}}/>
            <a href="#" className="text-decoration-none"onClick={()=> downloadTable("executedTable",
                "Executed-Orders")}><i className="fa-solid fa-download"></i>Download</a>
        </div>
    </div>

    <div className="table-responsive px-0 d-none d-md-block">
        <table className="table border-top text-14" id="executedTable">
            <thead className="opacity-75">
                <tr>
                    <td scope="col">Time</td>
                    <td scope="col">Type</td>
                    <td scope="col">Instrument</td>
                    <td scope="col">Qty.</td>
                    <td scope="col">Avg. price</td>
                    <td scope="col">Status</td>
                </tr>
            </thead>
            <tbody>
                {
                orders.map((order,index)=>{
                const matchesSearchB = order.name.toLowerCase().includes(searchTermB.toLowerCase());
                return(
                <tr key={order._id || index} className={!matchesSearchB?"blurred-row":""}>
                    <td>{new Date(order.createdAt).toISOString().split('T')[0]}</td>
                    <td className={order.mode === "SELL" ? "sell" : "buy" }>{order.mode}</td>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price}</td>
                    <td>{order.status}</td>
                </tr>
                );
                })
                }
            </tbody>
        </table>
    </div>
    <div className="d-md-none">
           {orders.map((order, index) => {
            const matchesSearch = order.name.toLowerCase().includes(searchTermB.toLowerCase());
            return (
                <div key={index || order._id} className={!matchesSearch ? "blurred-row" : ""}>
                <div className="border-top d-flex py-2">
                    <div className="col-6">
                        <p className="mb-1">{new Date(order.createdAt).toISOString().split('T')[0]}</p>
                        <p className={order.mode === "SELL" ? "sell mb-1" : "buy mb-1"}> {order.mode}</p>
                        <p className="mb-1">{order.name}</p>
                    </div>
                    <div className="col-6 text-end">
                        <p className="mb-1">{order.price}</p>
                        <p className="mb-1">{order.qty}</p>
                        <p className="mb-1">{order.status}</p>
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

export default OpenOrders;