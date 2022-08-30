// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import BlocoAccordionUmPorVez from "./blocoAccordionUmPorVez";

//Imagens

function OperacoesDocumentos(props) {
  return (
    <section className="relative">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-4"
              content={<Fragment>{props.sectionTitle}</Fragment>}
            >
              <span className="ballTitle"></span>
            </Title>
          </Col>
        </Row>
        <BlocoAccordionUmPorVez />
      </Container>
    </section>
  );
}

export default OperacoesDocumentos;
