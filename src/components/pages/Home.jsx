import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
// The following jsons are for testing purposes only:
// import mainArticle from "../../mainArticle.json";
// import otherArticles from "../../otherArticles.json";

const Home = () => {
  const [mainArticle, setMainArticle] = useState([]);
  const [otherArticles, setOtherArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        // "https://newsapi.org/v2/everything?q=Crypto&from=2024-01-25&sortBy=popularity&apiKey=2ec4ed69665f4fc38dd8b2187b111b1e"
        // "https://newsapi.org/v2/everything?q=blockchain&apiKey=2ec4ed69665f4fc38dd8b2187b111b1e"
        "https://newsapi.org/v2/everything?q=blockchain&domains=cointelegraph.com,coindesk.com&sortBy=publishedAt&apiKey=714f828bb00148998bf0674ff205ef26"
      )
      .then((res) => {
        setMainArticle([res.data.articles[0]]);
        setOtherArticles(res.data.articles.slice(1));
      });
  }, []);

  return (
    <section className=" bg-dark d-flex">
      <Container className="main-article mt-5 w-100">
        {/* Main Article */}
        <Row className="text-center">
          {mainArticle.map((news) => (
            <Col key={news.title}>
              <div className="card bg-light text-dark w-50 mainCard">
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  {/* Note to self - "noopener noreferrer" are pretty important for security and privacy. Read more about it later */}
                  <img src={news.urlToImage} className="w-100" />
                </a>
                <div className="card-body text-center">
                  <h4 className="card-title mb-3">{news.title}</h4>
                  <p className="card-text">{news.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {/* End of Main Article */}

        {/* Other Articles */}
        <Row className="text-center g-4 mt-5">
          {otherArticles.map((otherNews) => (
            <Col key={otherNews.id} md={4}>
              <div className="card h-100">
                <a
                  href={otherNews.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={otherNews.urlToImage} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title secondaryTitle fs-5">
                    {otherNews.title}
                  </h5>
                  <p className="card-text">{otherNews.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Last updated {otherNews.publishedAt}
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
