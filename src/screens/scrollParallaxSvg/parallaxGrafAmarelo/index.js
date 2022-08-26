// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import { useParallax, useParallaxController } from "react-scroll-parallax";
import SvgParallax from "../../../components/images/svgParallax";

//Funcoes
import setBreakPoint from "../../../globalFunctions/setBreakPoint";
import debounceTimeOut from "../../../globalFunctions/debounceTimeOut";

function ParallaxGrafAmarelo(props) {
  let valueDesk = 50;
  let valueTablet = 25;
  let valueMobile = 12;

  const [grafismoAmareloValue, setGrafismoAmareloValue] = useState({
    speed: valueDesk,
  });
  const [monitoraMudanca, setMonitoraMudanca] = useState(false);

  const grafismoAmarelo = useParallax(grafismoAmareloValue);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setGrafismoAmareloValue({ speed: valueTablet });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setGrafismoAmareloValue({ speed: valueMobile });
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
      setGrafismoAmareloValue({ speed: valueTablet });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setGrafismoAmareloValue({ speed: valueMobile });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <SvgParallax
        svgName="GrafismoAmarelo"
        className="grafismoAmarelo left0 top20"
        parallaxRef={grafismoAmarelo.ref}
        monitoraMudanca={monitoraMudanca}
      />
    </Fragment>
  );
}

export default ParallaxGrafAmarelo;
