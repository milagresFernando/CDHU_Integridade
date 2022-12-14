// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import ParallaxGrafAzul from "../../../scrollParallaxSvg/parallaxGrafAzul";
import ParallaxGrafismoBolaRabisco2 from "../../../scrollParallaxSvg/parallaxGrafismoBolaRabisco2";
import BlocoListas from "./blocoListas";

//Imagens

function Referencias(props) {
  return (
    <section className="relative spacingSection gradientBlueEnd">
      <ParallaxGrafAzul />
      <ParallaxGrafismoBolaRabisco2 />
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
      </Container>

      <Container>
        <Row className="justify-content-center">
          <BlocoListas />
        </Row>
      </Container>
    </section>
  );
}

export default Referencias;
