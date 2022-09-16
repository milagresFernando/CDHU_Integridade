// React Elements/Hooks
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import Introducao from "./customComponents/introducao";
import Capa from "./customComponents/capa";
import LoadPage from "../../components/loadPage";

function Page1(props) {
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
      <Header setTemaCor={setTemaCor} pageAtual={1} className="" />
      <Capa />
      <Wrapper className="pb-0">
        <Introducao sectionTitle="Introdução" />
      </Wrapper>
    </LoadPage>
  );
}

export default Page1;
