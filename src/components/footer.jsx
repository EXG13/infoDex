import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

function footer() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row bg-dark text-white">
                    {/* Section: Form */}
                    <section>
                        <form action="">
                            {/* Grid row */}
                            <div className="row d-flex justify-content-center">
                                {/* Grid column */}
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                {/* Grid column */}

                                {/* Grid column */}
                                <div className="col-md-5 col-12">
                                    {/* Email input */}
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" className="form-control" />
                                        <label className="form-label" htmlFor="form5Example2">Email address</label>
                                    </div>
                                </div>
                                {/* Grid column */}

                                {/* Grid column */}
                                <div className="col-auto">
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                        </form>
                    </section>


                    <section class="mb-4 mt-2 text-center">
                        {/* <!-- Facebook --> */}
                        <a
                            className="btn btn-outline-warning btn-floating m-1 rounded-circle"
                            href="#!"
                            role="button"
                        ><i className="fa fa-facebook-f"></i
                        ></a>

                        {/* <!-- Twitter --> */}
                        <a
                            className="btn btn-outline-warning btn-floating m-1 rounded-circle"
                            href="#!"
                            role="button"
                        ><i className="fa fa-twitter"></i
                        ></a>

                        {/* <!-- Instagram --> */}
                        <a
                            className="btn btn-outline-warning btn-floating m-1 rounded-circle"
                            href="#!"
                            role="button"
                        ><i className="fa fa-instagram"></i
                        ></a>

                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-outline-warning btn-floating m-1 rounded-circle"
                            href="#!"
                            role="button"
                        ><i class="fa fa-linkedin"></i
                        ></a>


                    </section>
                </div>

            </div>
            <div className="text-center bg-warning fw-semibold p-3">
                © 2024 Copyright: infoDex
            </div>
        </footer>
    );
}
export default footer;
