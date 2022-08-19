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

function ParallaxGrafismoBolaAzulVideo(props) {
  const [monitoraMudanca, setMonitoraMudanca] = useState(false);
  const [grafismoBolaAzulVideoValue, setGrafismoBolaAzulVideoValue] = useState({
    speed: 10,
  });

  const grafismoBolaAzulVideo = useParallax(grafismoBolaAzulVideoValue);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setGrafismoBolaAzulVideoValue({ speed: 5 });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setGrafismoBolaAzulVideoValue({ speed: 2 });
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
      setGrafismoBolaAzulVideoValue({ speed: 5 });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setGrafismoBolaAzulVideoValue({ speed: 2 });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <SvgParallax
        svgName="GrafismoBolaAzulVideo"
        className="align-items-start "
        parallaxRef={grafismoBolaAzulVideo.ref}
        monitoraMudanca={monitoraMudanca}
        responsive
      />
    </Fragment>
  );
}

export default ParallaxGrafismoBolaAzulVideo;
