import axios from "axios";
import { useEffect, useState } from "react";

function SIP() {
const [basketDetail, setBasketDetail] = useState([]);
const [selectedBaskets, setSelectedBaskets] = useState([]);
const [sip,setSip] = useState([]);
const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [name,setName] = useState("");
const [searchTerm,setSearchTerm] = useState("");

useEffect(() => {
axios
.get(`${import.meta.env.VITE_API_URL}/basket/get`)
.then((res) => {
setBasketDetail(res.data);
})
.catch((err) => {
console.log(err);
});
}, []);

const toggleBasket = (id) => {
setSelectedBaskets(prev =>
prev.includes(id)
? prev.filter(b => b !== id)
: [...prev, id]
);
};

const fetchSips = () => {
axios.get(`${import.meta.env.VITE_API_URL}/sip/get-sip`)
.then(res => setSip(res.data))
.catch(console.log);
};

useEffect(fetchSips, []);

const createSip = () =>{
axios.post(`${import.meta.env.VITE_API_URL}/sip/create-sip`,{
name,
date: date,
time: time,
baskets: selectedBaskets
}).then(()=>{
fetchSips();
    setName("");
    setDate("");
    setTime("");
    setSelectedBaskets([]);
}).catch((err)=>{
console.log(err);
});
};

return (
<div className="container">
    <div className="row py-4">
        <div className="d-none d-md-flex mb-3">
            <p className="fs-5 mb-0">SIP</p>
            <div className="d-flex ms-auto gap-3">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newSIP">
                    New SIP
                </button>

                <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm} onChange={(e)=>
                setSearchTerm(e.target.value)}/>
            </div>
        </div>
         <div className="d-md-none mb-3">
            <p className="fs-5 mb-2">SIP</p>
            <div className="d-flex ms-auto justify-content-between">
                 <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm} onChange={(e)=>
                setSearchTerm(e.target.value)}/>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newSIP">
                    New SIP
                </button>

            </div>
        </div>

<div className="modal fade" id="newSIP" tabIndex="-1" aria-labelledby="newSIP" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="newSIP">
                                    New SIP
                                </h1>
                            </div>

                            <div className="modal-body">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="SIP name" value={name}
                                    onChange={(e)=>{setName(e.target.value)}}/>

                                <p className="mt-3 mb-1">Baskets</p>
                                {basketDetail.map((basket) => (
                                <div key={basket._id} className="form-check">
                                    <input type="checkbox" className="form-check-input" id={basket._id} onChange={()=>
                                    toggleBasket(basket._id)} />
                                    <label htmlFor={basket._id} className="form-check-label">
                                        {basket.name}
                                    </label>
                                </div>
                                ))}

                                <p className="text-12 opacity-75 mt-2">
                                    Only equity MARKET and LIMIT orders in the selected
                                    baskets will be placed. LIMIT orders are not guaranteed
                                    to be executed.
                                    <a href="#"> Learn more.</a>
                                </p>

                                <label className="form-label">Date</label>
                                <select className="form-control" value={date} onChange={(e)=> setDate(e.target.value)}
                                    >
                                    <option value="">Select</option>
                                    {[...Array(31)].map((_, i) => (
                                    <option key={i} value={i + 1}>
                                        {i + 1}
                                    </option>
                                    ))}
                                </select>

                                <label className="form-label mt-2">Time</label>
                                <select className="form-control" value={time} onChange={(e)=> setTime(e.target.value)}
                                    >
                                    <option value="">Select</option>
                                    <option value="9:30">9:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                </select>

                                <p className="text-12 opacity-75 mt-3 mb-0">
                                    SIPs on weekends and holidays will be placed on the next
                                    trading day.
                                </p>
                                <p className="text-12 opacity-75">
                                    Setup a <a href="#">bank mandate</a> to automatically add
                                    necessary funds.
                                </p>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={createSip}>
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
            <table className="table border-top text-14">
                <thead className="opacity-75">
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Monthly schedule</td>
                        <td>Baskets</td>
                        <td>Created on</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    sip.map((item,index)=>{
                      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
                    return(
                    <tr key={index || item._id} className={!matchesSearch?"blurred-row":""}>
                        <td>{item.name}</td>
                        <td className="text-success">{item.status}</td>
                        <td>Date-{item.date} Time-{item.time}</td>
                        <td>{item.baskets.map(basket=>basket.name).join(", ")}</td>
                        <td>{new Date(item.createdAt).toISOString().split('T')[0]}</td>
                    </tr>
                    )
                    })
                    }
                </tbody>
            </table>
        </div>
        <div className="d-md-none">
           {sip.map((item, index) => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            return (
                <div key={index || item._id} className={!matchesSearch?"blurred-row":""}>
                <div className="border-top d-flex py-2">
                    <div className="col-4">
                        <p className="mb-1">{item.name}</p>
                        <p className="text-success mb-1">{item.status}</p>
                    </div>
                    <div className="col-4 text-center">
                        <p className="mb-1">Date-{item.date}</p>
                        <p className="mb-1">Time-{item.time}</p>
                    </div>
                    <div className="col-4 text-end">
                        <p className="mb-1">{item.baskets.map(basket=>basket.name).join(", ")}</p>
                        <p className="mb-1">{new Date(item.createdAt).toISOString().split('T')[0]}</p>
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

export default SIP;