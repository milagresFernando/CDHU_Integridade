// React Elements/Hooks
import { Fragment } from "react";

// Components
import FlexImgWithText from "../../../../../components/images/flexImgWithText";
import { Row, Col } from "react-bootstrap";
import TextBlock from "../../../../../components/texts/text_block";

// Imagens
import ParallaxIlustraAplicacao from "../../../../scrollParallaxSvg/parallaxIlustraAplicacao";

function BlocoTextoComImgFlex() {
  const textsBlock1 = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Conheça, a seguir, algumas <strong>definições importantes</strong>{" "}
          para compreender melhor a LGPD:
        </Fragment>
      ),
    },
  ];
  const textsBlock2 = [
    {
      tagElement: "h4",
      className: "title mb-1",
      content: <Fragment>Dados pessoais</Fragment>,
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          São <strong>informações</strong> relacionadas
          <strong> à pessoa natural identificada ou identificável</strong>.
        </Fragment>
      ),
    },
    {
      tagElement: "h4",
      className: "title mb-1",
      content: <Fragment>Dado pessoal sensível</Fragment>,
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Dado pessoal sobre origem racial ou étnica, convicção religiosa,
          opinião política, filiação a sindicato ou a organização de caráter
          religioso, filosófico ou político, dado referente à saúde ou à vida
          sexual, dado genético ou biométrico, quando vinculado a uma pessoa
          natural.
        </Fragment>
      ),
    },
    {
      tagElement: "h4",
      className: "title mb-1",
      content: <Fragment>Dado pessoal anonimizado</Fragment>,
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Dado relativo ao titular que{" "}
          <strong>não possa ser identificado</strong>, considerando a utilização
          de meios técnicos razoáveis e disponíveis na ocasião de seu
          tratamento.
        </Fragment>
      ),
    },
  ];
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col lg="10">
          <TextBlock textsBlock={textsBlock1} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg="10">
          <FlexImgWithText
            rowClasses="align-items-center"
            imgSide="fullLeft"
            type="customElement"
            customElement={<ParallaxIlustraAplicacao />}
            colMd="5"
            colLg="6"
            textsBlock={textsBlock2}
            breakContent="lg" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoTextoComImgFlex;
