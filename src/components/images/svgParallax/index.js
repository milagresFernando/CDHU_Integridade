// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import SvgInterativo from "../svgInterativo";

import { useParallax, useParallaxController } from "react-scroll-parallax";

function SvgParallax(props) {
  const parallaxController = useParallaxController();

  //atualiza as posicoes dos elementos quando é utilizado o parallax
  useEffect(() => {
    setTimeout(() => {
      parallaxController.update();
    }, 1000);
  }, []);

  return (
    <div className="svgParallax" ref={props.parallaxRef}>
      <SvgInterativo
        className={`svgParallaxInner ${props.className ? props.className : ""}`}
        svgName={props.svgName}
        isParallaxSvg={true}
        responsive={props.responsive && props.responsive}
      />
    </div>
  );
}

export default SvgParallax;
