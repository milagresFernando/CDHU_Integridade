// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import BlocoVideo from "./blocoVideo";
import BlocoImportante from "./blocoImportante";
import BlocoFinalizou from "./blocoFinalizou";
import ParallaxGrafAzul from "../../../scrollParallaxSvg/parallaxGrafAzul";
import BotoesNavegacao from "./botoesNavegacao";

//Imagens

function Introducao(props) {
  return (
    <section className="relative gradientBlueEnd">
      <ParallaxGrafAzul />
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-3"
              content={<Fragment>{props.sectionTitle}</Fragment>}
            >
              <span className="ballTitle"></span>
            </Title>
          </Col>
        </Row>
        <BlocoVideo typeGrafismo={1} />
        <BlocoImportante />
        <BlocoFinalizou />
        <BotoesNavegacao />
      </Container>
    </section>
  );
}

export default Introducao;
