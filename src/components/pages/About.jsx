import React from "react";
import OurTeam from "..//../team.json";
import about from "..//../assets/about.png";

function About() {
  return (
    <section className="bg-dark text-light p-4">
      <div className="container">
        <div
          id="about"
          className="row d-sm-flex justify-content-around align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <h1 className="py-3 py-md-5">About infoDEX</h1>
            <p className="lead">
              Explore the world of blockchain and cryptocurrency news
              effortlessly at infoDEX - your reliable source for concise updates
              from trusted sources. Our mission is simple: to be your go-to
              platform for timely information in the crypto space, welcoming
              both enthusiasts and newcomers. Opting for infoDEX means gaining
              access to comprehensive coverage. We deliver a holistic view of
              current trends and technological advancements through curated news
              from diverse, trusted sources, ensuring dependable information to
              keep you well-informed. Join us in creating a vibrant and
              knowledgeable community interested in blockchain and
              cryptocurrency. Your feedback, suggestions, and insights are
              valuable contributions to a space where every viewpoint is
              respected. Thank you for choosing infoDEX as your dedicated Crypto
              News Hub!
            </p>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12">
            <img className="img-fluid" src={about} alt="" />
          </div>
        </div>
      </div>

      <div className="container mt-5 ">
        <h2 className="text-center py-5">Our Team</h2>
        <div className="row g-4">
          {OurTeam.map((props) => {
            return (
              <div
                key={props.id}
                className="cardContainer col-lg-3 col-md-4 col-sm-12">
                <div className="card border-warning bg-dark text-light">
                  <img src={props.image} class="card-img-top" alt="" />
                  <div className="card-body d-flex justify-content-around">
                    <h3 className="card-title">{props.title}</h3>
                    <div className="icon-container align-items-center">
                      <a href={props.github} className="icon ">
                        <i className="fa fa-github fa-lg"></i>
                      </a>
                      <a href={props.linkedin} className="icon">
                        <i className="fa fa-linkedin fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
