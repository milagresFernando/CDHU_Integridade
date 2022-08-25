// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import ParallaxGrafAzul from "../../../scrollParallaxSvg/parallaxGrafAzul";
import BlocoAccordionUmPorVez from "./blocoAccordionUmPorVez";
import BlocoUnicaResposta from "./blocoUnicaResposta";
import ParallaxOndas from "../../../scrollParallaxSvg/parallaxOndas";
import BlocoSaibaMais from "./blocoSaibaMais";

//Imagens

function OperacoesDocumentos(props) {
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
        <BlocoAccordionUmPorVez />
      </Container>
    </section>
  );
}

export default OperacoesDocumentos;
