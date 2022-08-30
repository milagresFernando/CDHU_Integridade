// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TextBlock from "../../../../components/texts/text_block";
import Title from "../../../../components/texts/title";
import BlocoTextoComImgFlex from "./blocoTextoComImgFlex";

//Imagens

function PapeisEnvolvidos(props) {
  return (
    <section className="relative gradientPurplePink pt-5 pb-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-5 text-white"
              content={<Fragment>{props.sectionTitle}</Fragment>}
              ballLeft="true"
            ></Title>
            <BlocoTextoComImgFlex />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PapeisEnvolvidos;
