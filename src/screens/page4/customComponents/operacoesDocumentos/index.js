// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import ParallaxGrafAmarelo2 from "../../../scrollParallaxSvg/parallaxGrafAmarelo2";
import ParallaxGrafAzul from "../../../scrollParallaxSvg/parallaxGrafAzul";
import BlocoAccordionUmPorVez from "./blocoAccordionUmPorVez";
import BlocoQuatroOperacoes from "./blocoQuatroOperacoes";

//Imagens

function OperacoesDocumentos(props) {
  return (
    <section className="relative spacingSection">
      <ParallaxGrafAzul />
      <ParallaxGrafAmarelo2 />
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
        <BlocoQuatroOperacoes />
        <BlocoAccordionUmPorVez />
      </Container>
    </section>
  );
}

export default OperacoesDocumentos;
