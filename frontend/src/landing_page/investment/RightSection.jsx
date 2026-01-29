function RightSection({ image, productName, productDescription }) {
    return (
        <div className="container p-3 p-lg-5">
            <div className="row align-items-center flex-column-reverse flex-md-row">
                <div className="col-12 col-md-5 text-center text-md-start mt-4 mt-md-0 ps-5">
                    <h1 className="fs-4">{productName}</h1>
                    <p className="lh-lg mt-3">{productDescription}</p>
                </div>
                <div className="col-12 col-md-7 text-center">
                    <img src={image} alt="product_img" className="img-fluid w-100 right-img"/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;