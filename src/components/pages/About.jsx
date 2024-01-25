import React from "react";
import OurTeam from "..//../team.json";
import about from "..//../assets/about.png";

function About() {
  return (
    <section className="bg-dark text-light p-4">
      <div className="container d-sm-flex justify-content-around align-items-center">
        <div className="container ms-5">
          <h1 className="py-5">About infoDEx</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            totam ipsum aspernatur modi recusandae reiciendis officia doloribus
            laborum consequatur maxime molestiae, id ullam quidem aperiam harum
            minus dolor sint vel nulla eos dicta! Aliquam optio quidem ad ex
            adipisci eveniet magnam odit numquam, excepturi ipsam sunt beatae
            eaque nesciunt quaerat officia quis error nobis dolores, neque
            veritatis eos atque. Nihil asperiores culpa pariatur exercitationem
            sed quos, ipsa illum, enim unde aliquam dignissimos eius hic dicta
            itaque, dolor nisi! Quasi accusamus laborum voluptate facilis
            tempore mollitia, totam blanditiis sapiente quae, non debitis odio.
            Doloremque excepturi voluptate ad aliquid quam accusamus aut.
          </p>
        </div>
        <img className="aboutImg" src={about} alt="" />
      </div>

      <div className="container mt-5 ">
        <h2 className="text-center py-5">Our Team</h2>
        <div className="row g-4">
          {OurTeam.map((props) => {
            return (
              <div
                key={props.id}
                className="cardContainer col-lg-3 col-md-4 col-sm-12"
              >
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
