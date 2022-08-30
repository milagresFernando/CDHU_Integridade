// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import { useParallax, useParallaxController } from "react-scroll-parallax";
import SvgParallax from "../../../components/images/svgParallax";

//Funcoes
import setBreakPoint from "../../../globalFunctions/setBreakPoint";
import debounceTimeOut from "../../../globalFunctions/debounceTimeOut";

function ParallaxGrafismoLinhaEnrolada(props) {
  let valueDesk = 10;
  let valueTablet = 5;
  let valueMobile = 2;

  const [grafismoLinhaEnroladaValue, setGrafismoLinhaEnroladaValue] = useState({
    speed: valueDesk,
  });
  const grafismoLinhaEnrolada = useParallax(grafismoLinhaEnroladaValue);
  const [monitoraMudanca, setMonitoraMudanca] = useState(false);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setGrafismoLinhaEnroladaValue({ speed: valueTablet });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setGrafismoLinhaEnroladaValue({ speed: valueMobile });
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
      setGrafismoLinhaEnroladaValue({ speed: valueTablet });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setGrafismoLinhaEnroladaValue({ speed: valueMobile });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <div className="relative linhaEnroladaWrapper">
        <SvgParallax
          svgName="GrafismoLinhaEnrolada"
          className="grafismoLinhaEnrolada left0 top0"
          parallaxRef={grafismoLinhaEnrolada.ref}
          monitoraMudanca={monitoraMudanca}
        />
      </div>
    </Fragment>
  );
}

export default ParallaxGrafismoLinhaEnrolada;
