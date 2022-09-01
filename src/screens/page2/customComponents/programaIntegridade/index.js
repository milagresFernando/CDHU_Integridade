// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import ParallaxOndas from "../../../scrollParallaxSvg/parallaxOndas";
import BlocoVideoIntroducao2 from "./blocoVideoIntroducao2";
import Bloco3Cards from "./bloco3Cards";

//Imagens

function ProgramaIntegridade(props) {
  return (
    <section className="relative spacingSection">
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
        <BlocoVideoIntroducao2 />
      </Container>

      <ParallaxOndas type="laranja" />

      <Container className="spacingContainer">
        <Bloco3Cards />
      </Container>
    </section>
  );
}

export default ProgramaIntegridade;
