// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import Footer from "../../components/footer";

import BotoesNavegacao from "./customComponents/botoesNavegacao";

import Introducao from "./customComponents/introducao";
import Capa from "./customComponents/capa";

function Page1() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema
  const [paddingCapaTop, setPaddingCapaTop] = useState(true);
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
      <Header
        hideOnScroll
        setTemaCor={setTemaCor}
        pageAtual={1}
        className=""
        setPaddingCapaTop={setPaddingCapaTop}
      />
      <Capa paddingCapaTop={paddingCapaTop} />
      <Wrapper className="pt-2 pt-md-5">
        <Introducao sectionTitle="Introdução" />
        <BotoesNavegacao sectionTitle="Botões de Navegação" />
      </Wrapper>
      <Footer fixed className="" />
    </Fragment>
  );
}

export default Page1;
