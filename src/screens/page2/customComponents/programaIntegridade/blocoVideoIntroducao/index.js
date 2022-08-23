// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../../components/texts/title";
import VideoJS from "../../../../../components/video/videoJs";
import TextBlock from "../../../../../components/texts/text_block";
import ParallaxGrafismoAmareloVideo from "../../../../scrollParallaxSvg/parallaxGrafismoAmareloVideo";
import ParallaxGrafismoBolaAzulVideo from "../../../../scrollParallaxSvg/parallaxGrafismoBolaAzulVideo";
import ParallaxGrafismoBolaRoxoVideo from "../../../../scrollParallaxSvg/parallaxGrafismoBolaRoxoVideo";

//Video Elementos
import videoHd from "../../../../assets/videos/opcao1.mp4";
import videoSd from "../../../../assets/videos/vinheta_teste.mp4";
import poster from "../../../../assets/videos/capaVideo.png";
import legenda from "../../../../assets/videos/vinheta_teste.vtt";

//Imagens

function BlocoVideoIntroducao(props) {
  const videoElements = { videoHd, videoSd, poster, legenda };

  const textsBlock1 = [
    {
      tagElement: "p",
      className: "mb-0",
      content: (
        <Fragment>
          Seja bem-vindo(a) ao treinamento sobre <strong>Integridade!</strong>
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "mb-0",
      content: (
        <Fragment>
          Nele, você estudará <strong>conceitos</strong> muito importantes para
          o seu <strong>dia a dia de trabalho</strong> de uma forma interativa e
          descontraída.
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "mb-5",
      content: (
        <Fragment>
          Para começar, clique no <em>play</em> e conheça{" "}
          <strong>o que é</strong> integridade:
        </Fragment>
      ),
    },
  ];

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col lg="10">
          <TextBlock textsBlock={textsBlock1} />
        </Col>
      </Row>

      <Row className="justify-content-center relative">
        <ParallaxGrafismoAmareloVideo />
        <ParallaxGrafismoBolaAzulVideo />
        <ParallaxGrafismoBolaRoxoVideo />
        <Col lg="10" className="">
          <VideoJS className="mb-5 mt-5" videoElements={videoElements} />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoVideoIntroducao;
