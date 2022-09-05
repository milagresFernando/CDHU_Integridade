// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TextBlock from "../../../../components/texts/text_block";
import Title from "../../../../components/texts/title";

import ParallaxGrafismoBolaRabisco5 from "../../../scrollParallaxSvg/parallaxGrafismoBolaRabisco5";
import ParallaxGrafismoBolaRabisco6 from "../../../scrollParallaxSvg/parallaxGrafismoBolaRabisco6";
import ParallaxTresBolasDesfoque2 from "../../../scrollParallaxSvg/parallaxTresBolasDesfoque2";

import BlocoTextoComImgFlex from "./blocoTextoComImgFlex";

//Imagens

function PapeisEnvolvidos(props) {
  return (
    <section className="relative gradientPurplePink mt60 pb-3 spacingSection">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-5 text-white type3"
              content={<Fragment>{props.sectionTitle}</Fragment>}
              ballLeft="true"
            ></Title>
            <BlocoTextoComImgFlex />
          </Col>
        </Row>
      </Container>
      <ParallaxTresBolasDesfoque2 />
      <ParallaxGrafismoBolaRabisco5 />
      <ParallaxGrafismoBolaRabisco6 />
    </section>
  );
}

export default PapeisEnvolvidos;
