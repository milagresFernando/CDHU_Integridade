// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";

import { useParallax, useParallaxController } from "react-scroll-parallax";

function ScrollParallax(props) {
  const parallaxRotate = useParallax({ rotate: [0, 360] });
  const parallaxUp = useParallax({ speed: 15 });
  const parallaxDown = useParallax({ speed: -15 });
  const parallaxScale = useParallax({ scale: [0, 1] });

  //atualiza as posicoes dos elementos quando é utilizado o parallax
  const parallaxController = useParallaxController();
  useEffect(() => {
    parallaxController.update();
  }, []);

  return (
    <section>
      <Container>
        <Row className="">
          <Col xs="12">
            <Title
              typeH="2"
              className="titleDivisor"
              content={<Fragment>{props.sectionTitle}</Fragment>}
            />
            <hr />
          </Col>
        </Row>
        <Row className="ParallaxWrapper">
          <Col xs="3">
            <div className="boxParallaxExample" ref={parallaxRotate.ref}>
              <p>Rotate</p>
            </div>
          </Col>
          <Col xs="3">
            <div className="boxParallaxExample" ref={parallaxUp.ref}>
              <p>Up</p>
            </div>
          </Col>
          <Col xs="3">
            <div className="boxParallaxExample" ref={parallaxDown.ref}>
              <p>Down</p>
            </div>
          </Col>
          <Col xs="3">
            <div className="boxParallaxExample" ref={parallaxScale.ref}>
              <p>Scale</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ScrollParallax;
