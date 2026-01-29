function LeftSection({ image, productName, productDescription ,link1 ,linkName1,link2,linkName2 }) {
return (
<div className="container py-lg-5">
    <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img src={image} alt="product_img" className="img-fluid w-100 left-img" />
        </div>
        <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="fs-4">{productName}</h1>
            <p className="lh-lg mt-3">{productDescription}</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start mb-3">
                {linkName1 && (link1 ? (
                <a href={link1}>{linkName1} <i className="fa-solid fa-arrow-right ms-1"></i></a>
                ) : (<span className="text-muted"><a href="#">{linkName1} <i
                            className="fa-solid fa-arrow-right ms-1"></i></a></span>))}

                {linkName2 && (
                link2 ? (
                <a href={link2}>
                    {linkName2} <i className="fa-solid fa-arrow-right ms-1"></i>
                </a>
                ) : (
                <span className="text-muted">
                    <a href="#"> {linkName2} <i className="fa-solid fa-arrow-right ms-1"></i></a>
                </span>
                )
                )}

            </div>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                <a href="#"><img src="images/googlePlayBadge.svg" className="img-fluid" /></a>
                <a href="#"><img src="images/appstoreBadge.svg" className="img-fluid" /></a>
            </div>
        </div>
    </div>
</div>
);
}

export default LeftSection;