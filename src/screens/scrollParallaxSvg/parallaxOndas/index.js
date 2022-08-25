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

function ParallaxOndas(props) {
  let ondaFrenteSvg = "";
  let ondaTrasSvg = "";
  // props.type seta a cor do svg de ondas, pode ser azul, roxo ou laranja
  switch (props.type) {
    case "azul":
      ondaFrenteSvg = "OndaFrenteAzul";
      ondaTrasSvg = "OndaTrasAzul";
      break;
    case "roxo":
      ondaFrenteSvg = "OndaFrenteRoxo";
      ondaTrasSvg = "OndaTrasRoxo";
      break;
    case "laranja":
      ondaFrenteSvg = "OndaFrenteLaranja";
      ondaTrasSvg = "OndaTrasLaranja";
      break;
    default:
      ondaFrenteSvg = "OndaFrenteLaranja";
      ondaTrasSvg = "OndaTrasLaranja";
      break;
  }
  let linhaOndasValueDesk = -8;
  let linhaOndasValueTablet = -5;
  let linhaOndasValueMobile = -5;

  let ondaFrenteValueDesk = 3;
  let ondaFrenteValueTablet = 3;
  let ondaFrenteValueMobile = 3;

  let ondaTrasValueDesk = -5;
  let ondaTrasValueTablet = -3;
  let ondaTrasValueMobile = -3;

  const [monitoraMudanca, setMonitoraMudanca] = useState(false);
  const [linhaOndasValue, setLinhaOndasValue] = useState({
    speed: linhaOndasValueDesk,
  });
  const [ondaFrenteValue, setOndaFrenteValue] = useState({
    speed: ondaFrenteValueDesk,
  });
  const [ondaTrasValue, setOndaTrasValue] = useState({
    speed: ondaTrasValueDesk,
  });

  const linhaOndas = useParallax(linhaOndasValue);
  const ondaFrente = useParallax(ondaFrenteValue);
  const ondaTras = useParallax(ondaTrasValue);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setLinhaOndasValue({ speed: linhaOndasValueTablet });
        setOndaFrenteValue({ speed: ondaFrenteValueTablet });
        setOndaTrasValue({ speed: ondaTrasValueTablet });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setLinhaOndasValue({ speed: linhaOndasValueMobile });
        setOndaFrenteValue({ speed: ondaFrenteValueMobile });
        setOndaTrasValue({ speed: ondaTrasValueMobile });
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
      setLinhaOndasValue({ speed: linhaOndasValueTablet });
      setOndaFrenteValue({ speed: ondaFrenteValueTablet });
      setOndaTrasValue({ speed: ondaTrasValueTablet });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setLinhaOndasValue({ speed: linhaOndasValueMobile });
      setOndaFrenteValue({ speed: ondaFrenteValueMobile });
      setOndaTrasValue({ speed: ondaTrasValueMobile });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <div className="relative ondasWrapper">
        <SvgParallax
          svgName={ondaFrenteSvg}
          svgParallaxClassName="zindex3"
          className="ondasBg ondaFrente top10"
          parallaxRef={ondaFrente.ref}
          monitoraMudanca={monitoraMudanca}
        />
        <SvgParallax
          svgName="LinhaOndas"
          svgParallaxClassName="zindex2"
          className="ondasBg linhaOndas"
          parallaxRef={linhaOndas.ref}
          monitoraMudanca={monitoraMudanca}
        />
        <SvgParallax
          svgName={ondaTrasSvg}
          svgParallaxClassName="zindex1"
          className="ondasBg ondaTras "
          parallaxRef={ondaTras.ref}
          monitoraMudanca={monitoraMudanca}
        />
      </div>
    </Fragment>
  );
}

export default ParallaxOndas;
