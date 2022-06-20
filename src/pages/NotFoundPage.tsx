import "../assets/css/NotFoundPage.css"

function NotFoundPage() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!
                        </h1>
                        <h2>
                            404 Not Found
                        </h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <a href="https://jawher-b.gitbook.io/github-repositories/" className="btn btn-primary btn-lg">
                                View Documentation </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotFoundPage;