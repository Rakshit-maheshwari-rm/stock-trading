function Price() {
return (
<div className="container p-lg-4 pt-5">
    <div className="row">
        <div className="col-lg-5 col-12 p-md-5">
            <h1 className="fs-3 text-muted mb-3">Unbeatable pricing</h1>
            <p className="opacity-75">We pioneered the concept of discount broking and price transparency in India. Flat
                fees and no hidden charges.</p>
            <a href="/pricing">See pricing &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-lg-7 col-12 p-md-1">
            <div className="row mt-5 text-center text-lg-start price">
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <img src="images/pricing0.svg" alt="zero_img" className="img-fluid" />
                        </div>
                        <div className="col ps-0">
                            <p className="mb-0 opacity-75">Free account opening</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <img src="images/pricing0.svg" alt="zero_img" className="img-fluid" />
                        </div>
                        <div className="col ps-0">
                            <p className="mb-0 opacity-75">Free equity delivery and direct mutual funds</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <img src="images/pricing20.svg" alt="zero_img" className="img-fluid" />
                        </div>
                        <div className="col ps-0">
                            <p className="mb-0 opacity-75">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}
export default Price;