// React Elements/Hooks
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import CanaisDenuncia from "./customComponents/canaisDenuncia";
import CodigoConduta from "./customComponents/codigoConduta";
import AgoraSuaVez from "./customComponents/agoraSuaVez";
import LoadPage from "../../components/loadPage";

function Page3() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema

  useEffect(() => {
    if (temaCor) {
      document.body.classList.value.search("ios safari") !== -1
        ? (document.body.className = "ios safari")
        : (document.body.className = "");

      document.body.classList.add(temaCor);
    }
  }, [temaCor]);

  return (
    <LoadPage>
      <Header setTemaCor={setTemaCor} pageAtual={3} className="" />

      <Wrapper className="">
        <CodigoConduta sectionTitle="CÓDIGO DE CONDUTA E INTEGRIDADE DA CDHU" />
        <CanaisDenuncia sectionTitle="CANAIS DE DENÚNCIA" />
        <AgoraSuaVez sectionTitle="AGORA É SUA VEZ!" />
      </Wrapper>
    </LoadPage>
  );
}

export default Page3;
