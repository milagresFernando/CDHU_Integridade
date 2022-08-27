// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import Footer from "../../components/footer";

import TituloTextos from "./customComponents/titulosTextos";
import Imagens from "./customComponents/imagens";
import CaixasDestaque from "./customComponents/caixasDestaque";
import CaixasRetrateis from "./customComponents/caixasRetrateis";
import Cards from "./customComponents/cards";
import FlipCards from "./customComponents/flipCards";
import Abas from "./customComponents/abas";
import Svgs from "./customComponents/svgs";
import LinhaTempo from "./customComponents/linhaTempo";
import Carrossel from "./customComponents/carrosel";
import Tabelas from "./customComponents/tabelas";
import Botoes from "./customComponents/botoes";
import Formularios from "./customComponents/formularios";
import VideoPlayer from "./customComponents/videoPlayer";
import AudioPlayer from "./customComponents/audioPlayer";
import Title from "../../components/texts/title";
import BotoesNavegacao from "./customComponents/botoesNavegacao";
import ScrollParallax from "./customComponents/scrollParallax";
import ScrollParallaxSvg from "./customComponents/scrollParallaxSvg";
import ProgressPage from "../../components/progressPage";

function Guide() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <Header hideOnScroll setTemaCor={setTemaCor} className="" pageAtual={6} />
      <Wrapper>
        <Title typeH="1" className="" content={<Fragment>Page 1</Fragment>} />
        <hr />
        <CaixasRetrateis sectionTitle="Caixa Retrátil" />
        <CaixasDestaque sectionTitle="Caixas de Destaque" />

        <TituloTextos sectionTitle="Títulos e textos" />
        <Imagens sectionTitle="Imagens" />

        <Cards sectionTitle="Cards" />
        <FlipCards sectionTitle="Flip cards" menuoption />
        <Abas sectionTitle="Abas" />
        <Carrossel sectionTitle="Carrosel" />
        <Tabelas sectionTitle="Tabelas" />
        <LinhaTempo sectionTitle="Linha do Tempo / Timeline" menuoption />
        <ScrollParallax sectionTitle="Itens com parallax" />
        <ScrollParallaxSvg sectionTitle="Itens com parallax Svg" />
        <Formularios sectionTitle="Formulários" />
        <Svgs sectionTitle="Infográfico Interativo" />
        <Botoes sectionTitle="Botões" />
        <AudioPlayer sectionTitle="Player de Audio" />
        <VideoPlayer sectionTitle="Player de Vídeo" />
        <BotoesNavegacao sectionTitle="Botões de Navegação" />
      </Wrapper>
      <Footer fixed className="" />
    </Fragment>
  );
}

export default Guide;
