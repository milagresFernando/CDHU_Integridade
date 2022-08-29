// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import ParallaxOndas from "../../../scrollParallaxSvg/parallaxOndas";

import BlocoCarouselComImgEstatica from "./blocoCarouselComImgEstatica";
import BlocoListaComImgFlex from "./blocoListaComImgFlex";

import BlocoVideoIntroducao4 from "./blocoVideoIntroducao4";

//Imagens

function CodigoConduta(props) {
  return (
    <section className="relative ">
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
        <BlocoVideoIntroducao4 />
      </Container>
      <ParallaxOndas type="roxo" />
      <Container>
        <BlocoListaComImgFlex />
        <BlocoCarouselComImgEstatica />
      </Container>
    </section>
  );
}

export default CodigoConduta;
