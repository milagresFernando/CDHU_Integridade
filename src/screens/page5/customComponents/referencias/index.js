// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../components/texts/title";
import ParallaxGrafAzul from "../../../scrollParallaxSvg/parallaxGrafAzul";
import ParallaxGrafismoBolaRabisco2 from "../../../scrollParallaxSvg/parallaxGrafismoBolaRabisco2";
import BlocoListas from "./blocoListas";
import BlocoFinalizou from "./blocoFinalizou";

// Scorm
import { withScorm } from "react-scorm-provider";

//Imagens

function Referencias(props) {
  useEffect(() => {
    props.sco.setStatus("completed");
  }, []);

  function btnFunction() {
    props.sco.setStatus("completed");

    setTimeout(() => {
      if (window.CloseWindow && typeof window.CloseWindow === "function") {
        window.CloseWindow();
      } else {
        window.close();
      }
    }, 1000);
  }
  return (
    <section className="relative spacingSection gradientBlueEnd">
      <ParallaxGrafAzul />
      <ParallaxGrafismoBolaRabisco2 />
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <Title
              typeH="3"
              className="titleSection mb-5"
              content={<Fragment>{props.sectionTitle}</Fragment>}
            >
              <span className="ballTitle"></span>
            </Title>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <BlocoListas />
        </Row>
        <BlocoFinalizou btnFunction={btnFunction} />
      </Container>
    </section>
  );
}

export default withScorm()(Referencias);
