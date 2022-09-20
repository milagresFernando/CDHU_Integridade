// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import Destaques from "../../../../components/destaques";

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
          para acessar os conteúdos relacionados à LGPD. Lembre-se, também, de
          utilizar o e-mail <u>lgpd@cdhu.sp.gov.br</u> para obter informações e
          esclarecimentos relacionados à aplicação da LGPD em seu dia a dia de
          trabalho.
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
