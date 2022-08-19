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

function ParallaxGrafismoBolaRoxoVideo(props) {
  const [monitoraMudanca, setMonitoraMudanca] = useState(false);
  const [grafismoBolaRoxoVideoValue, setGrafismoBolaRoxoVideoValue] = useState({
    translateY: [0, 40],
  });

  const grafismoBolaRoxoVideo = useParallax(grafismoBolaRoxoVideoValue);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setGrafismoBolaRoxoVideoValue({
          translateY: [0, 20],
        });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setGrafismoBolaRoxoVideoValue({
          translateY: [0, 10],
        });
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
      setGrafismoBolaRoxoVideoValue({
        translateY: [0, 20],
      });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setGrafismoBolaRoxoVideoValue({
        translateY: [0, 10],
      });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <SvgParallax
        svgName="GrafismoBolaRoxoVideo"
        className="align-items-start "
        parallaxRef={grafismoBolaRoxoVideo.ref}
        monitoraMudanca={monitoraMudanca}
        responsive
      />
    </Fragment>
  );
}

export default ParallaxGrafismoBolaRoxoVideo;
