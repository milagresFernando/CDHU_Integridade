// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import SvgInterativo from "../../../../../components/images/svgInterativo";

import { useParallax, useParallaxController } from "react-scroll-parallax";
import SvgParallax from "../../../../../components/images/svgParallax";

function ParallaxGrafismoBolaAzulVideo(props) {
  const grafismoBolaAzulVideo = useParallax({ speed: 10 });

  return (
    <Fragment>
      <SvgParallax
        svgName="GrafismoBolaAzulVideo"
        className="align-items-start "
        parallaxRef={grafismoBolaAzulVideo.ref}
      />
    </Fragment>
  );
}

export default ParallaxGrafismoBolaAzulVideo;
