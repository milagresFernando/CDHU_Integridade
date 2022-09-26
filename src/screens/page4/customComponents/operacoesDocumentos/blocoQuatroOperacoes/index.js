// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
// Components
import TextBlock from "../../../../../components/texts/text_block";
import FlexImgWithText from "../../../../../components/images/flexImgWithText";

// Imagens
import ParallaxIlustraTratamento from "../../../../scrollParallaxSvg/parallaxIlustraTratamento";
import ParallaxIlustraCompartilhado from "../../../../scrollParallaxSvg/parallaxIlustraCompartilhado";
import ParallaxIlustraRelatorio from "../../../../scrollParallaxSvg/parallaxIlustraRelatorio";
import ParallaxIlustraBancoDados from "../../../../scrollParallaxSvg/parallaxIlustraBancoDados";
import ParallaxIlustraAnonimizacao from "../../../../scrollParallaxSvg/parallaxIlustraAnonimizacao";
import ParallaxIlustraConsentimento from "../../../../scrollParallaxSvg/parallaxIlustraConsentimento";
import ParallaxIlustraFimQuatroOperacoes from "../../../../scrollParallaxSvg/parallaxIlustraFimQuatroOperacoes";
import ParallaxTresBolas from "../../../../scrollParallaxSvg/parallaxTresBolas";
import ParallaxDuasBolas from "../../../../scrollParallaxSvg/parallaxDuasBolas";
import ParallaxDuasBolas2 from "../../../../scrollParallaxSvg/parallaxDuasBolas2";

function BlocoQuatroOperacoes(props) {
  const textsBlock0 = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          A LGPD também dispõe das seguintes{" "}
          <strong>operações e documentos:</strong>
        </Fragment>
      ),
    },
  ];
  const textsBlock1 = [
    {
      tagElement: "h5",
      className: "title mb-0 bgWhite",
      content: <Fragment>TRATAMENTO</Fragment>,
    },
    {
      tagElement: "p",
      className: "bgWhite",
      content: (
        <Fragment>
          <strong>Toda operação realizada com dados pessoais, </strong>como as
          que se referem a coleta, produção, recepção, classificação,
          utilização, acesso, reprodução, transmissão, distribuição,
          processamento, arquivamento, armazenamento, eliminação, avaliação ou
          controle da informação, modificação, comunicação, transferência,
          difusão ou extração.
        </Fragment>
      ),
    },
  ];
  const textsBlock2 = [
    {
      tagElement: "h5",
      className: "title mb-0 bgWhite",
      content: <Fragment>USO COMPARTILHADO DE DADOS</Fragment>,
    },
    {
      tagElement: "p",
      className: "bgWhite",
      content: (
        <Fragment>
          Comunicação, difusão, transferência internacional, interconexão de
          dados pessoais ou tratamento compartilhado de bancos de dados pessoais
          por órgãos e entidades públicos no cumprimento de suas competências
          legais, ou entre esses e entes privados, reciprocamente, com{" "}
          <strong>autorização específica,</strong> para uma ou mais modalidades
          de tratamento permitidas por esses entes públicos, ou entre entes
          privados.
        </Fragment>
      ),
    },
  ];
  const textsBlock3 = [
    {
      tagElement: "h5",
      className: "title mb-0 bgWhite",
      content: (
        <Fragment>RELATÓRIO DE IMPACTO À PROTEÇÃO DE DADOS PESSOAIS</Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "bgWhite",
      content: (
        <Fragment>
          Documentação do controlador que contém a{" "}
          <strong>descrição dos processos de tratamento de dados</strong>{" "}
          pessoais que podem gerar riscos às liberdades civis e aos direitos
          fundamentais, bem como medidas, salvaguardas e mecanismos de mitigação
          de risco.
        </Fragment>
      ),
    },
  ];
  const textsBlock4 = [
    {
      tagElement: "h5",
      className: "title mb-0 bgWhite",
      content: <Fragment>BANCO DE DADOS</Fragment>,
    },
    {
      tagElement: "p",
      className: "bgWhite",
      content: (
        <Fragment>
          <strong>Conjunto estruturado</strong> de dados pessoais, estabelecido
          em um ou em vários locais, em suporte eletrônico ou físico.
        </Fragment>
      ),
    },
  ];
  const textsBlock5 = [
    {
      tagElement: "h5",
      className: "title mb-0 bgWhite",
      content: <Fragment>ANONIMIZAÇÃO</Fragment>,
    },
    {
      tagElement: "p",
      className: "bgWhite",
      content: (
        <Fragment>
          Utilização de <strong>meios técnicos</strong> razoáveis e disponíveis
          no momento do <strong>tratamento</strong>, por meio dos quais um dado{" "}
          <strong>perde a possibilidade de associação,</strong> direta ou
          indireta, a um indivíduo.
        </Fragment>
      ),
    },
  ];
  const textsBlock6 = [
    {
      tagElement: "h5",
      className: "title mb-0 bgWhite",
      content: <Fragment>CONSENTIMENTO</Fragment>,
    },
    {
      tagElement: "p",
      className: "bgWhite",
      content: (
        <Fragment>
          Manifestação livre, informada e inequívoca pela qual o titular{" "}
          <strong>concorda com o tratamento</strong> de seus dados pessoais para
          uma finalidade determinada.
        </Fragment>
      ),
    },
  ];

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col lg="10">
          <TextBlock textsBlock={textsBlock0} />
        </Col>
      </Row>
      <div className="linhaOperacoes">
        <Row className="justify-content-center relative">
          <Col lg="10" className="linhaMobile1">
            <FlexImgWithText
              rowClasses="align-items-center"
              imgSide="left"
              type="customElement"
              customElement={<ParallaxIlustraTratamento />}
              colMd="5"
              textsBlock={textsBlock1}
              breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
            />
          </Col>
          <ParallaxTresBolas />
        </Row>
        <Row className="justify-content-center relative">
          <Col lg="10" className="linhaMobile2">
            <FlexImgWithText
              rowClasses="align-items-center"
              imgSide="right"
              type="customElement"
              customElement={<ParallaxIlustraCompartilhado />}
              colMd="5"
              textsBlock={textsBlock2}
              breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
            />
          </Col>
        </Row>
        <Row className="justify-content-center relative">
          <Col lg="10" className="linhaMobile3">
            <FlexImgWithText
              rowClasses="align-items-center"
              imgSide="left"
              type="customElement"
              customElement={<ParallaxIlustraRelatorio />}
              colMd="5"
              textsBlock={textsBlock3}
              breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
            />
          </Col>
        </Row>
        <Row className="justify-content-center relative">
          <Col lg="10" className="linhaMobile4">
            <FlexImgWithText
              rowClasses="align-items-center"
              imgSide="right"
              type="customElement"
              customElement={<ParallaxIlustraBancoDados />}
              colMd="5"
              textsBlock={textsBlock4}
              breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
            />
          </Col>
          <ParallaxDuasBolas />
        </Row>
        <Row className="justify-content-center relative">
          <Col lg="10" className="linhaMobile1">
            <FlexImgWithText
              rowClasses="align-items-center"
              imgSide="left"
              type="customElement"
              customElement={<ParallaxIlustraAnonimizacao />}
              colMd="5"
              textsBlock={textsBlock5}
              breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
            />
          </Col>
        </Row>
        <Row className="justify-content-center mb-md-5 relative">
          <Col lg="10" className="linhaMobile2">
            <FlexImgWithText
              rowClasses="align-items-center"
              imgSide="right"
              type="customElement"
              customElement={<ParallaxIlustraConsentimento />}
              colMd="5"
              textsBlock={textsBlock6}
              breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
            />
          </Col>
          <ParallaxDuasBolas2 />
        </Row>
      </div>
      <Row className="justify-content-center mb-md-5 relative">
        <Col lg="10" className="">
          <ParallaxIlustraFimQuatroOperacoes />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoQuatroOperacoes;
