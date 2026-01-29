import "./style.css";

function Issues() {
return (
<div className="container my-5">
    <div className="row">
        <div className="col-12 col-lg-8 px-lg-5 support-icon">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item my-4">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#accountOpening">
                            <i className="fa-solid fa-circle-plus me-3"></i>
                            Account Opening
                        </button>
                    </h2>
                    <div id="accountOpening" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="#">Resident individual</a></li>
                                <li><a href="#">Minor</a></li>
                                <li><a href="#">Non Resident Indian (NRI)</a></li>
                                <li><a href="#">Company, Partnership, HUF and LLP</a></li>
                                <li><a href="#">Glossary</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-4">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#zerodhaAccount">
                            <i className="fa-regular fa-circle-user me-3"></i>
                            Your Zerodha Account
                        </button>
                    </h2>
                    <div id="zerodhaAccount" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="#">Your Profile</a></li>
                                <li><a href="#">Account modification</a></li>
                                <li><a href="#">Client Master Report (CMR) and DP</a></li>
                                <li><a href="#">Nomination</a></li>
                                <li><a href="#">Transfer and conversion of securities</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-4">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#kite">
                            <i className="fa-solid fa-circle-left me-3"></i>
                            Kite
                        </button>
                    </h2>
                    <div id="kite" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="#">IPO</a></li>
                                <li><a href="#">Trading FAQs</a></li>
                                <li><a href="#">MTF and Margins</a></li>
                                <li><a href="#">Charts and orders</a></li>
                                <li><a href="#">Alerts and Nudges</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-4">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#funds">
                            <i className="fa-solid fa-indian-rupee-sign me-3"></i>
                            Funds
                        </button>
                    </h2>
                    <div id="funds" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="#">Add money</a></li>
                                <li><a href="#">Withdraw money</a></li>
                                <li><a href="#">Add bank accounts</a></li>
                                <li><a href="#">eMandates</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-4">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#console">
                            <i className="fa-regular fa-circle-dot me-3"></i>
                            Console
                        </button>
                    </h2>
                    <div id="console" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Corporate actions</a></li>
                                <li><a href="#">Funds statement</a></li>
                                <li><a href="#">Reports</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-4">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#coin">
                            <i className="fa-solid fa-coins me-3"></i>
                            Coin
                        </button>
                    </h2>
                    <div id="coin" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li><a href="#">Mutual funds</a></li>
                                <li><a href="#">NPS</a></li>
                                <li><a href="#">Payments and Orders</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-4 ps-lg-5 mt-4 support-side">
            <div className="side-top px-3 py-3">
                <ul>
                    <li><a href="#">BSE StAR mutual fund platform downtime</a></li>
                    <li className="mt-3"><a href="#">Adjustment of F&O contracts of NUVAMA on account of Split</a></li>
                </ul>
            </div>
            <div className="table-responsive mt-4">
                <table className="table table-bordered">
                    <thead>
                        <tr className="table-light">
                            <th className="p-3 text-muted">Quick links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3"><a href="#">1. Track account opening</a></td>
                        </tr>
                        <tr>
                            <td className="p-3"><a href="#">2. Track segment activation</a></td>
                        </tr>
                        <tr>
                            <td className="p-3"><a href="#">3. Intraday margins</a></td>
                        </tr>
                        <tr>
                            <td className="p-3"><a href="#">4. Kite user manual</a></td>
                        </tr>
                        <tr>
                            <td className="p-3"><a href="#">5. Learn how to create a ticket</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
);
}

export default Issues;