// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import AgoraSuaVez from "./customComponents/agoraSuaVez";
import OperacoesDocumentos from "./customComponents/operacoesDocumentos";
import AplicacaoLGPD from "./customComponents/aplicacaoLGPD";
import PapeisEnvolvidos from "./customComponents/papeisEnvolvidos";
import ParallaxGrafismoLinhaEnrolada2 from "../scrollParallaxSvg/parallaxGrafismoLinhaEnrolada2";
import LoadPage from "../../components/loadPage";

function Page4() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema

  useEffect(() => {
    if (temaCor) {
      document.body.classList.value.search("ios") !== -1
        ? (document.body.className = "ios")
        : (document.body.className = "");

      document.body.classList.add(temaCor);
    }
  }, [temaCor]);

  return (
    <LoadPage>
      <Header setTemaCor={setTemaCor} pageAtual={4} className="" />

      <Wrapper className="">
        <AplicacaoLGPD sectionTitle="APLICAÇÃO DA LGPD NA CDHU" />
        <ParallaxGrafismoLinhaEnrolada2 />
        <PapeisEnvolvidos sectionTitle="PAPÉIS ENVOLVIDOS" />
        <OperacoesDocumentos sectionTitle="OPERAÇÕES E DOCUMENTOS" />
        <AgoraSuaVez sectionTitle="AGORA É SUA VEZ!" />
      </Wrapper>
    </LoadPage>
  );
}

export default Page4;
