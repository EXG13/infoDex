import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

function footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row bg-dark text-white">
          <section class="mb-4 mt-2 text-center">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-outline-warning btn-floating m-1 rounded-circle"
              href="#!"
              role="button"
            >
              <i className="fa fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn btn-outline-warning btn-floating m-1 rounded-circle"
              href="#!"
              role="button"
            >
              <i className="fa fa-twitter"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn btn-outline-warning btn-floating m-1 rounded-circle"
              href="#!"
              role="button"
            >
              <i className="fa fa-instagram"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-outline-warning btn-floating m-1 rounded-circle"
              href="#!"
              role="button"
            >
              <i class="fa fa-linkedin"></i>
            </a>
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
