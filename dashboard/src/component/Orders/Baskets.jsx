import axios from "axios";
import { useEffect, useState } from "react";

function Baskets(){
const [basket,setBasket] = useState("");
const [basketDetail,setBasketDetail] = useState([]);
const [searchTerm,setSearchTerm] = useState("");

const createBasekt = async () =>{
await axios.post(`${import.meta.env.VITE_API_URL}/basket/create`,{
name:basket,
items:[]
});
setBasket("");
const modal = document.getElementById('newBasket');
const bsModal = window.bootstrap.Modal.getInstance(modal);
bsModal.hide();
}

useEffect(()=>{
axios.get(`${import.meta.env.VITE_API_URL}/basket/get`).then((res)=>{
setBasketDetail(res.data);
}).catch((err)=>{console.log(err)})
}),[];
return(
<div className="container">
    <div className="row py-3">
        <div className="col-12 d-none d-md-flex mb-3">
            <p className="fs-5 mb-0">Baskets</p>
            <div className="d-flex ms-auto gap-3">
                <button className="btn btn-primary text-12" data-bs-toggle="modal" data-bs-target="#newBasket">New
                    basket</button>
                
                <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)}}/>
            </div>
        </div>
        <div className="col-12 d-md-none mb-3">
            <p className="fs-5 mb-2">Baskets</p>
            <div className="d-flex ms-auto justify-content-between">
                
                <input type="text" placeholder="Search" className="form-control w-50" value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)}}/>
                    <button className="btn btn-primary text-12" data-bs-toggle="modal" data-bs-target="#newBasket">New
                    basket</button>
            </div>
        </div>

                <div className="modal fade" id="newBasket" tabIndex="-1" aria-labelledby="newBasket" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="newBasket">Create basket</h1>
                                    </div>
                                    <div className="modal-body text-center">
                                        <input type="text" name="basket" className="form-control my-3"
                                            placeholder="Basket name" value={basket}
                                            onChange={(e)=>{setBasket(e.target.value)}}/>
                                        <button className="btn btn-primary w-100" onClick={createBasekt}>Create</button>
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
            <table className="table border-top text-14">
                <thead className="opacity-75">
                    <tr>
                        <td scope="col">Name</td>
                        <td scope="col">Items</td>
                        <td scope="col">Created on</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    basketDetail.map((basket,index)=>{
                    const matchesSearch = basket.name.toLowerCase().includes(searchTerm.toLowerCase());
                    return(
                    <tr key={index || basket._id} className={!matchesSearch?"blurred-row":""}>
                        <td>{basket.name}</td>
                        <td>{basket.items.length>0?basket.items:0}</td>
                        <td>{new Date(basket.createdAt).toISOString().split('T')[0]}</td>
                    </tr>
                    )
                    })
                    }
                </tbody>
            </table>
        </div>
        <div className="d-md-none">
            {basketDetail.map((basket, index) => {
            const matchesSearch = basket.name.toLowerCase().includes(searchTerm.toLowerCase());
            return (
            <div key={index || basket._id} className={!matchesSearch?"blurred-row":""}>
                <div className="border-top d-flex py-2">
                    <div className="col-4">
                        <p className="mb-1">{basket.name}</p>
                    </div>
                    <div className="col-4 text-center">
                        <p className="mb-1">{basket.items.length>0?basket.items:0}</p>
                    </div>
                    <div className="col-4 text-end">
                        <p className="mb-1">{new Date(basket.createdAt).toISOString().split('T')[0]}</p>
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

export default Baskets;