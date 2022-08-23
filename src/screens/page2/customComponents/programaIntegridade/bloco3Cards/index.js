// React Elements/Hooks
import { Fragment } from "react";

// Components
import TextBlock from "../../../../../components/texts/text_block";
import imgCard1 from "../../../../assets/images/icoMao.svg";
import imgCard2 from "../../../../assets/images/icoFolha.svg";
import imgCard3 from "../../../../assets/images/icoBalanca.svg";
import CardSimple from "../../../../../components/cards/cardSimple";
import { Col, Row } from "react-bootstrap";

//Imagens

function Bloco3Cards() {
  const textsBlock1 = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          O Programa de Integridade da CDHU tem como{" "}
          <strong>principais objetivos:</strong>
        </Fragment>
      ),
    },
  ];

  const card1Items = {
    images: {
      imgCard: imgCard1,
      imgSide: "top",
      className: "imgTela2",
    },
    contents: {
      contentClassName: "",
      textBlocks: [
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              <strong>consolidar as políticas e ações</strong> conduzidas por
              diversas unidades da estrutura organizacional da CDHU, em
              consonância com as respectivas atribuições, evidenciando o
              compromisso da empresa para a disseminação de{" "}
              <strong>boas práticas de gestão</strong> e a constante promoção de
              um ambiente corporativo <strong>transparente e ético;</strong>
            </Fragment>
          ),
        },
      ],
    },
  };
  const card2Items = {
    images: {
      imgCard: imgCard2,
      imgSide: "top",
      className: "imgTela2",
    },
    contents: {
      contentClassName: "",
      textBlocks: [
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              adotar as políticas e instrumentos normativos voltados para{" "}
              <strong>prevenção, monitoramento, detecção e resposta</strong> em
              relação aos atos lesivos previstos na legislação, que têm como
              foco <strong>coibir conduta inapropriada</strong> do público-alvo,
              permeando todas as áreas da empresa;
            </Fragment>
          ),
        },
      ],
    },
  };
  const card3Items = {
    images: {
      imgCard: imgCard3,
      imgSide: "top",
      className: "imgTela2",
    },
    contents: {
      contentClassName: "",
      textBlocks: [
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              incentivar a <strong>observância e aplicação</strong> do código de
              conduta e integridade e a denúncia de irregularidades, por meio do{" "}
              <strong>canal de denúncias.</strong>
            </Fragment>
          ),
        },
      ],
    },
  };

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xs="10">
          <TextBlock textsBlock={textsBlock1} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col lg="10">
          <Row>
            <Col xs="12" sm="6" md="4" className="d-flex">
              <CardSimple
                className="tela2"
                cardItems={card1Items}
                breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
              />
            </Col>
            <Col xs="12" sm="6" md="4" className="d-flex">
              <CardSimple
                className="tela2"
                cardItems={card2Items}
                breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
              />
            </Col>
            <Col xs="12" sm="6" md="4" className="d-flex">
              <CardSimple
                className="tela2"
                cardItems={card3Items}
                breakContent="sm" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
    </Fragment>
  );
}

export default Bloco3Cards;
