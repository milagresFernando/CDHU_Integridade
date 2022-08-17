// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import BlocoVideoIntroducao from "./blocoVideoIntroducao";
import BlocoImportante from "./blocoImportante";
import BlocoFinalizou from "./blocoFinalizou";
import ParallaxGrafAzul from "../scrollParallaxSvg/parallaxGrafAzul";

//Imagens

function Introducao(props) {
  return (
    <section className="relative">
      <ParallaxGrafAzul />
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-4"
              content={<Fragment>{props.sectionTitle}</Fragment>}
            >
              <span className="ballTitle"></span>
            </Title>
          </Col>
        </Row>

        <BlocoVideoIntroducao />
        <BlocoImportante />
        <BlocoFinalizou />
      </Container>
    </section>
  );
}

export default Introducao;
