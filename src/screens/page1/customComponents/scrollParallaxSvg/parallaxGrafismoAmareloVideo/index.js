// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import SvgInterativo from "../../../../../components/images/svgInterativo";

import { useParallax, useParallaxController } from "react-scroll-parallax";
import SvgParallax from "../../../../../components/images/svgParallax";

function ParallaxGrafismoAmareloVideo(props) {
  const grafismoAmareloVideo = useParallax({ speed: -30 });

  return (
    <Fragment>
      <SvgParallax
        svgName="GrafismoAmareloVideo"
        className="align-items-end justify-content-end left10"
        parallaxRef={grafismoAmareloVideo.ref}
        responsive="true"
      />
    </Fragment>
  );
}

export default ParallaxGrafismoAmareloVideo;
