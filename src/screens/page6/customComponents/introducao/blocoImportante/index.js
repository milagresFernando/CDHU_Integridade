// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import Destaques from "../../../../../components/destaques";

function BlocoImportante() {
  const textsBlock = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          A <strong>adoção dos princípios e condutas</strong> estabelecidos no
          Programa de Integridade da CDHU é <strong>essencial</strong> para
          garantir a confiabilidade, a eficiência e a integridade de um{" "}
          <strong>ambiente corporativo</strong> ético e transparente.
        </Fragment>
      ),
    },
  ];
  return (
    <Row className="justify-content-center">
      <Col lg="10">
        <Destaques
          title="Importante"
          className="importante mt-4 mb-5"
          textsBlock={textsBlock}
        />
      </Col>
    </Row>
  );
}

export default BlocoImportante;
