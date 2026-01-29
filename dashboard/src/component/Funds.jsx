function Funds(){
return(
<div className="container">
    <div className="row py-3">
        <div className="col-12 d-flex gap-2 align-items-center justify-content-end">
            <button className="btn btn-success">Add funds</button>
            <button className="btn btn-primary">Withdraw</button>
        </div>
        <div className="col-12 col-md-6 mt-5">
            <div className="d-flex align-items-center">
                <i className="fa-solid fa-cruzeiro-sign me-2"></i>
                <h6 className="mb-0">Equity</h6>
                <div className="d-flex gap-2 ms-auto text-12">
                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye me-1"></i>View
                        statement</a>
                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-info"></i>Help</a>
                </div>
            </div>
            <div className="table-responsive border mt-3">
                <table className="table table-borderless table-padding table-hover text-14">
                    <tbody>
                        <tr>
                            <td className="pt-4">Available margin</td>
                            <td className="text-end fs-3 alert-title">1,00,000.00</td>
                        </tr>
                        <tr>
                            <td className="pt-4">Used margin</td>
                            <td className="text-end fs-3">0.00</td>
                        </tr>
                        <tr>
                            <td className="pt-4">Available cash</td>
                            <td className="text-end fs-3">1,00,000.00</td>
                        </tr>

                        <tr className="border-top">
                            <td>Opening balance</td>
                            <td className="text-end">1,00,000.00</td>
                        </tr>
                        <tr>
                            <td>Payin</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>Payout</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>SPAN</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>Delivery margin</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>Exposure</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>Options premium</td>
                            <td className="text-end">0.00</td>
                        </tr>

                        <tr className="border-top">
                            <td>Collateral (Liquid funds)</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>Collateral (Equity)</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>Total collateral</td>
                            <td className="text-end">0.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col-12 col-md-6 mt-5">
            <div className="d-flex align-items-center">
                <i class="fa-solid fa-droplet me-2"></i>
                <h6 className="mb-0">commodity</h6>
                <div className="d-flex gap-2 ms-auto text-12">
                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye me-1"></i>View
                        statement</a>
                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-info"></i>Help</a>
                </div>
            </div>
            <div className="table-responsive border mt-3">
                <table className="table table-borderless table-padding table-hover text-14">
                    <tbody>
                        <tr>
                            <td className="pt-4">Available margin</td>
                            <td className="text-end fs-3 alert-title">50,000.00</td>
                        </tr>
                        <tr>
                            <td className="pt-4">Used margin</td>
                            <td className="text-end fs-3">0.00</td>
                        </tr>
                        <tr>
                            <td className="pt-4">Available cash</td>
                            <td className="text-end fs-3">50,000.00</td>
                        </tr>

                        <tr className="border-top">
                            <td>Opening balance</td>
                            <td className="text-end">50,000.00</td>
                        </tr>
                        <tr>
                            <td>Payin</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>Payout</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>SPAN</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>Delivery margin</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>Exposure</td>
                            <td className="text-end">0.00</td>
                        </tr>
                        <tr>
                            <td>Options premium</td>
                            <td className="text-end">0.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
)
}

export default Funds;