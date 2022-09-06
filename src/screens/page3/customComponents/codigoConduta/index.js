// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import ParallaxOndas from "../../../scrollParallaxSvg/parallaxOndas";
import BlocoCarouselComImgEstatica from "./blocoCarouselComImgEstatica";
import BlocoListaComImgFlex from "./blocoListaComImgFlex";
import BlocoVideo from "./blocoVideo";
//Imagens

function CodigoConduta(props) {
  return (
    <section className="relative spacingSection">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-3"
              content={<Fragment>{props.sectionTitle}</Fragment>}
            >
              <span className="ballTitle"></span>
            </Title>
          </Col>
        </Row>

        <BlocoVideo typeGrafismo={3} />
      </Container>
      <ParallaxOndas type="roxo" />
      <Container className="spacingContainer">
        <BlocoListaComImgFlex />
        <BlocoCarouselComImgEstatica />
      </Container>
    </section>
  );
}

export default CodigoConduta;
