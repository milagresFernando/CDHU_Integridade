// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import ParallaxGrafAmarelo2 from "../../../scrollParallaxSvg/parallaxGrafAmarelo2";
import ParallaxGrafAzul from "../../../scrollParallaxSvg/parallaxGrafAzul";
import ParallaxGrafismoBolaAzulVideo from "../../../scrollParallaxSvg/parallaxGrafismoBolaAzul";
import ParallaxGrafismoBolaRoxo from "../../../scrollParallaxSvg/parallaxGrafismoBolaRoxo";
import BlocoAccordionUmPorVez from "./blocoAccordionUmPorVez";
import BlocoQuatroOperacoes from "./blocoQuatroOperacoes";
import BlocoSaibaMais from "./blocoSaibaMais";

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
              className="titleSection mb-5"
              content={<Fragment>{props.sectionTitle}</Fragment>}
            >
              <span className="ballTitle"></span>
            </Title>
          </Col>
        </Row>
        <BlocoQuatroOperacoes />
      </Container>
      <div className="relative">
        <ParallaxGrafismoBolaAzulVideo />
        <ParallaxGrafismoBolaRoxo />
      </div>
      <Container>
        <BlocoAccordionUmPorVez />
        <BlocoSaibaMais />
      </Container>
    </section>
  );
}

export default OperacoesDocumentos;
