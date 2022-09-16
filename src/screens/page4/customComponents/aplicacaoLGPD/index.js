// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import ParallaxOndas from "../../../scrollParallaxSvg/parallaxOndas";
import BlocoTextoComImgFlex from "./blocoTextoComImgFlex";
import BlocoVideo from "./blocoVideo";

//Imagens

function AplicacaoLGPD(props) {
  return (
    <section className="relative spacingSection">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-5"
              content={<Fragment>{props.sectionTitle}</Fragment>}
              ballLeft="true"
            ></Title>
          </Col>
        </Row>
        <BlocoVideo typeGrafismo={3} />
      </Container>
      <ParallaxOndas type="azul" />
      <Container className="spacingContainer">
        <BlocoTextoComImgFlex />
      </Container>
    </section>
  );
}

export default AplicacaoLGPD;
