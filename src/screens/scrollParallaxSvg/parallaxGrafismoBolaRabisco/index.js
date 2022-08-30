// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import { useParallax, useParallaxController } from "react-scroll-parallax";
import SvgParallax from "../../../components/images/svgParallax";

//Funcoes
import setBreakPoint from "../../../globalFunctions/setBreakPoint";
import debounceTimeOut from "../../../globalFunctions/debounceTimeOut";

function ParallaxGrafismoBolaRabisco(props) {
  let valueDesk = 15;
  let valueTablet = 5;
  let valueMobile = 2;

  const [grafismoBolaRabiscoValue, setGrafismoBolaRabiscoValue] = useState({
    speed: valueDesk,
  });
  const grafismoBolaRabisco = useParallax(grafismoBolaRabiscoValue);
  const [monitoraMudanca, setMonitoraMudanca] = useState(false);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setGrafismoBolaRabiscoValue({ speed: valueTablet });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setGrafismoBolaRabiscoValue({ speed: valueMobile });
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
      setGrafismoBolaRabiscoValue({ speed: valueTablet });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setGrafismoBolaRabiscoValue({ speed: valueMobile });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <SvgParallax
        svgName="GrafismoBolaRabisco"
        className="grafismoBolaRabisco right-20 top-20"
        parallaxRef={grafismoBolaRabisco.ref}
        monitoraMudanca={monitoraMudanca}
      />
    </Fragment>
  );
}

export default ParallaxGrafismoBolaRabisco;
