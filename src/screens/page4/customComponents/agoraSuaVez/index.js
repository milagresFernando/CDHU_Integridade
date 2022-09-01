// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TextBlock from "../../../../components/texts/text_block";
import Title from "../../../../components/texts/title";
import ParallaxOndas from "../../../scrollParallaxSvg/parallaxOndas";
import BlocoQuizzUnicaResposta from "./blocoQuizzUnicaResposta";
import BlocoFinalizou from "./blocoFinalizou";
import BotoesNavegacao from "./botoesNavegacao";

//Imagens

function AgoraSuaVez(props) {
  return (
    <section className="relative spacingSection">
      <ParallaxOndas type="laranja" />

      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-5 type2"
              content={<Fragment>{props.sectionTitle}</Fragment>}
              ballLeft="true"
            ></Title>
          </Col>
        </Row>
        <BlocoQuizzUnicaResposta />

        <BlocoFinalizou />
        <BotoesNavegacao />
      </Container>
    </section>
  );
}

export default AgoraSuaVez;
