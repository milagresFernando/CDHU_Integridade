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

function ParallaxGrafAzul(props) {
  const [grafismoAzulValue, setGrafismoAzulValue] = useState({ speed: 50 });
  const [monitoraMudanca, setMonitoraMudanca] = useState(false);

  const grafismoAzul = useParallax(grafismoAzulValue);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setGrafismoAzulValue({ speed: 25 });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setGrafismoAzulValue({ speed: 12 });
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
      setGrafismoAzulValue({ speed: 25 });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setGrafismoAzulValue({ speed: 12 });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <SvgParallax
        svgName="GrafismoAzul"
        className="align-items-end"
        parallaxRef={grafismoAzul.ref}
        monitoraMudanca={monitoraMudanca}
        responsive
      />
    </Fragment>
  );
}

export default ParallaxGrafAzul;
