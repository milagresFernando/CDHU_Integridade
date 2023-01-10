// React Elements/Hooks
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import Introducao from "./customComponents/introducao";
import Finalizado from "./customComponents/finalizado";
import LoadPage from "../../components/loadPage";

function Page6(props) {
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
      <Header setTemaCor={setTemaCor} pageAtual={6} className="" />
      <Wrapper className="pb-0">
        <Finalizado />
      </Wrapper>
    </LoadPage>
  );
}

export default Page6;
