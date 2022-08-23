// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import { useParallax, useParallaxController } from "react-scroll-parallax";
import SvgParallax from "../../../components/images/svgParallax";

//Funcoes
import setBreakPoint from "../../../globalFunctions/setBreakPoint";
import debounceTimeOut from "../../../globalFunctions/debounceTimeOut";

function ParallaxGrafismoBolaRoxoVideo(props) {
  let valueDesk = [0, 40];
  let valueTablet = [0, 20];
  let valueMobile = [0, 10];

  const [monitoraMudanca, setMonitoraMudanca] = useState(false);
  const [grafismoBolaRoxoVideoValue, setGrafismoBolaRoxoVideoValue] = useState({
    translateY: valueDesk,
  });

  const grafismoBolaRoxoVideo = useParallax(grafismoBolaRoxoVideoValue);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setGrafismoBolaRoxoVideoValue({
          translateY: valueTablet,
        });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setGrafismoBolaRoxoVideoValue({
          translateY: valueMobile,
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
        translateY: valueTablet,
      });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setGrafismoBolaRoxoVideoValue({
        translateY: valueMobile,
      });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <SvgParallax
        svgName="GrafismoBolaRoxoVideo"
        className="top20 left0 grafismoBolaRoxoVideo"
        parallaxRef={grafismoBolaRoxoVideo.ref}
        monitoraMudanca={monitoraMudanca}
      />
    </Fragment>
  );
}

export default ParallaxGrafismoBolaRoxoVideo;
