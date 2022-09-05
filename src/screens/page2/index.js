// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import Footer from "../../components/footer";

import ProgramaIntegridade from "./customComponents/programaIntegridade";

import MonitoramentoPrograma from "./customComponents/monitoramentoPrograma";

function Page2() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (temaCor) {
      document.body.classList.value.search("ios safari") !== -1
        ? (document.body.className = "ios safari")
        : (document.body.className = "");

      document.body.classList.add(temaCor);
    }
  }, [temaCor]);

  return (
    <Fragment>
      {/* <ProgressPage className="textBar" /> */}
      <Header setTemaCor={setTemaCor} pageAtual={2} className="" />

      <Wrapper className="">
        <ProgramaIntegridade sectionTitle="PROGRAMA DE INTEGRIDADE DA CDHU" />
        <MonitoramentoPrograma sectionTitle="Monitoramento do Programa de Integridade" />
      </Wrapper>
    </Fragment>
  );
}

export default Page2;
