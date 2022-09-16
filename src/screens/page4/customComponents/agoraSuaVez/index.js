// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import ParallaxOndas from "../../../scrollParallaxSvg/parallaxOndas";
import BlocoQuizzUnicaResposta from "./blocoQuizzUnicaResposta";

//Imagens

function AgoraSuaVez(props) {
  return (
    <section className="relative spacingSection">
      <ParallaxOndas type="laranja" />

      <Container>
        <Row className="justify-content-center my-5">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mt-lg-5 mb-5 type2"
              content={<Fragment>{props.sectionTitle}</Fragment>}
              ballLeft="true"
            ></Title>
          </Col>
        </Row>
        <BlocoQuizzUnicaResposta />
      </Container>
    </section>
  );
}

export default AgoraSuaVez;
