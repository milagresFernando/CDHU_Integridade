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

function ParallaxIlustraOperador(props) {
  let n1ValueDesk = 10;
  let n1ValueTablet = 4;
  let n1ValueMobile = 4;

  let n2ValueDesk = -7;
  let n2ValueTablet = -2;
  let n2ValueMobile = -2;

  let n3ValueDesk = 5;
  let n3ValueTablet = 3;
  let n3ValueMobile = 3;

  const [monitoraMudanca, setMonitoraMudanca] = useState(false);
  const [n1Value, setN1Value] = useState({ speed: n1ValueDesk });
  const [n2Valeu, setN2Value] = useState({ speed: n2ValueDesk });
  const [n3Value, setN3Value] = useState({ speed: n3ValueDesk });

  const n1 = useParallax(n1Value);
  const n2 = useParallax(n2Valeu);
  const n3 = useParallax(n3Value);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setN1Value({ speed: n1ValueTablet });
        setN2Value({ speed: n2ValueTablet });
        setN3Value({ speed: n3ValueTablet });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setN1Value({ speed: n1ValueMobile });
        setN2Value({ speed: n2ValueMobile });
        setN3Value({ speed: n3ValueMobile });
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
      setN3Value({ speed: n3ValueTablet });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setN1Value({ speed: n1ValueMobile });
      setN2Value({ speed: n2ValueMobile });
      setN3Value({ speed: n3ValueMobile });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <div className="baseSize ilustraOperador">
        <SvgParallax
          svgName="OperadorN1"
          svgParallaxClassName="zindex3"
          className="ilustrasBase operadorBase"
          parallaxRef={n1.ref}
          monitoraMudanca={monitoraMudanca}
        />
        <SvgParallax
          svgName="OperadorN2"
          svgParallaxClassName="zindex2"
          className="ilustrasBase operadorBase"
          parallaxRef={n2.ref}
          monitoraMudanca={monitoraMudanca}
        />
        <SvgParallax
          svgName="OperadorN3"
          svgParallaxClassName="zindex1"
          className="ilustrasBase operadorBase"
          parallaxRef={n3.ref}
          monitoraMudanca={monitoraMudanca}
        />
      </div>
    </Fragment>
  );
}

export default ParallaxIlustraOperador;
