import { useEffect,useState } from "react";
import axios from 'axios';
import { downloadTable } from "./utils";

function Positions(){
const [searchTerm,setSearchTerm] = useState("");
const [searchTermA,setSearchTermA] = useState("");
const [selectCount,setSelectCount] = useState(0);
const [positions,setPositions] = useState([]);

useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/positions/all`).then((res)=>{
        setPositions(res.data);
    }).catch((err)=>{
        console.log(err);
    });
}, [])

const handleCheckboxChange = () => {
const checkboxes = document.querySelectorAll("#positionsTable tbody input[type='checkbox']");
let count = 0;
checkboxes.forEach(cb => {
if (cb.checked) count++;
});
setSelectCount(count);
};

return(
<div className="container">
    <div className="row py-4">
        <div className="col-12 d-none d-md-flex mb-3">
            <p className="fs-5 mb-0">Positions ({positions.length})</p>
            <div className="d-flex ms-auto align-items-center gap-3 text-12">

                <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />

                <a href="#" className="text-orange text-decoration-none d-flex align-items-center gap-1">
                    <i className="fa-solid fa-chart-line"></i>
                    Analyze
                </a>

                <a href="#" className="text-decoration-none d-flex align-items-center gap-1">
                    <i className="fa-solid fa-chart-simple"></i>
                    Analytics
                </a>

                <a href="#" className="text-decoration-none d-flex align-items-center gap-1" onClick={()=>
                    downloadTable("positionsTable",
                    "Positions")}>
                    <i className="fa-solid fa-download"></i>
                    Download
                </a>
            </div>
        </div>

<div className="col-12 d-md-none mb-3">
            <p className="fs-5 mb-2">Positions ({positions.length})</p>
            <div className="d-flex ms-auto align-items-center gap-3 text-12">

                <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />

                <a href="#" className="text-orange text-decoration-none d-flex align-items-center gap-1">
                    <i className="fa-solid fa-chart-line"></i>
                    Analyze
                </a>

                <a href="#" className="text-decoration-none d-flex align-items-center gap-1">
                    <i className="fa-solid fa-chart-simple"></i>
                    Analytics
                </a>

                <a href="#" className="text-decoration-none d-flex align-items-center gap-1" onClick={()=>
                    downloadTable("positionsTable",
                    "Positions")}>
                    <i className="fa-solid fa-download"></i>
                    Download
                </a>
            </div>
        </div>

        <div className="table-responsive d-none d-md-block">
            <table className="table border-top text-14" id="positionsTable">
                <thead>
                    <tr className="opacity-50 text-12">
                        <td scope="col"><input type="checkbox" id="selectAll" onChange={(e)=> {
                            const checked = e.target.checked;
                            const checkboxes = document.querySelectorAll("#positionsTable tbody input[type='checkbox']");
                            checkboxes.forEach(cb => cb.checked = checked);
                            setSelectCount(checked ? checkboxes.length : 0);
                            }} /></td>
                        <td scope="col">Product</td>
                        <td scope="col">Instrument</td>
                        <td scope="col" className="text-end">Qty.</td>
                        <td scope="col" className="text-end">Avg.</td>
                        <td scope="col" className="text-end">LTP</td>
                        <td scope="col" className="text-end">P&L</td>
                        <td scope="col" className="text-end">Chg.</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    positions.map((position,index)=>{
                    const profit = (position.price - position.avg) * position.qty;
                    const profitClass = profit >= 0 ? "profit" : "loss";
                    const dayValue = parseFloat(position.day);
                    const dayClass = dayValue > 0 ? "profit" : "loss";

                    const matchesSearch = position.name.toLowerCase().includes(searchTerm.toLowerCase());
                    return(
                    <tr key={index} className={!matchesSearch?"blurred-row":""}>
                        <td scope="row"><input type="checkbox" onChange={handleCheckboxChange} /></td>
                        <td>{position.product}</td>
                        <td>{position.name}</td>
                        <td className={`${position.qty>0?"positive":"negative"} text-end`}>{position.qty}</td>
                        <td className="text-end">{position.avg.toFixed(2)}</td>
                        <td className="text-end">{position.price.toFixed(2)}</td>
                        <td className={`${profitClass} text-end`}>{profit.toFixed(2)}</td>
                        <td className={`${dayClass} text-end text-12`}>{dayValue.toFixed(2)}%</td>
                    </tr>
                    )
                    })
                    }
                </tbody>
            </table>

            {selectCount > 0 && ( <div className="mt-3">
                <button className="btn btn-primary">
                    Exit {selectCount} positions
                </button>
            </div>
            )}
        </div>
        <div className="d-md-none">
           {positions.map((position, index) => {
            const profit = (position.price - position.avg) * position.qty;
                    const profitClass = profit >= 0 ? "profit" : "loss";
                    const dayValue = parseFloat(position.day);
                    const dayClass = dayValue > 0 ? "profit" : "loss";
            const matchesSearch = position.name.toLowerCase().includes(searchTermA.toLowerCase());
            return (
                <div key={index || position._id} className={!matchesSearch ? "blurred-row" : ""}>
                <div className="border-top d-flex py-2">
                    <div className="col-4">
                        <p className="mb-1">{position.product}</p>
                        <p className="mb-1"> {position.name}</p>
                    </div>
                    <div className="col-4 text-center">
                        <p className={`${position.qty>0?"positive":"negative"} mb-1`}>{position.qty}</p>
                        <p className="mb-1">{position.avg.toFixed(2)}</p>
                        <p className="mb-1">{position.price.toFixed(2)}</p>
                        
                    </div>
                    <div className="col-4 text-end">
                        <p className={`${profitClass} mb-1`}>{profit.toFixed(2)}</p>
                        <p className={`${dayClass} mb-1 text-12`}>{dayValue.toFixed(2)}%</p>
                        <p className="mb-1">{position.status}</p>
                    </div>
                </div>
                </div>
            );
            })}
        </div>

        <div className="col-12 d-none d-md-flex mb-3 mt-5">
            <p className="fs-5 mb-0">Day's history ({positions.length})</p>
            <div className="d-flex ms-auto align-items-center gap-3 text-12">
                <input type="text" placeholder="Search" className="form-control w-50" value={searchTermA} onChange={(e)=>{setSearchTermA(e.target.value)}} />
                <a href="#" className="text-decoration-none" onClick={()=> downloadTable("dayHistoryTable",
                    "Day-history")}>
                    <i className="fa-solid fa-download"></i>
                    Download
                </a>
            </div>
        </div>

        <div className="col-12 d-md-none mb-3 mt-5">
            <p className="fs-5 mb-2">Day's history ({positions.length})</p>
            <div className="d-flex ms-auto align-items-center justify-content-between text-12">
                <input type="text" placeholder="Search" className="form-control w-50" value={searchTermA} onChange={(e)=>{setSearchTermA(e.target.value)}} />
                <a href="#" className="text-decoration-none" onClick={()=> downloadTable("dayHistoryTable",
                    "Day-history")}>
                    <i className="fa-solid fa-download"></i>
                    Download
                </a>
            </div>
        </div>

        <div className="table-responsive d-none d-md-block">
            <table className="table border-top text-14" id="dayHistoryTable">
                <thead>
                    <tr  className="opacity-50 text-12">
                        <td scope="col">Product</td>
                        <td scope="col">Instrument</td>
                        <td scope="col" className="text-end">Qty.</td>
                        <td scope="col" className="text-end">Avg.</td>
                        <td scope="col" className="text-end">LTP</td>
                        <td scope="col" className="text-end">P&L</td>
                        <td scope="col" className="text-end">Chg.</td>
                    </tr>
                </thead>
                <tbody>
                     {
                    positions.map((position,index)=>{
                    const profit = (position.price - position.avg) * position.qty;
                    const profitClass = profit >= 0 ? "profit" : "loss";
                    const dayValue = parseFloat(position.day);
                    const dayClass = dayValue > 0 ? "profit" : "loss";

                    const matchesSearch = position.name.toLowerCase().includes(searchTermA.toLowerCase());
                    return(
                    <tr key={index} className={!matchesSearch?"blurred-row":""}>
                        <td>{position.product}</td>
                        <td>{position.name}</td>
                        <td className={`${position.qty>0?"positive":"negative"} text-end`}>{position.qty}</td>
                        <td className="text-end">{position.avg.toFixed(2)}</td>
                        <td className="text-end">{position.price.toFixed(2)}</td>
                        <td className={`${profitClass} text-end`}>{profit.toFixed(2)}</td>
                        <td className={`${dayClass} text-end text-12`}>{dayValue.toFixed(2)}%</td>
                    </tr>
                    )
                    })
                    }
                </tbody>
            </table>
        </div>
        <div className="d-md-none">
           {positions.map((position, index) => {
            const profit = (position.price - position.avg) * position.qty;
                    const profitClass = profit >= 0 ? "profit" : "loss";
                    const dayValue = parseFloat(position.day);
                    const dayClass = dayValue > 0 ? "profit" : "loss";
            const matchesSearch = position.name.toLowerCase().includes(searchTermA.toLowerCase());
            return (
                <div key={index || position._id} className={!matchesSearch ? "blurred-row" : ""}>
                <div className="border-top d-flex py-2">
                    <div className="col-4">
                        <p className="mb-1">{position.product}</p>
                        <p className="mb-1"> {position.name}</p>
                    </div>
                    <div className="col-4 text-center">
                        <p className={`${position.qty>0?"positive":"negative"} mb-1`}>{position.qty}</p>
                        <p className="mb-1">{position.avg.toFixed(2)}</p>
                        <p className="mb-1">{position.price.toFixed(2)}</p>
                        
                    </div>
                    <div className="col-4 text-end">
                        <p className={`${profitClass} mb-1`}>{profit.toFixed(2)}</p>
                        <p className={`${dayClass} mb-1 text-12`}>{dayValue.toFixed(2)}%</p>
                        <p className="mb-1">{position.status}</p>
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

export default Positions;