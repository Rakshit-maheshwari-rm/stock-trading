function LeftSection({ image, productName, productDescription}) {
return (
<div className="container p-lg-5">
    <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img src={image} alt="product_img" className="img-fluid w-100 left-img" />
        </div>
        <div className="col-12 col-md-6 text-center text-md-start pe-5">
            <h1 className="fs-4">{productName}</h1>
            <p className="lh-lg mt-3">{productDescription}</p>
        </div>
    </div>
</div>
);
}

export default LeftSection;