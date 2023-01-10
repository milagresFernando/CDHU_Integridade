// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../../components/texts/title";
import BlocoVoltarAvancar from "./blocoVoltarAvancar";

//Imagens

function BotoesNavegacao(props) {
  return (
    <Row className="align-items-center mt-lg-5 mt-3 ">
      <Col className="d-flex justify-content-center align-items-center mt-lg-5 mt-3 relative">
        <BlocoVoltarAvancar
          completeScorm={props.completeScorm && props.completeScorm}
          btnCompleteScorm={props.btnCompleteScorm && props.btnCompleteScorm}
        />
      </Col>
    </Row>
  );
}

export default BotoesNavegacao;