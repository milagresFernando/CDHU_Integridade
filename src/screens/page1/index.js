// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import Footer from "../../components/footer";

import Introducao from "./customComponents/introducao";
import Capa from "./customComponents/capa";

function Page1() {
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
      <Header setTemaCor={setTemaCor} pageAtual={1} className="" />
      <Capa />
      <Wrapper className="pt-2 pt-md-5">
        <Introducao sectionTitle="Introdução" />
      </Wrapper>
    </Fragment>
  );
}

export default Page1;
