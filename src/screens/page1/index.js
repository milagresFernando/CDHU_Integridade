// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import Footer from "../../components/footer";

import BotoesNavegacao from "./customComponents/botoesNavegacao";

import Introducao from "./customComponents/introducao";

function Page1() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (temaCor) {
      document.body.classList.value.search("ios") !== -1
        ? (document.body.className = "ios")
        : (document.body.className = "");

      document.body.classList.add(temaCor);
    }
  }, [temaCor]);

  return (
    <Fragment>
      {/* <ProgressPage className="textBar" /> */}
      <Header hideOnScroll setTemaCor={setTemaCor} pageAtual={1} className="" />
      <Wrapper>
        <Introducao sectionTitle="Introdução" />
        <BotoesNavegacao sectionTitle="Botões de Navegação" />
      </Wrapper>
      <Footer fixed className="" />
    </Fragment>
  );
}

export default Page1;
