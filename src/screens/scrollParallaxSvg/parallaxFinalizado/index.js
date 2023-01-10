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

function ParallaxFinalizado(props) {
  let n1ValueDesk = -10;
  let n1ValueTablet = -5;
  let n1ValueMobile = -4;

  let n2ValueDesk = 20;
  let n2ValueTablet = 10;
  let n2ValueMobile = 3;

  const [monitoraMudanca, setMonitoraMudanca] = useState(false);
  const [n1Value, setN1Value] = useState({ speed: n1ValueDesk });
  const [n2Value, setN2Value] = useState({ speed: n2ValueDesk });

  const finalizadoN1 = useParallax(n1Value);
  const finalizadoN2 = useParallax(n2Value);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setN1Value({ speed: n1ValueTablet });
        setN2Value({ speed: n2ValueTablet });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setN1Value({ speed: n1ValueMobile });
        setN2Value({ speed: n2ValueMobile });
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
      setN1Value({ speed: n1ValueTablet });
      setN2Value({ speed: n2ValueTablet });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setN1Value({ speed: n1ValueMobile });
      setN2Value({ speed: n2ValueMobile });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <SvgInterativo
        className=""
        svgName="FinalizadoN1"
        isParallaxSvg={true}
        responsive
      />
      <SvgParallax
        svgName="FinalizadoN2"
        svgParallaxClassName="zindex2"
        className=""
        parallaxRef={finalizadoN1.ref}
        monitoraMudanca={monitoraMudanca}
        responsive
      />
      <SvgParallax
        svgName="FinalizadoN3"
        svgParallaxClassName="zindex3"
        className=""
        parallaxRef={finalizadoN2.ref}
        monitoraMudanca={monitoraMudanca}
        responsive
      />
      {/* <SvgParallax
        svgName="CapaOnda"
        svgParallaxClassName="zindex1"
        className=""
        parallaxRef={finalizadoN3.ref}
        monitoraMudanca={monitoraMudanca}
        responsive
      /> */}
    </Fragment>
  );
}

export default ParallaxFinalizado;
