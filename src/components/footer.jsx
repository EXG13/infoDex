import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";


function footer(){
    return <div class="container-fluid mt-5 p-0">

    <footer class="bg-dark text-center text-white">
        {/* <!-- Grid container --> */}
        <div class="container p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section class="mb-4">
                {/* <!-- Facebook --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-facebook-f"></i></a>

                {/* <!-- Twitter --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-twitter"></i></a>

                {/* <!-- Google --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-google"></i></a>

                {/* <!-- Instagram --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-instagram"></i></a>

                {/* <!-- Linkedin --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-linkedin-in"></i></a>

                {/* <!-- Github --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-github"></i></a>
            </section>
            {/* <!-- Section: Social media --> */}
            <section>
                <ul class="footer-nav ms-0 ps-0 d-block d-md-flex justify-content-center text-center">
                    <li>
                        <a href="#aboutMeText">About me</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact-details">Contact</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </section>
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright: infoDex
        </div>
        {/* <!-- Copyright --> */}
    </footer>

</div>
};

export default footer;