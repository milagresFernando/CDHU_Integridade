// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";

import BlocoSaibaMais from "../canaisDenuncia/blocoSaibaMais";
import ParallaxGrafAzul from "../../../scrollParallaxSvg/parallaxGrafAzul";

//Imagens

function CanaisDenuncia(props) {
  return (
    <section className="relative gradientBlueEnd">
      <ParallaxGrafAzul />
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-5"
              content={<Fragment>{props.sectionTitle}</Fragment>}
            >
              <span className="ballTitle"></span>
            </Title>
          </Col>
        </Row>
        <BlocoSaibaMais />
      </Container>
    </section>
  );
}

export default CanaisDenuncia;
