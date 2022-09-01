// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TextBlock from "../../../../components/texts/text_block";
import Title from "../../../../components/texts/title";
import BlocoFinalizou from "../../../page2/customComponents/monitoramentoPrograma/blocoFinalizou";
import BotoesNavegacao from "../../../page2/customComponents/monitoramentoPrograma/botoesNavegacao";

import ParallaxGrafismoLinhaEnrolada from "../../../scrollParallaxSvg/parallaxGrafismoLinhaEnrolada";
import BlocoQuizzUnicaResposta from "./blocoQuizzUnicaResposta";

//Imagens

function AgoraSuaVez(props) {
  const textsBlock = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          A seguir, serão apresentadas <strong>situações</strong> relacionadas a
          uma determinada conduta do Código de Conduta e Integridade da CDHU. Em
          cada uma delas você fará um <strong>quiz de múltipla escolha</strong>{" "}
          e saberá, ao final, <strong>como agir</strong> corretamente.
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "",
      content: <Fragment>Vamos lá?</Fragment>,
    },
  ];
  return (
    <section className="relative gradientBlueEnd">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-5 type2"
              content={<Fragment>{props.sectionTitle}</Fragment>}
              ballLeft="true"
            ></Title>
            <TextBlock textsBlock={textsBlock} />
          </Col>
        </Row>
      </Container>
      <ParallaxGrafismoLinhaEnrolada />

      <BlocoQuizzUnicaResposta />

      <Container>
        <BlocoFinalizou />
        <BotoesNavegacao />
      </Container>
    </section>
  );
}

export default AgoraSuaVez;
