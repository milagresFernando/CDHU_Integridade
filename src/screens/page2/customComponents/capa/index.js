// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import ParallaxCapa from "../../../scrollParallaxSvg/parallaxCapa";

//Imagens

function Capa(props) {
  return (
    <Fragment>
      <section className={"relative capa"}>
        <ParallaxCapa />
      </section>
    </Fragment>
  );
}

export default Capa;
