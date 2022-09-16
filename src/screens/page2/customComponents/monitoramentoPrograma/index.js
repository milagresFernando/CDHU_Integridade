// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import BlocoSaibaMais from "./blocoSaibaMais";
import BlocoFinalizou from "./blocoFinalizou";
import ParallaxGrafAmarelo from "../../../scrollParallaxSvg/parallaxGrafAmarelo";
import BotoesNavegacao from "./botoesNavegacao";
import BlocoVideo from "./blocoVideo";

//Imagens

function MonitoramentoPrograma(props) {
  return (
    <section className="relative gradientBlueEnd spacingSection">
      <ParallaxGrafAmarelo />
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
        <BlocoVideo typeGrafismo={3} />
        <BlocoSaibaMais />
        <BlocoFinalizou />
        <BotoesNavegacao />
      </Container>
    </section>
  );
}

export default MonitoramentoPrograma;
