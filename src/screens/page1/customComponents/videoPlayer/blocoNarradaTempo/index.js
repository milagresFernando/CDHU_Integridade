// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import VideoChangeByTime from "../../../../../components/video/videoWithMenu/changeByTime";
import Title from "../../../../../components/texts/title";

//Video Elementos
import videoHd from "../../../../assets/videos/videocast.mp4";
import videoSd from "../../../../assets/videos/vinheta_teste.mp4";
import poster from "../../../../assets/videos/capaVideo.png";
import legenda from "../../../../assets/videos/vinheta_teste.vtt";

function BlocoNarradaTempo(props) {
  const capitulosFile = "videoByTime01"; //coloque o nome do arquivo JSON

  const videoElements = {
    videoHd,
    videoSd,
    poster,
    legenda,
    capitulosFile,
    hideOnClick: false,
    centerOnHide: true,
  };
  return (
    <Fragment>
      <Col xs="12">
        <Title
          typeH="4"
          className=""
          content={
            <Fragment>
              Player com Menu (Aula Narrada / Troca por Tempo)
            </Fragment>
          }
        />
      </Col>
      <VideoChangeByTime videoElements={videoElements} menuSide="right" />
    </Fragment>
  );
}

export default BlocoNarradaTempo;