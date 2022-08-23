// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../../components/texts/title";
import BlocoVoltarAvancar from "./blocoVoltarAvancar";

//Imagens

function BotoesNavegacao(props) {
  return (
    <Row className="align-items-center mt-5">
      <Col className="d-flex justify-content-center align-items-center">
        <BlocoVoltarAvancar />
      </Col>
    </Row>
  );
}

export default BotoesNavegacao;
