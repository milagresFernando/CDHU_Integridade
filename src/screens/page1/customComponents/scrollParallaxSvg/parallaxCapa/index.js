// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import SvgInterativo from "../../../../../components/images/svgInterativo";

import { useParallax, useParallaxController } from "react-scroll-parallax";
import SvgParallax from "../../../../../components/images/svgParallax";

//Funcoes
import setBreakPoint from "../../../../../globalFunctions/setBreakPoint";
import debounceTimeOut from "../../../../../globalFunctions/debounceTimeOut";

function ParallaxCapa(props) {
  const [cabecaValue, setCabecaValue] = useState({ speed: -10 });
  const [linhaValue, setLinhaValue] = useState({ speed: 20 });
  const [ondaValeu, setOndaValue] = useState({ speed: 30 });

  const capaCabeca = useParallax(cabecaValue);
  const capaLinha = useParallax(linhaValue);
  const capaOnda = useParallax(ondaValeu);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setCabecaValue({ speed: -5 });
        setLinhaValue({ speed: 10 });
        setOndaValue({ speed: 15 });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setCabecaValue({ speed: -2 });
        setLinhaValue({ speed: 3 });
        setOndaValue({ speed: 5 });
      }
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    if (
      window.innerWidth <= setBreakPoint("lg") &&
      window.innerWidth > setBreakPoint("sm")
    ) {
      setCabecaValue({ speed: -5 });
      setLinhaValue({ speed: 10 });
      setOndaValue({ speed: 15 });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setCabecaValue({ speed: -2 });
      setLinhaValue({ speed: 3 });
      setOndaValue({ speed: 5 });
    }
  }, []);

  return (
    <Fragment>
      <SvgInterativo
        className=""
        svgName="CapaBg"
        isParallaxSvg={true}
        responsive
      />
      <SvgParallax
        svgName="CapaCabeca"
        svgParallaxClassName="zindex3"
        className=""
        parallaxRef={capaCabeca.ref}
        responsive
      />
      <SvgParallax
        svgName="CapaOnda"
        svgParallaxClassName="zindex1"
        className=""
        parallaxRef={capaOnda.ref}
        responsive
      />
      <SvgParallax
        svgName="CapaLinha"
        svgParallaxClassName="zindex2"
        className=""
        parallaxRef={capaLinha.ref}
        responsive
      />
    </Fragment>
  );
}

export default ParallaxCapa;
