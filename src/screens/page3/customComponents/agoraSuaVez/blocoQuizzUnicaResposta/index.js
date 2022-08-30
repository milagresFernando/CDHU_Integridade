// React Elements/Hooks
import React, { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import OneAnswerWithAudio from "../../../../../components/quizz/oneAnswerWithAudio";
//Imagens

import imgAnswer1 from "../../../../assets/images/icoQuestionQuizz.svg";
import imgFeed from "../../../../assets/images/icoFeedPositivo.svg";
import audioFile1 from "../../../../assets/audio/audioQ1.mp3";
import transcricao1 from "../../../../assets/audio/audioQ1.pdf";
import audioFile2 from "../../../../assets/audio/audioQ2.mp3";
import transcricao2 from "../../../../assets/audio/audioQ2.pdf";
import ParallaxGrafismoBolaRabisco from "../../../../scrollParallaxSvg/parallaxGrafismoBolaRabisco";

function BlocoQuizzUnicaResposta(props) {
  // caso deseje importar uma imagem sem usar os imports acima, utilize a funcão require(caminho da imagem), direto no array de questions
  // answersType passe o tipo de elemento que irá sugir dentro do input das alternativas. Opcões "numbers" "upper-roman" "upper-alpha" "square"

  const [correctCounter, setCorrectCounter] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const options = {
    answersType: "upper-alpha",
    breakContent: "sm",
    randomQuestions: false,
    randomAnswers: false,
    // maxQuestions: 3,
    iconFeed: false,
  };
  const questions = [
    {
      audio: {
        textBlockAudio: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                <strong>
                  Certa manhã, Igor e Kaio se encontram na entrada da CDHU.
                </strong>
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                <strong>Clique no play</strong> para ouvir a conversa entre
                eles.
              </Fragment>
            ),
          },
        ],

        titleAudio: {
          titleContent: "CONVERSA ENTRE IGOR E KAIO.",
          tagTitle: "5",
          titleClassName: "",
        },

        audioFile: audioFile1,
        transcricao: transcricao1,
      },
      title: {
        titleContent: "Como Kaio deve proceder?",
        tagTitle: "4",
        titleClassName: "",
      },

      answersImages: {
        rowClasses: "align-items-center",
        imgUrl: imgAnswer1,
        imgUrlBreak: imgAnswer1,
        imgSide: "left",
        colLg: "2",
        colMd: "3",
      },
      answers: [
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  Aceitaria imediatamente o convite de Igor. Afinal, não é
                  sempre que eles se encontram logo pela manhã e têm essa
                  oportunidade de conversar.
                </Fragment>
              ),
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
                <Fragment>
                  Diria a Igor que não poderia fazer esse deslocamento externo
                  por já ter registrado o início da jornada de trabalho.
                </Fragment>
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
                <Fragment>
                  Indicaria outro colega para acompanhar Igor no passeio, pois
                  hoje não está querendo conversar.
                </Fragment>
              ),
            },
          ],
          correct: "wrong",
        },
      ],
      feedbacks: {
        correct: {
          title: {
            titleContent: "PARABÉNS! VOCÊ ACERTOU!",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center feedCdhu",
            imgUrl: imgFeed,
            imgUrlBreak: imgFeed,
            imgSide: "left",
            colMd: "2",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: (
                  <Fragment>
                    Na CDHU, é vedada a prática de dar a qualquer um a instrução
                    ou sugestão que atente contra a moral, a honestidade ou as
                    disposições legais do Código ou das normas.
                  </Fragment>
                ),
              },
            ],
          },
        },

        wrong: {
          title: {
            titleContent: "NÃO FOI DESTA VEZ!",
            tagTitle: "4",
            titleClassName: "",
          },
        },
      },
    },
    {
      audio: {
        textBlockAudio: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                <strong>
                  Eunice foi contratada em cargo comissionado e irá gerir uma
                  área da empresa.
                </strong>
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                <strong>Clique no play</strong> para ouvir a conversa de Eunice
                com Leandro, coordenador da área de Gestão de Pessoas, no dia da
                admissão.
              </Fragment>
            ),
          },
        ],
        titleAudio: {
          titleContent: "CONVERSA ENTRE EUNICE E LEANDRO.",
          tagTitle: "5",
          titleClassName: "",
        },

        audioFile: audioFile2,
        transcricao: transcricao2,
      },

      title: {
        titleContent: "O que Eunice deve fazer?",
        tagTitle: "4",
        titleClassName: "",
      },

      answersImages: {
        rowClasses: "align-items-center",
        imgUrl: imgAnswer1,
        imgUrlBreak: imgAnswer1,
        imgSide: "left",
        colLg: "2",
        colMd: "3",
      },
      answers: [
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  Como ela está na maior correria nesse cargo novo, melhor ler
                  só as primeiras páginas do Código para ter tempo de participar
                  do treinamento na semana seguinte.
                </Fragment>
              ),
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
                <Fragment>
                  Dizer a Leandro que não sabe o que é a LGPD, que não vê
                  necessidade de participar do treinamento e nem de ler o
                  Código, pois ele está disponível na internet.
                </Fragment>
              ),
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
                <Fragment>
                  Entendendo a necessidade de se inteirar da normativa vigente
                  na CDHU, Eunice deve concluir a leitura do Código e fazer o
                  curso para aprender mais sobre ele e a LGPD.
                </Fragment>
              ),
            },
          ],
          correct: "correct",
        },
      ],
      feedbacks: {
        correct: {
          title: {
            titleContent: "PARABÉNS! VOCÊ ACERTOU!",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center feedCdhu",
            imgUrl: imgFeed,
            imgUrlBreak: imgFeed,
            imgSide: "left",
            colMd: "2",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: (
                  <Fragment>
                    A CDHU deve promover anualmente treinamentos visando a
                    propagar conhecimento, instrução, hábitos e conduta de
                    controle e conformidade por meio da execução de um Plano de
                    Treinamento direcionado à prevenção e ao combate à fraude e
                    à corrupção.
                  </Fragment>
                ),
              },
            ],
          },
        },

        wrong: {
          title: {
            titleContent: "NÃO FOI DESTA VEZ!",
            tagTitle: "4",
            titleClassName: "",
          },
        },
      },
    },
  ];

  return (
    <div className="relative overflow">
      <ParallaxGrafismoBolaRabisco />
      <OneAnswerWithAudio
        options={options}
        questions={questions}
        setCorrectCounter={setCorrectCounter}
        setTotalQuestions={setTotalQuestions}
        correctCounter={correctCounter}
      />
    </div>
  );
}

export default BlocoQuizzUnicaResposta;
