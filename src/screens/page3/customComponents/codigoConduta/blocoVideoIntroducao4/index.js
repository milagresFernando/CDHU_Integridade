// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../../components/texts/title";
import VideoJS from "../../../../../components/video/videoJs";
import TextBlock from "../../../../../components/texts/text_block";
import ParallaxGrafismoRoxoVideo2 from "../../../../scrollParallaxSvg/parallaxGrafismoRoxoVideo2";
import ParallaxGrafismoAzulVideo from "../../../../scrollParallaxSvg/parallaxGrafismoAzulVideo";
import ParallaxGrafismoBolaAzulVideo3 from "../../../../scrollParallaxSvg/parallaxGrafismoBolaAzulVideo3";
import ParallaxGrafismoBolaLaranjaVideo2 from "../../../../scrollParallaxSvg/parallaxGrafismoBolaLaranjaVideo2";
import ParallaxGrafismoBolaAmareloVideo2 from "../../../../scrollParallaxSvg/parallaxGrafismoBolaAmareloVideo2";

//Video Elementos
import videoHd from "../../../../assets/videos/opcao1.mp4";
import videoSd from "../../../../assets/videos/vinheta_teste.mp4";
import poster from "../../../../assets/videos/capaVideo.png";
import legenda from "../../../../assets/videos/vinheta_teste.vtt";

//Imagens

function BlocoVideoIntroducao4(props) {
  const videoElements = { videoHd, videoSd, poster, legenda };

  const textsBlock1 = [
    {
      tagElement: "p",
      className: "mb-0",
      content: (
        <Fragment>
          Clique no play para conhecer o{" "}
          <strong>Código de Conduta e Integridade</strong> da CDHU:
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
        <ParallaxGrafismoRoxoVideo2 />
        <ParallaxGrafismoAzulVideo />
        <ParallaxGrafismoBolaAzulVideo3 />
        <ParallaxGrafismoBolaLaranjaVideo2 />
        <ParallaxGrafismoBolaAmareloVideo2 />

        <Col lg="10" className="">
          <VideoJS className="mb-5 mt-5" videoElements={videoElements} />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoVideoIntroducao4;
