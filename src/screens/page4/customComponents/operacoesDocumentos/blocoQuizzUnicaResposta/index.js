// React Elements/Hooks
import React, { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import OneAnswer from "../../../../../components/quizz/oneAnswer";

//Imagens
import imgQuestion1 from "../../../../assets/images/img-Float.jpg";
import imgQuestion1Break from "../../../../assets/images/img-Full.jpg";
import imgAnswer1 from "../../../../assets/images/img-Float.jpg";
import imgAnswer1Break from "../../../../assets/images/img-Full.jpg";
import imgFeed1_1 from "../../../../assets/images/img-Float.jpg";
import imgFeed1_1_1Break from "../../../../assets/images/img-Full.jpg";

function BlocoQuizzUnicaResposta(props) {
  // caso deseje importar uma imagem sem usar os imports acima, utilize a funcão require(caminho da imagem), direto no array de questions
  // answersType passe o tipo de elemento que irá sugir dentro do input das alternativas. Opcões "numbers" "upper-roman" "upper-alpha" "square"

  const [correctCounter, setCorrectCounter] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const options = {
    answersType: "upper-alpha",
    breakContent: "md",
    randomQuestions: false,
    randomAnswers: false,
    // maxQuestions: 3,
    iconFeed: false,
  };
  const questions = [
    {
      title: {
        titleContent: "Q1 Exercer influência é uma forma poderosa de, EXCETO:",
        tagTitle: "4",
        titleClassName: "",
      },

      answersImages: {
        rowClasses: "align-items-center",
        imgUrl: imgAnswer1,
        imgUrlBreak: imgAnswer1,
        imgSide: "left",
        colMd: "3",
        colLg: "3",
      },
      answers: [
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: <Fragment>alt1 Criar aliados.</Fragment>,
            },
          ],

          correct: "wrong",
        },
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>alt2 Construir um ambiente de competição.</Fragment>
              ),
            },
          ],
          correct: "correct",
        },

        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>alt3 Alcançar resultados consistentes.</Fragment>
              ),
            },
          ],
          correct: "neutral",
        },
      ],
      feedbacks: {
        correct: {
          title: {
            titleContent: "Muito Bem",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta correta</Fragment>,
              },
            ],
          },
        },
        neutral: {
          title: {
            titleContent: "Talvez",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta neutra.</Fragment>,
              },
            ],
          },
        },
        wrong: {
          title: {
            titleContent: "Atenção!",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: (
                  <Fragment>
                    A influência é uma forma poderosa de construir um ambiente
                    de colaboração e não de competição.
                  </Fragment>
                ),
              },
            ],
          },
        },
      },
    },
  ];
  const finalFeed = [
    {
      title: {
        titleContent: "Muito bem!",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "right",
        colMd: "4",
        colLg: "5",
      },
      contents: {
        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Feed Final lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Quisque at ex blandit ipsum blandit porttitor pretium
                tempor erat. Sed blandit maximus eros congue hendrerit.
                Curabitur nec elit id est aliquet viverra et nec metus. Etiam in
                porttitor lorem. Sed accumsan auctor lorem, non fringilla quam
                consectetur non.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Você chegou ao fim do desafio e acertou {correctCounter}{" "}
                questões das {totalQuestions} situações propostas.
              </Fragment>
            ),
          },
        ],
      },
    },
  ];
  return (
    <Fragment>
      <OneAnswer
        options={options}
        questions={questions}
        finalFeed={finalFeed}
        setCorrectCounter={setCorrectCounter}
        setTotalQuestions={setTotalQuestions}
        correctCounter={correctCounter}
      />
    </Fragment>
  );
}

export default BlocoQuizzUnicaResposta;
