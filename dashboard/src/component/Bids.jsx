import axios from "axios";
import { useEffect, useState } from "react";

function Bids(){
    const [searchTerm,setSearchTerm] = useState("");
    const [auctions,setAuctions] = useState([]);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/auction/get`).then((res)=>{
            setAuctions(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);
return(
<div className="container">
    <div className="row py-3">
        <div className="col-12 d-flex">
            <p className="fs-5 mb-0">Auctions ({auctions.length})</p>
            <div className="d-flex ms-auto">
                <input type="text" placeholder="Search" className="form-control" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
            </div>
        </div>

        <div className="table-responsive d-none d-md-block">
            <table className="table border-top text-14 mt-3">
                <thead className="opacity-75">
                    <tr>
                        <td scope="col">Instrument</td>
                        <td scope="col" className="text-end">Eligible qty.</td>
                        <td scope="col" className="text-end">Last price</td>
                        <td scope="col" className="text-end">Holding price</td>
                        <td scope="col" className="text-end">Holding P&L</td>
                        <td scope="col" className="text-end">Auction no.</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        auctions.map((auction,index)=>{
                            const matchesSearch = auction.name.toLowerCase().includes(searchTerm.toLowerCase());
                            return(
                            <tr key={auction._id || index} className={!matchesSearch?"blurred-row":""}>
                                <td>{auction.name}</td>
                                <td className="text-end">{auction.qty}</td>
                                <td className="text-end">{auction.lastPrice}</td>
                                <td className="text-end">{auction.currentPrice}</td>
                                <td  className={`${auction.profit > 0 ? "profit" : "loss"} text-end`}>{auction.profit}</td>
                                <td className="opacity-50 text-end">#{auction.auctionNumber}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <div className="d-md-none mt-3">
           {auctions.map((auction, index) => {
            const matchesSearch = auction.name.toLowerCase().includes(searchTerm.toLowerCase());
            return (
                <div key={auction._id || index} className={!matchesSearch ? "blurred-row" : ""}>
                <div className="border-top d-flex py-2">
                    <div className="col-4">
                        <p className="mb-1">{auction.name}</p>
                        <p className="mb-1">{auction.qty}</p>
                    </div>
                    <div className="col-4">
                        <p className="mb-1">{auction.lastPrice}</p>
                        <p className="mb-1">{auction.currentPrice}</p>
                    </div>
                    <div className="col-4 text-end">
                        <p  className={`${auction.profit > 0 ? "profit" : "loss"} mb-1`}>{auction.profit}</p>
                        <p className="opacity-50 mb-1">#{auction.auctionNumber}</p>
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

export default Bids;