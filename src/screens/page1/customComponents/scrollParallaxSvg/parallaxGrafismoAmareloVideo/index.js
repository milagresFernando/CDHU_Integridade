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

function ParallaxGrafismoAmareloVideo(props) {
  const [grafismoAmareloVideoValue, setGrafismoAmareloVideoValue] = useState({
    speed: -30,
  });
  const grafismoAmareloVideo = useParallax(grafismoAmareloVideoValue);
  const [monitoraMudanca, setMonitoraMudanca] = useState(false);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setGrafismoAmareloVideoValue({ speed: -15 });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setGrafismoAmareloVideoValue({ speed: -7 });
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
      setGrafismoAmareloVideoValue({ speed: -15 });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setGrafismoAmareloVideoValue({ speed: -7 });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <SvgParallax
        svgName="GrafismoAmareloVideo"
        className="align-items-end justify-content-end left10"
        parallaxRef={grafismoAmareloVideo.ref}
        monitoraMudanca={monitoraMudanca}
        responsive
      />
    </Fragment>
  );
}

export default ParallaxGrafismoAmareloVideo;
