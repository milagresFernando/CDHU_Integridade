// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import Destaques from "../../../../../components/destaques";

function BlocoSaibaMais() {
  const textsBlock = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          <a
            href="https://www.cdhu.sp.gov.br/documents/20143/37066/Programa+de+Integridade+da+CDHU.pdf/d49bdd20-8d13-72f0-784b-a99c58973c95"
            target="_blank"
          >
            <strong>Clique aqui</strong>
          </a>{" "}
          para acessar o Programa de Integridade da CDHU na íntegra e saber mais{" "}
          <strong>detalhes de sua estrutura e aplicação.</strong>
        </Fragment>
      ),
    },
  ];
  return (
    <Row className="justify-content-center">
      <Col lg="10">
        <Destaques
          title="Saiba Mais"
          className="saibaMais mt-4 mb-5"
          textsBlock={textsBlock}
        />
      </Col>
    </Row>
  );
}

export default BlocoSaibaMais;
