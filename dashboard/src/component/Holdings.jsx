import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { calculateTotals, downloadTable } from "./utils.js";
import { Graph } from "./Graph.jsx";

function Holdings() {
    const [allHoldings, setAllHoldings] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/holdings/all`)
            .then((res) => setAllHoldings(res.data))
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const totals = calculateTotals(allHoldings) || {
        totalInvestment: 0,
        totalCurrentValue: 0,
        totalDayPL: 0,
        totalProfit: 0,
        weightedDayPercent: 0,
        weightedNetPercent: 0,
    };

    const { weightedDayPercent, weightedNetPercent } = totals;

    const labels = allHoldings.map(holding => holding.name);
    const data = {
    labels,
    datasets: [
            {
                label: 'Stock Price',
                data: allHoldings.map(holding => holding.price),
                backgroundColor: ' rgb(56, 104, 249)',
            },
        ],
    };

    return (
        <div className="container">
            <div className="row pt-3 d-none d-md-block">
                <div className="col-12 d-flex">
                    <p className="fs-5 mb-0">Holdings ({allHoldings.length})</p>
                    <div className="d-flex ms-auto align-items-center gap-3 text-12">
                        <input
                            type="text"
                            placeholder="Search"
                            className="form-control w-50" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
                        />

                        <a href="#" className="text-decoration-none d-flex align-items-center gap-1">
                            <i className="fa-solid fa-people-group"></i> Family
                        </a>

                        <a href="#" className="text-decoration-none d-flex align-items-center gap-1">
                            <i className="fa-solid fa-chart-simple"></i> Analytics
                        </a>

                        <a
                            href="#"
                            className="text-decoration-none d-flex align-items-center gap-1"
                            onClick={() => downloadTable("holdingsTable", "Holdings")}
                        >
                            <i className="fa-solid fa-download"></i> Download
                        </a>
                    </div>
                </div>
            

                <div className="col-12 d-flex align-items-center justify-content-between mt-4 pt-3 border-top">
                    <div>
                        <p className="mb-1 opacity-50 text-12">Total investment</p>
                        <h6 className="text-18">
                            {totals.totalInvestment.toLocaleString("en-IN", {
                                currency: "INR",
                            })}
                        </h6>
                    </div>

                    <div>
                        <p className="mb-1 opacity-50 text-12">Current value</p>
                        <h6 className="text-18">
                            {totals.totalCurrentValue.toLocaleString("en-IN", {
                                currency: "INR",
                            })}
                        </h6>
                    </div>

                    <div>
                        <p className="mb-1 opacity-50 text-12">Day's P&L</p>
                        <h6 className={`${totals.totalDayPL >= 0 ? "profit" : "loss"} text-18`}>
                            {totals.totalDayPL.toLocaleString("en-IN", {
                                currency: "INR",
                            })}{" "}
                            <span className="text-10">({weightedDayPercent.toFixed(2)}%)</span>
                        </h6>
                    </div>

                    <div>
                        <p className="mb-1 opacity-50 text-12">Total P&L</p>
                        <h6 className={`${totals.totalProfit >= 0 ? "profit" : "loss"} text-18`}>
                            {totals.totalProfit.toLocaleString("en-IN", {
                                currency: "INR",
                            })}{" "}
                            <span className="text-10">({weightedNetPercent.toFixed(2)}%)</span>
                        </h6>
                    </div>
                </div>
            </div>

              <div className="row pt-3 d-md-none">

                    <p className="fs-5 mb-0">Holdings ({allHoldings.length})</p>
                                    <div className="col-12 d-flex pt-3">
                    <div className="d-flex align-items-center gap-2 text-12">
                        <input
                            type="text"
                            placeholder="Search"
                            className="form-control w-50" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
                        />
                         <a href="#" className="text-decoration-none d-flex align-items-center gap-1">
                            <i className="fa-solid fa-people-group"></i> Family
                        </a>

                        <a href="#" className="text-decoration-none d-flex align-items-center gap-1">
                            <i className="fa-solid fa-chart-simple"></i> Analytics
                        </a>
                        <a
                            href="#"
                            className="text-decoration-none d-flex align-items-center gap-1"
                            onClick={() => downloadTable("holdingsTable", "Holdings")}
                        >
                            <i className="fa-solid fa-download"></i> Download
                        </a>
                    </div>
                </div>
            

                <div className="col-12 d-flex align-items-center justify-content-between mt-4 pt-3 border-top">
                    <div>
                    <div>
                        <p className="mb-1 opacity-50 text-12">Total investment</p>
                        <h6 className="text-18">
                            {totals.totalInvestment.toLocaleString("en-IN", {
                                currency: "INR",
                            })}
                        </h6>
                    </div>

                    <div>
                        <p className="mb-1 opacity-50 text-12">Current value</p>
                        <h6 className="text-18">
                            {totals.totalCurrentValue.toLocaleString("en-IN", {
                                currency: "INR",
                            })}
                        </h6>
                    </div>
</div>
<div>
                    <div>
                        <p className="mb-1 opacity-50 text-12">Day's P&L</p>
                        <h6 className={`${totals.totalDayPL >= 0 ? "profit" : "loss"} text-18`}>
                            {totals.totalDayPL.toLocaleString("en-IN", {
                                currency: "INR",
                            })}{" "}
                            <span className="text-10">({weightedDayPercent.toFixed(2)}%)</span>
                        </h6>
                    </div>

                    <div>
                        <p className="mb-1 opacity-50 text-12">Total P&L</p>
                        <h6 className={`${totals.totalProfit >= 0 ? "profit" : "loss"} text-18`}>
                            {totals.totalProfit.toLocaleString("en-IN", {
                                currency: "INR",
                            })}{" "}
                            <span className="text-10">({weightedNetPercent.toFixed(2)}%)</span>
                        </h6>
                    </div>
                    </div>
                </div>
            </div>

            <div className="table-responsive d-none d-md-block">
                <table className="table border-top text-14 mt-3" id="holdingsTable">
                    <thead>
                        <tr className="opacity-50 text-12">
                            <th className="border-end">Instrument</th>
                            <th className="text-end">Qty.</th>
                            <th className="text-end">Avg. cost</th>
                            <th className="border-end text-end">LTP</th>
                            <th className="text-end">Cur. val</th>
                            <th className="text-end">P&L</th>
                            <th className="text-end">Net chg.</th>
                            <th className="text-end">Day chg.</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allHoldings.map((stock, index) => {
                            const currentValue = stock.price * stock.qty;
                            const profit = (stock.price - stock.avg) * stock.qty;
                            const profitClass = profit > 0 ? "profit" : "loss";

                            const netVal = parseFloat(stock.net);
                            const dayVal = parseFloat(stock.day);

                            const matchesSearch = stock.name.toLowerCase().includes(searchTerm.toLowerCase());
                            return (
                                <tr key={stock._id || index} className={!matchesSearch?"blurred-row":""}>
                                    <td className="border-end">{stock.name}</td>
                                    <td className="text-end">{stock.qty}</td>
                                    <td className="text-end">{stock.avg}</td>
                                    <td className="border-end text-end">{stock.price}</td>
                                    <td className="text-end">{currentValue.toFixed(2)}</td>
                                    <td className={`${profitClass} text-end`}>{profit.toFixed(2)}</td>
                                    <td className={`${netVal >= 0 ? "profit" : "loss"} text-end`}>
                                        {stock.net}
                                    </td>
                                    <td className={`${dayVal >= 0 ? "profit" : "loss"} text-end`}>
                                        {stock.day}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="d-md-none mt-3">
           {allHoldings.map((stock, index) => {
            const currentValue = stock.price * stock.qty;
            const profit = (stock.price - stock.avg) * stock.qty;
            const profitClass = profit > 0 ? "profit" : "loss";
            const netVal = parseFloat(stock.net);
            const dayVal = parseFloat(stock.day);
            const matchesSearch = stock.name.toLowerCase().includes(searchTerm.toLowerCase());
            return (
                <div key={stock._id || index} className={!matchesSearch ? "blurred-row" : ""}>
                <div className="border-top d-flex py-2">
                    <div className="col-4">
                        <p className="mb-1">{stock.name}</p>
                        <p className="mb-1">{stock.qty}</p>
                        <p className="mb-1">{stock.avg}</p>
                    </div>
                    <div className="col-4 text-center">
                        <p className="mb-3">{stock.price}</p>
                        <p className="mb-1">{currentValue.toFixed(2)}</p>
                    </div>
                    <div className="col-4 text-end">
                        <p className={`${profitClass} text-end mb-1`}>{profit.toFixed(2)}</p>
                        <p className={`${netVal >= 0 ? "profit mb-1" : "loss mb-1"} text-end`}>{stock.net}</p>
                        <p className={`${dayVal >= 0 ? "profit" : "loss"} text-end`}>{stock.day}</p>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
        <div className="mt-3 d-none d-md-block">
            <Graph data={data}/>
            </div>
        </div>
    );
}

export default Holdings;