// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import ParallaxFinalizado from "../../../scrollParallaxSvg/parallaxFinalizado";

//Imagens

// Scorm
import { withScorm } from "react-scorm-provider";

function Finalizado(props) {
  useEffect(() => {
    props.sco.setStatus("completed");
  }, []);
  return (
    <Fragment>
      <section className={"relative"}>
        <ParallaxFinalizado />
      </section>
    </Fragment>
  );
}

export default withScorm()(Finalizado);
