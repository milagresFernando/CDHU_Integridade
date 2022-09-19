// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect, useRef, useContext } from "react";

// Components
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import Check from "../../../components/forms/check";
import FlexImgWithText from "../../images/flexImgWithText";
import Title from "../../texts/title";
import TextBlock from "../../texts/text_block";
import FeedBack from "../feedBack";
import ButtonQuizz from "../buttonQuizz";
import CounterBar from "../counterBar";
import AudioJs from "../../audio";
import GlobalState from "../../../contexts/globalState";

// Functions
import addZero from "../../../globalFunctions/generalCalcs/addZero";
import setBreakPoint from "../../../globalFunctions/setBreakPoint";
import randomArray from "../../../globalFunctions/generalCalcs/randomArray";
import debounceTimeOut from "../../../globalFunctions/debounceTimeOut";
import scrollTo from "../../../globalFunctions/scrollTo";

//Imagens
import IcoPodcast from "../../../screens/assets/images/icoPodcast.svg";
import IcoPodcastFeed from "../../../screens/assets/images/icoPodcast2.svg";

function OneAnswerWithAudio(props) {
  const [load, setLoad] = useState(false);
  const [actualQuestion, setActualQuestion] = useState({});
  const [questions, setQuestions] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [titleQuestion, setTitleQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [checked, setChecked] = useState([]);
  const [disable, setDisable] = useState(false);
  const [showFeed, setShowFeed] = useState(false);
  const [showFinalFeed, setShowFinalFeed] = useState(false);
  const [typeFeed, setTypeFeed] = useState("");

  const [feedBackItems, setFeedBackItems] = useState("");
  const [finalFeedBackItems, setFinalFeedBackItems] = useState("");
  const [breakResponsiveQuestion, setBreakResponsiveQuestion] = useState(false);
  const [breakResponsiveAnswer, setBreakResponsiveAnswer] = useState(false);
  const [questionIsImgFull, setQuestionIsImgFull] = useState(false);
  const [answerIsImgFull, setAnswerIsImgFull] = useState(false);
  const [showButtonConfirm, setShowButtonConfirm] = useState(false);
  const [showButtonNext, setShowButtonNext] = useState(false);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [percentageCounter, setPercentageCounter] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [checkedInitial, setCheckedInitial] = useState([]);
  const [clickNext, setClickNext] = useState(false);
  const { liberaScorm, setLiberaScorm } = useContext(GlobalState);

  const situacao = useRef(null);

  //executa quando a páginna é carregada.verifica se possui limite de questoes, se sim, busca as questões de forma aleatória, senão, só preenche o state de questões
  useEffect(() => {
    if (props.options.maxQuestions) {
      const numberQuestions = Array(props.options.maxQuestions).fill(0);
      const cloneQuestions = randomArray(props.questions);
      const questionsLimited = numberQuestions.map((question, id) => {
        return cloneQuestions[id];
      });
      setQuestions(questionsLimited);
    } else {
      setQuestions(props.questions);
    }
  }, []);
  //carrega as questoes toda vez que entra uma nova
  useEffect(() => {
    if (questions != "") {
      //randomiza as perguntas
      if (props.options.randomQuestions) {
        setQuestions(randomArray(questions));
      }
      setActualQuestion(questions[questionCounter - 1]);

      setQuestionNumber(addZero(questionCounter));

      if (Object.keys(actualQuestion).length !== 0) {
        //randomiza as alternativas
        if (props.options.randomAnswers) {
          actualQuestion.answers = randomArray(actualQuestion.answers);
        }
        setTitleQuestion(actualQuestion.title);

        setAnswers(
          actualQuestion.answers.map((answer, id) => {
            return {
              label: answer.text,
              value: id,
              correct: answer.correct,
              feedIco: "",
              inputClassName: "",
              labelClassName: "mb-0",
            };
          })
        );
      }

      setPercentageCounter(
        Math.floor((questionCounter / questions.length) * 100)
      );
      //verifica se a proxima pergunta possui imagem full
      if (
        actualQuestion.questionImages &&
        (actualQuestion.questionImages.imgSide === "fullLeft" ||
          actualQuestion.questionImages.imgSide === "fullRight" ||
          actualQuestion.questionImages.imgSide === "fullBottom" ||
          actualQuestion.questionImages.imgSide === "fullTop")
      ) {
        setQuestionIsImgFull(true);
      } else {
        setQuestionIsImgFull(false);
      }
      //verifica se as proximas alternativas possuem imagem full
      if (
        actualQuestion.answersImages &&
        (actualQuestion.answersImages.imgSide === "fullLeft" ||
          actualQuestion.answersImages.imgSide === "fullRight" ||
          actualQuestion.answersImages.imgSide === "fullBottom" ||
          actualQuestion.answersImages.imgSide === "fullTop")
      ) {
        setAnswerIsImgFull(true);
      } else {
        setAnswerIsImgFull(false);
      }
    }
  }, [questionCounter, actualQuestion, questions]);

  //controla os estados de check das alternativas
  useEffect(() => {
    if (answers != "") {
      if (!showFeed) {
        setCheckedInitial(setInitialCheckedArray(answers));
      }
      if (actualQuestion.answersImages) {
        ajustBreakContentResponsive(
          actualQuestion.answersImages.imgSide,
          "answer"
        );
      }
      if (actualQuestion.questionImages) {
        ajustBreakContentResponsive(
          actualQuestion.questionImages.imgSide,
          "question"
        );
      }
    }
  }, [answers]);

  //seta o estado inicial dos checks
  useEffect(() => {
    if (checkedInitial != "") {
      setLoad(true);
      setChecked(checkedInitial);
    }
  }, [checkedInitial]);

  // atualiza no resize
  useEffect(() => {
    if (actualQuestion.answersImages) {
      const debouncedHandleResize = debounceTimeOut(function handleResize() {
        ajustBreakContentResponsive(
          actualQuestion.answersImages.imgSide,
          "answer"
        );
      }, 500);

      window.addEventListener("resize", debouncedHandleResize);
      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }
  }, [window.innerWidth, answers]);

  // atualiza no resize
  useEffect(() => {
    if (actualQuestion.questionImages) {
      const debouncedHandleResize = debounceTimeOut(function handleResize() {
        ajustBreakContentResponsive(
          actualQuestion.questionImages.imgSide,
          "question"
        );
      }, 500);

      window.addEventListener("resize", debouncedHandleResize);
      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }
  }, [window.innerWidth, answers]);

  // mostra o botao de confirmar caso o usuario clique em alguma alternativa
  useEffect(() => {
    checked.find((selectedAnswer) => selectedAnswer == true)
      ? setShowButtonConfirm(true)
      : setShowButtonConfirm(false);
  }, [checked]);

  useEffect(() => {
    if (questionCounter == questions.length) {
      setIsLastQuestion(true);
    }
  }, [questions, questionCounter]);

  //seta o feed final e ajusta os contadores desse feed
  useEffect(() => {
    if (props.finalFeed) {
      if (showFinalFeed) {
        if (props.setCorrectCounter && props.setTotalQuestions) {
          props.setCorrectCounter(addZero(correctCounter));
          props.setTotalQuestions(addZero(questions.length));
        }

        if (props.finalFeed[0].type == "components") {
          setFinalFeedBackItems(props.finalFeed[1]);
        } else {
          setFinalFeedBackItems(props.finalFeed[0]);
        }
        if (typeFeed != "wrong") {
          setLiberaScorm(false);
        }
      }
    }
  }, [finalFeedBackItems, showFinalFeed, typeFeed]);

  function setInitialCheckedArray(checkedArray) {
    return checkedArray.map(() => false);
  }

  function ajustBreakContentResponsive(imgSide, type) {
    //seta a classe de break, quando o a question ou answer fica na versao tablet/mobile
    if (window.innerWidth <= setBreakPoint(props.options.breakContent)) {
      if (type == "answer") {
        setBreakResponsiveAnswer(true);
      }
      if (type == "question") {
        setBreakResponsiveQuestion(true);
      }
    } else if (type == "answer") {
      setBreakResponsiveAnswer(false);
    } else if (type == "question") {
      setBreakResponsiveQuestion(false);
    }
  }

  function validateAnswer(id, cloneAnswers, answered) {
    if (id == checked.indexOf(true)) {
      cloneAnswers[id].inputClassName = "selected";
      answered == "correct" && setCorrectCounter(correctCounter + 1);

      setTypeFeed(answered);

      const feedBack = actualQuestion.feedbacks[answered];

      setFeedBackItems(feedBack);
    }
  }

  function handleConfirm() {
    let cloneAnswers = [...answers];

    answers.forEach((answer, id) => {
      if (answer.correct == "correct") {
        cloneAnswers[id].feedIco = "iconCorrect";
        validateAnswer(id, cloneAnswers, answer.correct);
      }
      if (answer.correct == "neutral") {
        validateAnswer(id, cloneAnswers, answer.correct);
        cloneAnswers[id].feedIco = "iconNeutral";
      }
      if (answer.correct == "wrong") {
        validateAnswer(id, cloneAnswers, answer.correct);
        cloneAnswers[id].feedIco = "iconIncorrect";
      }
    });

    setShowFeed(true);
    setDisable(true);
    setAnswers(cloneAnswers);
    setShowButtonConfirm(false);
    if (!isLastQuestion) {
      setShowButtonNext(true);
    } else {
      setShowFinalFeed(true);
      // setLiberaScorm(false);
    }
  }
  function handleNext() {
    setShowFeed(false);
    setDisable(false);
    setShowButtonNext(false);

    setQuestionCounter(questionCounter + 1);
    setCheckedInitial(setInitialCheckedArray(answers));
    setClickNext(!clickNext);
    props.options.scrollAnimated && scrollTo(situacao, 60);
  }
  const audioBlock = load && actualQuestion.audio && (
    <Container className="audioWrapper" key={"audioWrapper"} ref={situacao}>
      <Row className="justify-content-center">
        <Col lg="10" className="questionNumber">
          <Title
            typeH="3"
            className={"titleSection type3 mb-5"}
            content={<Fragment>{`Situação ${questionNumber}`}</Fragment>}
          />
        </Col>
        <Col lg="10" className="">
          <TextBlock textsBlock={actualQuestion.audio.textBlockAudio} />
        </Col>
        <Col lg="10" className="">
          <Row className="icoAndPlayer">
            <Col md="2" sm="3">
              <Image
                src={IcoPodcast}
                className={"d-block mx-auto icoImg"}
                loading="lazy"
                alt=""
                fluid
              />
            </Col>

            <Col>
              <AudioJs
                className="mb-3"
                src={actualQuestion.audio.audioFile}
                transcricao={actualQuestion.audio.transcricao}
                titleSetings={actualQuestion.audio.titleAudio}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );

  const audioFeed = actualQuestion.audioFeed &&
    typeFeed == "correct" &&
    showFeed && (
      <Container className="audioFeedWrapper" key={"audioFeedWrapper"}>
        <Row className="justify-content-center mt-5">
          <Col lg="10" className="mt-4">
            <hr></hr>
            <TextBlock textsBlock={actualQuestion.audioFeed.textBlockAudio} />
          </Col>
          <Col lg="10" className="">
            <Row className="icoAndPlayer">
              <Col md="2" sm="3">
                <Image
                  src={IcoPodcastFeed}
                  className={"d-block mx-auto icoImg"}
                  loading="lazy"
                  alt=""
                  fluid
                />
              </Col>

              <Col>
                <AudioJs
                  className="mb-3 audioFeed"
                  src={actualQuestion.audioFeed.audioFile}
                  transcricao={actualQuestion.audioFeed.transcricao}
                  titleSetings={actualQuestion.audioFeed.titleAudio}
                />
              </Col>
            </Row>
          </Col>

          <Col lg="10" className="mt-4">
            <TextBlock
              textsBlock={actualQuestion.audioFeed.textQuestionBlockAudio}
            />
          </Col>
          <hr></hr>
        </Row>
      </Container>
    );

  const questionTexts = (
    <div className="questionWrapper" key={"questionWrapper"}>
      <Row className="justify-content-center">
        <Col lg="10" className="question">
          <Title
            typeH={titleQuestion.tagTitle}
            className={titleQuestion.titleClassName}
            content={<Fragment>{titleQuestion.titleContent}</Fragment>}
          />
        </Col>
      </Row>
    </div>
  );
  const questionItems =
    load &&
    (actualQuestion.questionImages ? (
      <div
        className={`relative bodyWithImg questionWrapper ${
          breakResponsiveQuestion ? "break" : ""
        } ${
          actualQuestion.questionImages.imgSide === "fullLeft"
            ? "fullLeft"
            : actualQuestion.questionImages.imgSide === "left"
            ? "left"
            : actualQuestion.questionImages.imgSide === "right"
            ? "right"
            : actualQuestion.questionImages.imgSide === "fullRight"
            ? "fullRight"
            : actualQuestion.questionImages.imgSide === "bottom"
            ? "bottom"
            : actualQuestion.questionImages.imgSide === "top"
            ? " top"
            : actualQuestion.questionImages.imgSide === "fullBottom"
            ? "fullBottom"
            : actualQuestion.questionImages.imgSide === "fullTop"
            ? "fullTop"
            : ""
        } 
`}
      >
        <FlexImgWithText
          rowClasses={`${actualQuestion.questionImages.rowClasses}`}
          questionTexts={questionTexts}
          imgSide={actualQuestion.questionImages.imgSide}
          imgUrl={actualQuestion.questionImages.imgUrl}
          imgUrlBreak={actualQuestion.questionImages.imgUrlBreak}
          imgClassName={actualQuestion.questionImages.imgClassName}
          questionIsImgFull={questionIsImgFull}
          colXs={actualQuestion.questionImages.colXs}
          colSm={actualQuestion.questionImages.colSm}
          colMd={actualQuestion.questionImages.colMd}
          colLg={actualQuestion.questionImages.colLg}
          colXl={actualQuestion.questionImages.colXl}
          colXXl={actualQuestion.questionImages.colXXl}
          isQuizzOneAnswer={true}
          questionCounter={questionCounter}
          breakContent={props.options.breakContent} // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
        />
      </div>
    ) : (
      [questionTexts]
    ));

  const formGroup = (
    <div className="answersWrapper notImg" key={"answersWrapper"}>
      <Form.Group className={`${disable ? "defaultCursor" : ""}  formAnswers `}>
        <Check
          className={`${
            props.options.answersType
              ? props.options.answersType
              : "upper-roman"
          } ${
            disable ? "defaultCursor" : ""
          } radio-option answers defaultCursor`}
          type="radioCustom"
          iconFeed={props.options.iconFeed}
          checkItems={answers}
          setChecked={setChecked}
          checked={checked}
          disable={disable}
          questionCounter={questionCounter}
          checkedInitial={checkedInitial}
        />
      </Form.Group>
    </div>
  );

  const quizzItems =
    load &&
    (actualQuestion.answersImages ? (
      <div
        className={`relative bodyWithImg answersWrapper ${
          breakResponsiveAnswer ? "break" : ""
        } ${
          actualQuestion.answersImages.imgSide === "fullLeft"
            ? "fullLeft"
            : actualQuestion.answersImages.imgSide === "left"
            ? "left"
            : actualQuestion.answersImages.imgSide === "right"
            ? "right"
            : actualQuestion.answersImages.imgSide === "fullRight"
            ? "fullRight"
            : actualQuestion.answersImages.imgSide === "bottom"
            ? "bottom"
            : actualQuestion.answersImages.imgSide === "top"
            ? " top"
            : actualQuestion.answersImages.imgSide === "fullBottom"
            ? "fullBottom"
            : actualQuestion.answersImages.imgSide === "fullTop"
            ? "fullTop"
            : ""
        } 
    `}
      >
        <FlexImgWithText
          rowClasses={`${actualQuestion.answersImages.rowClasses}`}
          formGroupOneAnswer={formGroup}
          imgSide={actualQuestion.answersImages.imgSide}
          imgUrl={actualQuestion.answersImages.imgUrl}
          imgUrlBreak={actualQuestion.answersImages.imgUrlBreak}
          imgClassName={actualQuestion.answersImages.imgClassName}
          answerIsImgFull={answerIsImgFull}
          colXs={actualQuestion.answersImages.colXs}
          colSm={actualQuestion.answersImages.colSm}
          colMd={actualQuestion.answersImages.colMd}
          colLg={actualQuestion.answersImages.colLg}
          colXl={actualQuestion.answersImages.colXl}
          colXXl={actualQuestion.answersImages.colXXl}
          offsetSm={actualQuestion.answersImages.offsetSm}
          offsetMd={actualQuestion.answersImages.offsetMd}
          offsetLg={actualQuestion.answersImages.offsetLg}
          offsetXl={actualQuestion.answersImages.offsetXl}
          offsetXXl={actualQuestion.answersImages.offsetXXl}
          isQuizzOneAnswer={true}
          questionCounter={questionCounter}
          breakContent={props.options.breakContent} // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
        />
      </div>
    ) : (
      [formGroup]
    ));

  const counterBar = props.options.counterBar && (
    <CounterBar
      counterBar={props.options.counterBar}
      correctCounter={correctCounter}
      totalQuestions={questions.length}
      questionNumber={questionNumber}
      percentageCounter={percentageCounter}
    />
  );

  if (!load) {
    return <Fragment></Fragment>;
  } else {
    return (
      <Fragment>
        <div className="oneAnswerWithAudio">
          {audioBlock}
          <Container>
            {questionItems}
            <Row className="justify-content-center ">
              <Col lg="10">{quizzItems}</Col>
            </Row>

            <Row className="justify-content-center ">
              <Col lg="10">
                <ButtonQuizz
                  className="mb-5"
                  btnFunction={handleConfirm}
                  showButton={showButtonConfirm}
                  content="Confirmar"
                />
              </Col>
            </Row>
            <Row className="justify-content-center mt-5">
              <Col lg="10">
                <FeedBack
                  refSituacao={situacao}
                  typeFeed={typeFeed}
                  showFeed={showFeed}
                  feedBackItems={feedBackItems}
                  breakContent={props.options.breakContent}
                  setShowFeed={setShowFeed}
                  setDisable={setDisable}
                  setShowButtonNext={setShowButtonNext}
                  setCheckedInitial={setCheckedInitial}
                  setInitialCheckedArray={setInitialCheckedArray}
                  answers={answers}
                  scrollAnimated={props.options.scrollAnimated}
                />
              </Col>
              {audioFeed}
            </Row>

            <Row className="justify-content-center ">
              <Col lg="10">
                <ButtonQuizz
                  className=""
                  btnFunction={handleNext}
                  showButton={showButtonNext}
                  content="Próxima"
                />
              </Col>
            </Row>

            {typeFeed != "wrong" &&
              (props.finalFeed[0].type == "components" ? (
                finalFeedBackItems
              ) : (
                <FeedBack
                  typeFeed={"finalFeed"}
                  showFeed={showFinalFeed}
                  feedBackItems={finalFeedBackItems}
                  breakContent={props.options.breakContent}
                  showFinalFeed={showFinalFeed}
                  isLastQuestion={isLastQuestion}
                  totalQuestions={questions.length}
                />
              ))}

            {counterBar}
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default OneAnswerWithAudio;
