// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Carousel, Image } from "react-bootstrap";
import Title from "../texts/title";
import TextBlock from "../texts/text_block";
import FlexImgWithText from "../images/flexImgWithText";

// Functions
import setBreakPoint from "../../globalFunctions/setBreakPoint";
import debounceTimeOut from "../../globalFunctions/debounceTimeOut";

//Imagens

function CarouselWithoutImg(props) {
  //imgSide pode ser "top", "fullTop", "left", "bottom" "fullBottom", "right" "fullRight" ou "fullLeft"

  const [carouselIsImgFullVertical, setCarouselIsImgFullVertical] = useState(
    false
  );
  const [
    carouselIsImgFullHorizontal,
    setCarouselIsImgFullHorizontal,
  ] = useState(false);
  const [idAtual, setidAtual] = useState(0);
  const [clickCarousel, setClickCarousel] = useState(false);
  const [isFirstFull, setIsFirstFull] = useState(false);
  const [breakResponsive, setBreakResponsive] = useState(false);

  const carouselItens = props.carouselItens.map((carouselItem, id) => {
    return (
      <Carousel.Item key={id} className="">
        <Carousel.Caption className={""}>
          {carouselItem.title && (
            <Title
              typeH={carouselItem.title.tagTitle}
              className={carouselItem.title.titleClassName}
              content={<Fragment>{carouselItem.title.titleContent}</Fragment>}
            />
          )}

          <TextBlock textsBlock={carouselItem.contents.textBlocks} />
        </Carousel.Caption>
        {carouselCounter(id)}
      </Carousel.Item>
    );
  });
  function carouselCounter(id) {
    if (props.counter) {
      return (
        <div className="carousel-counter">{`${id + 1} de ${
          props.carouselItens.length
        }`}</div>
      );
    }
  }

  return (
    <Fragment>
      <Carousel
        className={`${
          props.className ? props.className : ""
        } carouselWithoutImg `}
        wrap={props.loop}
        pause={`${props.pauseOnHover ? "hover" : ""}`}
        indicators={props.indicators}
        interval={props.generalInterval}
        // onSlide={(id) => handleClickCarousel(itemsWithImg, id)}
      >
        {carouselItens}
      </Carousel>
    </Fragment>
  );
}

export default CarouselWithoutImg;
