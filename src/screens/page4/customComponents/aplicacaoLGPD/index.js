// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TextBlock from "../../../../components/texts/text_block";
import Title from "../../../../components/texts/title";
import ParallaxOndas from "../../../scrollParallaxSvg/parallaxOndas";
import BlocoTextoComImgFlex from "./blocoTextoComImgFlex";
import BlocoVideoIntroducao5 from "./blocoVideoIntroducao5";

//Imagens

function AplicacaoLGPD(props) {
  return (
    <section className="relative spacingSection">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-3"
              content={<Fragment>{props.sectionTitle}</Fragment>}
              ballLeft="true"
            ></Title>
          </Col>
        </Row>
        <BlocoVideoIntroducao5 />
      </Container>
      <ParallaxOndas type="azul" />
      <Container className="spacingContainer">
        <BlocoTextoComImgFlex />
      </Container>
    </section>
  );
}

export default AplicacaoLGPD;
