// React Elements/Hooks
import { Fragment } from "react";

// Components
import Title from "../../../../../components/texts/title";
import FlexImgWithText from "../../../../../components/images/flexImgWithText";
import { Row, Col } from "react-bootstrap";

// Imagens
import imgUrl from "../../../../assets/images/img-Float.jpg";
import imgUrlBreak from "../../../../assets/images/img-Full.jpg";
import TextBlock from "../../../../../components/texts/text_block";

function BlocoTextoComImgFlex() {
  const textsBlock = [
    {
      tagElement: "p",
      className: "corTextoClaro",
      content: (
        <Fragment>
          Na LGPD, são apresentados os seguintes papéis envolvidos no tratamento
          de dados:
        </Fragment>
      ),
    },
  ];
  const textsBlock1 = [
    {
      tagElement: "h5",
      className: "title corTextoClaro mb-1",
      content: <Fragment>Titular</Fragment>,
    },
    {
      tagElement: "p",
      className: "corTextoClaro",
      content: (
        <Fragment>
          Pessoa natural <strong>a quem se referem os dados pessoais</strong>{" "}
          que são objeto de tratamento.
        </Fragment>
      ),
    },
  ];
  const textsBlock2 = [
    {
      tagElement: "h5",
      className: "title corTextoClaro mb-1",
      content: <Fragment>Controlador</Fragment>,
    },
    {
      tagElement: "p",
      className: "corTextoClaro",
      content: (
        <Fragment>
          Pessoa natural ou jurídica, de direito público ou privado, a quem
          competem as <strong>decisões referentes ao tratamento</strong> de
          dados pessoais. É considerado um <strong>agente de tratamento</strong>
          .
        </Fragment>
      ),
    },
  ];
  const textsBlock3 = [
    {
      tagElement: "h5",
      className: "title corTextoClaro mb-1",
      content: <Fragment>Operador</Fragment>,
    },
    {
      tagElement: "p",
      className: "corTextoClaro",
      content: (
        <Fragment>
          Pessoa natural ou jurídica, de direito público ou privado, que{" "}
          <strong>realiza o tratamento</strong> de dados pessoais em nome do
          controlador. Também é considerado um{" "}
          <strong>agente de tratamento</strong>.
        </Fragment>
      ),
    },
  ];
  const textsBlock4 = [
    {
      tagElement: "h5",
      className: "title corTextoClaro mb-1",
      content: <Fragment>Encarregado</Fragment>,
    },
    {
      tagElement: "p",
      className: "corTextoClaro",
      content: (
        <Fragment>
          Pessoa indicada pelo controlador e pelo operador para atuar como{" "}
          <strong>canal de comunicação</strong> entre o controlador, os
          titulares de dados e a Autoridade Nacional de Proteção de Dados
          (ANPD).
        </Fragment>
      ),
    },
  ];
  return (
    <Fragment>
      <Row>
        <Col>
          <TextBlock textsBlock={textsBlock} />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FlexImgWithText
            rowClasses="align-items-center"
            imgSide="top"
            imgUrl={imgUrl}
            imgUrlBreak={imgUrlBreak}
            colLg="12"
            textsBlock={textsBlock1}
            breakContent="lg" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </Col>
        <Col lg="6">
          <FlexImgWithText
            rowClasses="align-items-center"
            imgSide="top"
            imgUrl={imgUrl}
            imgUrlBreak={imgUrlBreak}
            colLg="12"
            textsBlock={textsBlock2}
            breakContent="lg" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </Col>
        <Col lg="6">
          <FlexImgWithText
            rowClasses="align-items-center"
            imgSide="top"
            imgUrl={imgUrl}
            imgUrlBreak={imgUrlBreak}
            colLg="12"
            textsBlock={textsBlock3}
            breakContent="lg" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </Col>
        <Col lg="6">
          <FlexImgWithText
            rowClasses="align-items-center"
            imgSide="top"
            imgUrl={imgUrl}
            imgUrlBreak={imgUrlBreak}
            colLg="12"
            textsBlock={textsBlock4}
            breakContent="lg" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoTextoComImgFlex;
