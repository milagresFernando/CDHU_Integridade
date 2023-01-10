// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import ParallaxFinalizado from "../../../scrollParallaxSvg/parallaxFinalizado";

//Imagens

function Finalizado(props) {
  return (
    <Fragment>
      <section className={"relative"}>
        <ParallaxFinalizado />
      </section>
    </Fragment>
  );
}

export default Finalizado;
