// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../../../components/texts/title";
import VideoJS from "../../../../../components/video/videoJs";
import TextBlock from "../../../../../components/texts/text_block";
import ParallaxGrafismoRoxoVideo from "../../../../scrollParallaxSvg/parallaxGrafismoRoxoVideo";
import ParallaxGrafismoBolaAmareloVideo from "../../../../scrollParallaxSvg/parallaxGrafismoBolaAmareloVideo";
import ParallaxGrafismoBolaLaranjaVideo from "../../../../scrollParallaxSvg/parallaxGrafismoBolaLaranjaVideo";
import ParallaxGrafismoBolaAzulVideo2 from "../../../../scrollParallaxSvg/parallaxGrafismoBolaAzulVideo2";

//Video Elementos
import videoHd from "../../../../assets/videos/opcao1.mp4";
import videoSd from "../../../../assets/videos/vinheta_teste.mp4";
import poster from "../../../../assets/videos/capaVideo.png";
import legenda from "../../../../assets/videos/vinheta_teste.vtt";

//Imagens

function BlocoVideoIntroducao2(props) {
  const videoElements = { videoHd, videoSd, poster, legenda };

  const textsBlock1 = [
    {
      tagElement: "p",
      className: "mb-0",
      content: (
        <Fragment>
          <strong> Clique no play</strong> para conhecer o{" "}
          <strong>Programa de Integridade da CDHU.</strong>
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
        <ParallaxGrafismoRoxoVideo />
        <ParallaxGrafismoBolaAmareloVideo />
        <ParallaxGrafismoBolaLaranjaVideo />
        <ParallaxGrafismoBolaAzulVideo2 />
        <Col lg="10" className="">
          <VideoJS className="mb-5 mt-5" videoElements={videoElements} />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoVideoIntroducao2;
