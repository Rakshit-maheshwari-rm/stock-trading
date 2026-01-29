import "./style.css"

function Team() {
    return (
        <div className="container mb-lg-5 p-4">
            <h1 className="fs-3 text-muted text-center mb-2 mb-5">People</h1>
            <div className="row align-items-center">
                <div className="col-md-5 col-12 text-center">
                    <img src="images/nithin-kamath.jpg" alt="nithin-kamath_img" className="img-fluid founder"/>
                    <p className="fs-5 mt-3">Nithin Kamath</p>
                    <p className="fs-6 text-muted">Founder, CEO</p>
                </div>
                <div className="col-md-7 col-12 p-md-5 text-start">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced 
                        during his decade long stint as a trader. Today, Zerodha has changed the landscape 
                        of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market 
                        Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Team;