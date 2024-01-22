import React from "react";

function Contact() {
  return (
    <section class="p-5" id="contactSection">
      <div class="container contact">
        <div class="row g-4">
          <div class="col-md-6">
            <h2 id="contact" class="text-center mb-4">
              Contact{" "}
            </h2>
            <form action="https://formspree.io/f/xzbnzlye" method="post">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label lead">
                  Name
                </label>
                <input
                  name="fname"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  *I will never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label lead">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div>
                <textarea
                  className="textarea"
                  name="comment"
                  form="usrform"
                  placeholder="Excited to work on your project! Share your vision, requirements, and any details you have in mind. Click 'Hire Me' to get in touch, and let's kickstart our collaboration!"></textarea>
              </div>
              <button name="submit" type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
