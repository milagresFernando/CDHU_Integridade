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
          <a href="https://www.cdhu.sp.gov.br/" target="_blank">
            <strong>Clique aqui</strong>
          </a>{" "}
          para acessar o <strong>Código de Conduta e Integridade</strong> na
          íntegra e se apropriar melhor do conteúdo.
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
