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

function BlocoListaComImgFlex() {
  const textsBlock1 = [
    {
      tagElement: "p",
      className: "mb-3",
      content: (
        <Fragment>
          A <strong>atuação</strong> da CDHU é embasada e norteada pelos
          seguintes <strong>princípios</strong>:
        </Fragment>
      ),
    },
  ];
  const listItens1 = [
    {
      className: "",
      content: <Fragment>Dignidade da pessoa humana;</Fragment>,
    },
    {
      className: "",
      content: <Fragment>Integridade;</Fragment>,
    },
    {
      className: "",
      content: <Fragment>Transparência;</Fragment>,
    },
    {
      className: "",
      content: <Fragment>Moralidade;</Fragment>,
    },
    {
      className: "",
      content: <Fragment>Impessoalidade;</Fragment>,
    },
    {
      className: "",
      content: <Fragment>Legalidade;</Fragment>,
    },
    {
      className: "",

      content: <Fragment>Conformidade;</Fragment>,
    },
    {
      className: "",
      content: <Fragment>Sustentabilidade; e</Fragment>,
    },
    {
      className: "",
      content: <Fragment>Eficiência.</Fragment>,
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
            imgUrl={imgUrl}
            imgUrlBreak={imgUrlBreak}
            colMd="5"
            colLg="6"
            tagList="ul"
            listClassName="column2"
            listItens={listItens1}
            breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoListaComImgFlex;
