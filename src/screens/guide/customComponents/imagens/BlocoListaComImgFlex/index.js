// React Elements/Hooks
import { Fragment } from "react";

// Components
import Title from "../../../../../components/texts/title";
import FlexImgWithText from "../../../../../components/images/flexImgWithText";
import { Row, Col } from "react-bootstrap";

// Imagens
import imgUrl from "../../../../assets/images/img-Float.jpg";
import imgUrlBreak from "../../../../assets/images/img-Full.jpg";

function BlocoListaComImgFlex() {
  const listItens1 = [
    {
      className: "",

      content: (
        <Fragment>
          Texto 1 <strong>texto bold</strong> planet from the Sun and the
          second-smallest planet in the Solar System after Mercury. In English,
          Mars carries a name of the Roman god of war and is often referred to
          as the
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          from the Sun and the second-smallest planet in the Solar System after
          Mercury. In English, Mars carries a name of the Roman god of war and
          is often referred to
        </Fragment>
      ),
      anchor: "http://google.com",
    },
    {
      className: "",
      content: (
        <Fragment>
          Texto 1 <strong>texto bold</strong> planet from the Sun and the
          second-smallest planet in the Solar System after Mercury. In English,
          Mars carries a name of the Roman god of war and is often referred to
          as the
        </Fragment>
      ),
    },
  ];

  return (
    <Fragment>
      <Row>
        <Col>
          <Title
            typeH="4"
            className=""
            content={<Fragment>Lista e imagens flex</Fragment>}
          />
        </Col>
      </Row>
      <FlexImgWithText
        rowClasses="align-items-center"
        imgSide="fullRight"
        imgUrl={imgUrl}
        imgUrlBreak={imgUrlBreak}
        colMd="5"
        colLg="6"
        tagList="ul"
        listClassName=""
        listItens={listItens1}
        breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
      />
      <hr />
    </Fragment>
  );
}

export default BlocoListaComImgFlex;
