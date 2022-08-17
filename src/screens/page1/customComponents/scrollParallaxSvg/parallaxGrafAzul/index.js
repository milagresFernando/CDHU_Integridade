// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import SvgInterativo from "../../../../../components/images/svgInterativo";

import { useParallax, useParallaxController } from "react-scroll-parallax";
import SvgParallax from "../../../../../components/images/svgParallax";

function ParallaxGrafAzul(props) {
  const grafismoAzul = useParallax({ speed: 50 });

  return (
    <Fragment>
      <SvgParallax
        svgName="GrafismoAzul"
        className="align-items-end"
        parallaxRef={grafismoAzul.ref}
      />
    </Fragment>
  );
}

export default ParallaxGrafAzul;
