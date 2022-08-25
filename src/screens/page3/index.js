// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import Footer from "../../components/footer";

import CanaisDenuncia from "./customComponents/canaisDenuncia";

import CodigoConduta from "./customComponents/codigoConduta";

function Page3() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (temaCor) {
      console.log(document.body.classList.value);
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
        <CodigoConduta sectionTitle="CÓDIGO DE CONDUTA E INTEGRIDADE DA CDHU" />
        <CanaisDenuncia sectionTitle="CANAIS DE DENÚNCIA" />
      </Wrapper>
    </Fragment>
  );
}

export default Page3;
