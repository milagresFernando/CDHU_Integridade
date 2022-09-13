// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import Referencias from "./customComponents/referencias";
import LoadPage from "../../components/loadPage";

function Page5() {
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
      <Header setTemaCor={setTemaCor} pageAtual={5} className="" />
      <Wrapper className="">
        <Referencias sectionTitle="REFERÊNCIAS BIBLIOGRÁFICAS" />
      </Wrapper>
    </LoadPage>
  );
}

export default Page5;
