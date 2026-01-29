function Demo({ open, onClose }) {
    if (!open) return null;

    return (
        <>
            <div className="modal-backdrop show"></div>
            <div className="modal show d-block" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Learning Project — Not affiliated with Zerodha.</h5>
                        </div>
                        <div className="modal-body">
                            <p>This application is a demo built for learning purposes only.</p>
                            <p>No real trading or financial transactions occur.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={onClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Demo;