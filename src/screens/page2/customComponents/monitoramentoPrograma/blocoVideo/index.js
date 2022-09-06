// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import VideoJS from "../../../../../components/video/videoJs";
import TextBlock from "../../../../../components/texts/text_block";

//grafismos typeGrafismo1
import ParallaxGrafismoAmareloVideo from "../../../../scrollParallaxSvg/parallaxGrafismoAmareloVideo";
import ParallaxGrafismoBolaAzulVideo from "../../../../scrollParallaxSvg/parallaxGrafismoBolaAzulVideo";
import ParallaxGrafismoBolaRoxoVideo from "../../../../scrollParallaxSvg/parallaxGrafismoBolaRoxoVideo";

//grafismos typeGrafismo2
import ParallaxGrafismoRoxoVideo from "../../../../scrollParallaxSvg/parallaxGrafismoRoxoVideo";
import ParallaxGrafismoBolaAmareloVideo from "../../../../scrollParallaxSvg/parallaxGrafismoBolaAmareloVideo";
import ParallaxGrafismoBolaLaranjaVideo from "../../../../scrollParallaxSvg/parallaxGrafismoBolaLaranjaVideo";
import ParallaxGrafismoBolaAzulVideo2 from "../../../../scrollParallaxSvg/parallaxGrafismoBolaAzulVideo2";

//grafismos typeGrafismo3
import ParallaxGrafismoRoxoVideo2 from "../../../../scrollParallaxSvg/parallaxGrafismoRoxoVideo2";
import ParallaxGrafismoAzulVideo from "../../../../scrollParallaxSvg/parallaxGrafismoAzulVideo";
import ParallaxGrafismoBolaAzulVideo3 from "../../../../scrollParallaxSvg/parallaxGrafismoBolaAzulVideo3";
import ParallaxGrafismoBolaLaranjaVideo2 from "../../../../scrollParallaxSvg/parallaxGrafismoBolaLaranjaVideo2";
import ParallaxGrafismoBolaAmareloVideo2 from "../../../../scrollParallaxSvg/parallaxGrafismoBolaAmareloVideo2";

//Video Elementos
import videoHd from "../../../../assets/videos/page2_video2_720p.mp4";
import videoSd from "../../../../assets/videos/page2_video2_360p.mp4";
import poster from "../../../../assets/videos/capaVideo.png";
import legenda from "../../../../assets/videos/page2_video2.vtt";

//Imagens

function BlocoVideo(props) {
  const videoElements = { videoHd, videoSd, poster, legenda };

  const textsBlock1 = [
    {
      tagElement: "p",
      className: "mb-0",
      content: (
        <Fragment>
          <strong> Clique no play</strong> para saber como é feito o{" "}
          <strong>processo de monitoramento contínuo</strong> do Programa:
        </Fragment>
      ),
    },
  ];

  let grafismoVideos = "";
  // props.typeGrafismo seta os grafismos do player, pode ser typeGrafismo 1, 2 ou 3
  switch (props.typeGrafismo) {
    case 1:
      grafismoVideos = (
        <Fragment>
          <ParallaxGrafismoAmareloVideo />
          <ParallaxGrafismoBolaAzulVideo />
          <ParallaxGrafismoBolaRoxoVideo />
        </Fragment>
      );
      break;
    case 2:
      grafismoVideos = (
        <Fragment>
          <ParallaxGrafismoRoxoVideo />
          <ParallaxGrafismoBolaAmareloVideo />
          <ParallaxGrafismoBolaLaranjaVideo />
          <ParallaxGrafismoBolaAzulVideo2 />
        </Fragment>
      );
      break;
    case 3:
      grafismoVideos = (
        <Fragment>
          {" "}
          <ParallaxGrafismoRoxoVideo2 />
          <ParallaxGrafismoAzulVideo />
          <ParallaxGrafismoBolaAzulVideo3 />
          <ParallaxGrafismoBolaLaranjaVideo2 />
          <ParallaxGrafismoBolaAmareloVideo2 />
        </Fragment>
      );
      break;
    default:
      grafismoVideos = (
        <Fragment>
          <ParallaxGrafismoAmareloVideo />
          <ParallaxGrafismoBolaAzulVideo />
          <ParallaxGrafismoBolaRoxoVideo />
        </Fragment>
      );
      break;
  }

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col lg="10">
          <TextBlock textsBlock={textsBlock1} />
        </Col>
      </Row>

      <Row className="justify-content-center relative">
        {grafismoVideos}
        <Col lg="10" className="">
          <VideoJS className="mb-5 mt-5" videoElements={videoElements} />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoVideo;
