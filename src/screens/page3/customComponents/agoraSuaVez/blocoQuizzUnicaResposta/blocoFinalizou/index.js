// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col, Image } from "react-bootstrap";
import TextBlock from "../../../../../../components/texts/text_block";
import iconeMenu from "../../../../../assets/images/iconeMenu.svg";

//Imagens

function BlocoFinalizou(props) {
  const textsBlock1 = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Você finalizou o conteúdo sobre o Programa de Integridade.
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          <strong>Clique no Menu</strong>
          <span className="px-2">
            <Image
              src={iconeMenu}
              className="mx-auto"
              loading="lazy"
              alt=""
              fluid
              style={{ maxHeight: "35px" }}
            />
          </span>
          para acessar os <strong>pilares</strong> da Integridade na CDHU.
        </Fragment>
      ),
    },
  ];
  return (
    <Row className="justify-content-center">
      <Col lg="10">
        <TextBlock textsBlock={textsBlock1} />
      </Col>
    </Row>
  );
}

export default BlocoFinalizou;
