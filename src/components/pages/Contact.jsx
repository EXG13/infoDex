import React from "react";

function Contact() {
  return (
    <section className="d-flex p-5 bg-dark text-light" id="contactSection">
      <div className="container contact">
        <div className="row g-4">
          <div className="col-md-6">
            <h2 id="contact" className="text-center text-light mb-4">
              Contact
            </h2>
            <form action="https://formspree.io/f/xzbnzlye" method="post">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label lead">
                  Name
                </label>
                <input
                  name="fname"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-light">
                  *I will never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label lead">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div>
                <textarea
                  className="textarea"
                  name="comment"
                  form="usrform"
                  placeholder="For collaboration inquiries or if you have valuable information to share with our news aggregator platform, please feel free to reach out. We welcome partnerships, freelance opportunities, and reports on compelling news stories."></textarea>
              </div>
              <button
                name="submit"
                type="submit"
                className="btn btn-outline-warning w-25 contact-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
