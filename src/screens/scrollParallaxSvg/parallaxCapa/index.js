// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import SvgInterativo from "../../../components/images/svgInterativo";

import { useParallax, useParallaxController } from "react-scroll-parallax";
import SvgParallax from "../../../components/images/svgParallax";

//Funcoes
import setBreakPoint from "../../../globalFunctions/setBreakPoint";
import debounceTimeOut from "../../../globalFunctions/debounceTimeOut";

function ParallaxCapa(props) {
  let cabecaValueDesk = -10;
  let cabecaValueTablet = -5;
  let cabecaValueMobile = -4;

  let linhaValueDesk = 20;
  let linhaValueTablet = 10;
  let linhaValueMobile = 3;

  let ondaValueDesk = 30;
  let ondaValueTablet = 15;
  let ondaValueMobile = 6;

  const [monitoraMudanca, setMonitoraMudanca] = useState(false);
  const [cabecaValue, setCabecaValue] = useState({ speed: cabecaValueDesk });
  const [linhaValue, setLinhaValue] = useState({ speed: linhaValueDesk });
  const [ondaValeu, setOndaValue] = useState({ speed: ondaValueDesk });

  const capaCabeca = useParallax(cabecaValue);
  const capaLinha = useParallax(linhaValue);
  const capaOnda = useParallax(ondaValeu);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setCabecaValue({ speed: cabecaValueTablet });
        setLinhaValue({ speed: linhaValueTablet });
        setOndaValue({ speed: ondaValueTablet });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setCabecaValue({ speed: cabecaValueMobile });
        setLinhaValue({ speed: linhaValueMobile });
        setOndaValue({ speed: ondaValueMobile });
      }
      setMonitoraMudanca(!monitoraMudanca);
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
      setCabecaValue({ speed: cabecaValueTablet });
      setLinhaValue({ speed: linhaValueTablet });
      setOndaValue({ speed: ondaValueTablet });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setCabecaValue({ speed: cabecaValueMobile });
      setLinhaValue({ speed: linhaValueMobile });
      setOndaValue({ speed: ondaValueMobile });
    }
    setMonitoraMudanca(!monitoraMudanca);
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
        svgName="CapaLinha"
        svgParallaxClassName="zindex3"
        className=""
        parallaxRef={capaLinha.ref}
        monitoraMudanca={monitoraMudanca}
        responsive
      />
      <SvgParallax
        svgName="CapaCabeca"
        svgParallaxClassName="zindex2"
        className=""
        parallaxRef={capaCabeca.ref}
        monitoraMudanca={monitoraMudanca}
        responsive
      />
      <SvgParallax
        svgName="CapaOnda"
        svgParallaxClassName="zindex1"
        className=""
        parallaxRef={capaOnda.ref}
        monitoraMudanca={monitoraMudanca}
        responsive
      />
    </Fragment>
  );
}

export default ParallaxCapa;
