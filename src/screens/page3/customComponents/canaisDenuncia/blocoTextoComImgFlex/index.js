// React Elements/Hooks
import { Fragment } from "react";

// Components
import FlexImgWithText from "../../../../../components/images/flexImgWithText";
import { Row, Col } from "react-bootstrap";

// Imagens
import ParallaxIlustraDenuncia from "../../../../scrollParallaxSvg/parallaxIlustraDenuncia";

function BlocoTextoComImgFlex() {
  const textsBlock = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Os canais de denúncia são os <strong>meios de comunicação</strong>{" "}
          pelos quais todos os empregados e demais públicos, interno e externo,
          devem utilizar para registrar{" "}
          <strong>dúvidas, sugestões, reclamações e denúncias</strong>{" "}
          relacionadas à ética, fraude ou a qualquer desvio de conduta{" "}
          <strong>que envolva a CDHU</strong> e seus diversos parceiros,
          definidos no Código de Conduta e Integridade.
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          As denúncias serão registradas e tratadas pelo{" "}
          <strong>Comitê de Ética</strong>, que é um colegiado multidisciplinar,
          independente, que tem por objetivo ser um{" "}
          <strong>órgão de assessoramento</strong> da diretoria colegiada nas
          questões que envolverem <strong>violações às normas</strong>{" "}
          estabelecidas no Código de Conduta e Integridade da CDHU.
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          As <strong>consequências aplicadas</strong> ao desvio de conduta podem
          ser: ações de melhoria contínua, sanções disciplinares previstas na
          legislação trabalhista e procedimentos legais cabíveis.
        </Fragment>
      ),
    },
  ];
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col lg="10">
          <FlexImgWithText
            rowClasses="align-items-center"
            imgSide="fullLeft"
            type="customElement"
            customElement={<ParallaxIlustraDenuncia />}
            colMd="5"
            colLg="6"
            textsBlock={textsBlock}
            breakContent="lg" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoTextoComImgFlex;
