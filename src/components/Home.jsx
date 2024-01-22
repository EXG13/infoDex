import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import mainArticle from "../mainArticle.json";
import otherArticles from "../otherArticles.json";

const Home = () => {
  return (
    <section className="p-5 bg-dark d-flex">
      <Container className="main-article mt-5">
        {/* Main Article */}
        <Row className="text-center g-4">
          {mainArticle.map((mainArticle) => (
            <Col key={mainArticle.id}>
              <div className="card bg-light text-dark w-75 mainCard">
                <img
                  src={mainArticle.image}
                  className="w-100"
                  alt={mainArticle.alt}
                />
                <div className="card-body text-center">
                  <h4 className="card-title mb-3">{mainArticle.title}</h4>
                  <p>{mainArticle.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {/* End of Main Article */}

        {/* Other Articles */}
        <Row className="text-center g-4 mt-5">
          {otherArticles.map((otherArticle) => (
            <Col key={otherArticle.id} md={4}>
              <div className="card h-100">
                <img
                  src={otherArticle.image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{otherArticle.title}</h5>
                  <p className="card-text">{otherArticle.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Last updated {otherArticle.lastUpdated}
                  </small>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {/* End of Other Articles */}
      </Container>
    </section>
  );
};

export default Home;
