// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect, useRef } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import FlexImgWithText from "../../images/flexImgWithText";
import Title from "../../texts/title";
import TextBlock from "../../texts/text_block";
import ButtonQuizz from "../buttonQuizz";

//Imagens

//Functions
import setBreakPoint from "../../../globalFunctions/setBreakPoint";
import debounceTimeOut from "../../../globalFunctions/debounceTimeOut";

function FeedBack(props) {
  const [load, setLoad] = useState(false);
  const [breakResponsive, setBreakResponsive] = useState(false);

  const feedBack = useRef(null);
  const scrollTo = (element) => {
    window.scrollTo(
      0,
      element.current.getBoundingClientRect().top + window.scrollY - 80
    );
  };

  useEffect(() => {
    if (props.feedBackItems != "") {
      if (props.feedBackItems.images) {
        ajustBreakContentResponsive(props.feedBackItems.images.imgSide);
      }
      if (props.typeFeed == "wrong") {
        props.setShowButtonNext(false);
      }
      setLoad(true);
    }
  }, [props.feedBackItems, props.showFeed]);

  // atualiza no resize
  useEffect(() => {
    if (props.feedBackItems != "" && props.feedBackItems.images) {
      const debouncedHandleResize = debounceTimeOut(function handleResize() {
        ajustBreakContentResponsive(props.feedBackItems.images.imgSide);
      }, 500);

      window.addEventListener("resize", debouncedHandleResize);
      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }
  }, [window.innerWidth, props.feedBackItems]);

  useEffect(() => {
    if (props.scrollAnimated && load && props.showFeed) {
      scrollTo(feedBack);
    }
  }, [load, props.showFeed]);

  function ajustBreakContentResponsive(imgSide) {
    //seta a classe de break, quando o feedBack fica na versao tablet/mobile
    if (window.innerWidth <= setBreakPoint(props.breakContent)) {
      setBreakResponsive(true);
    } else {
      setBreakResponsive(false);
    }
  }

  function handleTryAgain() {
    scrollTo(props.refSituacao);
    props.setShowFeed(false);
    props.setDisable(false);
    props.answers.forEach((answer, id) => {
      answer.inputClassName = "";
    });
    props.setCheckedInitial(props.setInitialCheckedArray(props.answers));
  }

  const feedBackItems =
    load &&
    (props.feedBackItems.images ? (
      <Fragment>
        <Title
          typeH="4"
          className={`feedTitle ${!props.showFeed ? "hideFeed" : ""}`}
          content={<Fragment>{"FEEDBACK"}</Fragment>}
        />
        <div
          className={`relative bodyWithImg feedback-wrapper ${
            breakResponsive ? "break" : ""
          } ${
            props.feedBackItems.images.imgSide === "fullLeft"
              ? "fullLeft"
              : props.feedBackItems.images.imgSide === "left"
              ? "left"
              : props.feedBackItems.images.imgSide === "right"
              ? "right"
              : props.feedBackItems.images.imgSide === "fullRight"
              ? "fullRight"
              : props.feedBackItems.images.imgSide === "bottom"
              ? "bottom"
              : props.feedBackItems.images.imgSide === "top"
              ? " top"
              : props.feedBackItems.images.imgSide === "fullBottom"
              ? "fullBottom"
              : props.feedBackItems.images.imgSide === "fullTop"
              ? "fullTop"
              : ""
          }  ${props.typeFeed} ${!props.showFeed ? "hideFeed" : ""}
    `}
        >
          <FlexImgWithText
            rowClasses={`${props.feedBackItems.images.rowClasses}`}
            typeH={props.feedBackItems.title.tagTitle}
            titleClassName={props.feedBackItems.title.titleClassName}
            title={props.feedBackItems.title.titleContent}
            textsBlock={props.feedBackItems.contents.textBlocks}
            imgSide={props.feedBackItems.images.imgSide}
            imgUrl={props.feedBackItems.images.imgUrl}
            imgUrlBreak={props.feedBackItems.images.imgUrlBreak}
            imgClassName={props.feedBackItems.images.imgClassName}
            colXs={props.feedBackItems.images.colXs}
            colSm={props.feedBackItems.images.colSm}
            colMd={props.feedBackItems.images.colMd}
            colLg={props.feedBackItems.images.colLg}
            colXl={props.feedBackItems.images.colXl}
            colXXl={props.feedBackItems.images.colXXl}
            offsetSm={props.feedBackItems.images.offsetSm}
            offsetMd={props.feedBackItems.images.offsetMd}
            offsetLg={props.feedBackItems.images.offsetLg}
            offsetXl={props.feedBackItems.images.offsetXl}
            offsetXXl={props.feedBackItems.images.offsetXXl}
            isFeedBack={true}
            showFeed={props.showFeed}
            breakContent={props.breakContent} // parametro obrigat??rio, voc?? deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </div>
      </Fragment>
    ) : (
      <Fragment>
        <Title
          typeH="4"
          className={`feedTitle ${!props.showFeed ? "hideFeed" : ""}`}
          content={<Fragment>{"FEEDBACK"}</Fragment>}
        />
        <div
          className={`feedback-wrapper ${props.typeFeed} ${
            !props.showFeed ? "hideFeed" : ""
          }`}
        >
          <div className="p-notImg feedCdhu">
            <Title
              typeH={props.feedBackItems.title.tagTitle}
              className={props.feedBackItems.title.titleClassName}
              content={
                <Fragment>{props.feedBackItems.title.titleContent}</Fragment>
              }
            />

            {props.typeFeed == "wrong" && (
              <ButtonQuizz
                type={"tenteNovamente"}
                className=""
                btnFunction={handleTryAgain}
                showButton={true}
                content="Tente Novamente"
              />
            )}

            {props.feedBackItems.contents && (
              <TextBlock textsBlock={props.feedBackItems.contents.textBlocks} />
            )}
          </div>
        </div>
      </Fragment>
    ));
  if (!load) {
    return <Fragment> </Fragment>;
  } else {
    return <div ref={feedBack}>{feedBackItems}</div>;
  }
}

export default FeedBack;
