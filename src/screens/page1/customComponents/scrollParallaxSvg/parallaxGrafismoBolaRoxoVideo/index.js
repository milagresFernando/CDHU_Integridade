// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import SvgInterativo from "../../../../../components/images/svgInterativo";

import { useParallax, useParallaxController } from "react-scroll-parallax";
import SvgParallax from "../../../../../components/images/svgParallax";

function ParallaxGrafismoBolaRoxoVideo(props) {
  const grafismoBolaRoxoVideo = useParallax({ translateY: [0, 40] });

  return (
    <Fragment>
      <SvgParallax
        svgName="GrafismoBolaRoxoVideo"
        className="align-items-start "
        parallaxRef={grafismoBolaRoxoVideo.ref}
      />
    </Fragment>
  );
}

export default ParallaxGrafismoBolaRoxoVideo;
