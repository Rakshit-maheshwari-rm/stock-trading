function Hero() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row mt-4 p-4 text-center justify-content-center">
                <h1 className="fs-3">Charges</h1>
                <h2 className="fs-5 text-muted py-3 mb-lg-5">List of all charges and taxes</h2>
                <div className="row gy-lg-5">
                    <div className="col-12 col-md-4">
                        <img src="images/pricing0.svg" alt="zero_img" className="img-fluid h-50" />
                        <h1 className="fs-3 py-md-2">Free equity delivery</h1>
                        <p className="text-muted lh-lg">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                     <div className="col-12 col-md-4">
                        <img src="images/pricing20.svg" alt="twenty_img" className="img-fluid h-50"/>
                        <h1 className="fs-3 py-md-2">Intraday and F&O trades</h1>
                        <p className="text-muted lh-lg">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                     <div className="col-12 col-md-4">
                        <img src="images/pricing0.svg" alt="zero_img" className="img-fluid h-50"/>
                        <h1 className="fs-3 py-md-2">Free direct MF</h1>
                        <p className="text-muted lh-lg">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;