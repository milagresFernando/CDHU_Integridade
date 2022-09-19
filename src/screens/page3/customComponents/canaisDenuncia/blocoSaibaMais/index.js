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
            href="https://www.cdhu.sp.gov.br/documents/20143/37066/C%C3%B3digo+conduta_altera%C3%A7%C3%A3o+2019.pdf/e8dbd604-3576-5855-c2a4-9e69eff87120"
            target="_blank"
          >
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
