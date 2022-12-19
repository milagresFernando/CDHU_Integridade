// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col, Image } from "react-bootstrap";
import TextBlock from "../../../../../components/texts/text_block";
import Btn from "../../../../../components/buttons";

//Imagens

function BlocoFinalizou(props) {
  const textsBlock1 = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Parabéns! Você finalizou o curso <strong>Integridade</strong>.
        </Fragment>
      ),
    },
  ];
  return (
    <Row className="justify-content-center">
      <Col lg="10">
        <TextBlock textsBlock={textsBlock1} />
        <Btn
          className={`btn-padrao btn-rounded btn-final`}
          size="md"
          onClick={() => props.btnFunction()}
        >
          Clique neste botão para fechar o navegador.
        </Btn>
      </Col>
    </Row>
  );
}

export default BlocoFinalizou;
