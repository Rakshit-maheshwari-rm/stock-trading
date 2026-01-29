import "./style.css"

function Charges() {
return (
<div className="container p-md-5">
    <h1 className="fs-4 mb-4">Charges for account opening</h1>
    <div className="table-responsive">
        <table className="table border border-1 table-borderless table-custom-padding mb-md-5">
            <thead className="border">
                <tr>
                    <th className="w-75 text-muted">Type of account</th>
                    <th className="text-muted">Charges</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Online account</td>
                    <td>FREE</td>
                </tr>
                <tr className="table-light">
                    <td>Offline account</td>
                    <td>FREE</td>
                </tr>
                <tr>
                    <td>NRI account (offline only)</td>
                    <td>₹ 500</td>
                </tr>
                <tr className="table-light">
                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                    <td>₹ 500</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h1 className="fs-4 mb-4 mt-5">Demat AMC (Annual Maintenance Charge)</h1>
    <div className="table-responsive">
        <table className="table border border-1 table-borderless table-custom-padding mb-md-5">
            <thead className="border">
                <tr>
                    <th className="w-50 text-muted">Value of holdings</th>
                    <th className="text-muted">AMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Up to ₹4 lakh</td>
                    <td>FREE</td>
                </tr>
                <tr className="table-light">
                    <td>₹4 lakh - ₹10 lakh</td>
                    <td>₹ 100 per year, charged quarterly*</td>
                </tr>
                <tr>
                    <td>Above ₹10 lakh</td>
                    <td>₹ 300 per year, charged quarterly</td>
                </tr>
            </tbody>
        </table>
        <p className="text-small">* Lower AMC is applicable only if the account qualifies as a Basic Services Demat
            Account (BSDA). BSDA
            account holders cannot hold more than one demat account. To learn more about BSDA, <a href="#">click
                here.</a></p>
    </div>

    <h1 className="fs-4 mb-4 mt-5">Charges for optional value added services</h1>
    <div className="table-responsive">
        <table className="table border border-1 table-borderless table-custom-padding mb-md-5">
            <thead className="border">
                <tr>
                    <th className="text-muted">Service</th>
                    <th className="text-muted">Billing Frquency</th>
                    <th className="text-muted">Charges</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tickertape</td>
                    <td>Monthly / Annual</td>
                    <td>Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr className="table-light">
                    <td>Smallcase</td>
                    <td>Per transaction</td>
                    <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                    <td>Kite Connect</td>
                    <td>Monthly</td>
                    <td> Connect: 500 | Personal: Free</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
);
}

export default Charges;