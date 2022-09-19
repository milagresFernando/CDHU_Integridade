// React Elements/Hooks
import React, { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import OneAnswerWithAudio from "../../../../../components/quizz/oneAnswerWithAudio";

//Imagens, Audios e PDF
import imgAnswer1 from "../../../../assets/images/icoQuestionQuizz.svg";
import imgFeed from "../../../../assets/images/icoFeedPositivo.svg";

import audioFile1 from "../../../../assets/audio/page3_audio1.mp3";
import audioFileFeed1 from "../../../../assets/audio/page3_feed_audio1.mp3";
import transcricao1 from "../../../../assets/audio/page3_audio1.pdf";
import transcricaoFeed1 from "../../../../assets/audio/page3_feed_audio1.pdf";

import audioFile2 from "../../../../assets/audio/page3_audio2.mp3";
import audioFileFeed2 from "../../../../assets/audio/page3_feed_audio2.mp3";
import transcricao2 from "../../../../assets/audio/page3_audio2.pdf";
import transcricaoFeed2 from "../../../../assets/audio/page3_feed_audio2.pdf";

import audioFile3 from "../../../../assets/audio/page3_audio3.mp3";
import audioFileFeed3 from "../../../../assets/audio/page3_feed_audio3.mp3";
import transcricao3 from "../../../../assets/audio/page3_audio3.pdf";
import transcricaoFeed3 from "../../../../assets/audio/page3_feed_audio3.pdf";

import audioFile4 from "../../../../assets/audio/page3_audio4.mp3";
import audioFileFeed4 from "../../../../assets/audio/page3_feed_audio4.mp3";
import transcricao4 from "../../../../assets/audio/page3_audio4.pdf";
import transcricaoFeed4 from "../../../../assets/audio/page3_feed_audio4.pdf";

import ParallaxGrafismoBolaRabisco from "../../../../scrollParallaxSvg/parallaxGrafismoBolaRabisco";
import BlocoFinalizou from "./blocoFinalizou";
import BotoesNavegacao from "./botoesNavegacao";

function BlocoQuizzUnicaResposta(props) {
  // caso deseje importar uma imagem sem usar os imports acima, utilize a funcão require(caminho da imagem), direto no array de questions
  // answersType passe o tipo de elemento que irá sugir dentro do input das alternativas. Opcões "numbers" "upper-roman" "upper-alpha" "square"

  const [correctCounter, setCorrectCounter] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  // const { liberaScorm, setLiberaScorm } = useContext(GlobalState);

  const options = {
    answersType: "upper-alpha",
    breakContent: "sm",
    randomQuestions: false,
    randomAnswers: false,
    // maxQuestions: 1,
    iconFeed: false,
    scrollAnimated: true,
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
          titleContent: "CONVERSA ENTRE IGOR E KAIO",
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
      audioFeed: {
        textBlockAudio: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                <strong>Clique no play</strong> para ouvir a reação de Kaio.
              </Fragment>
            ),
          },
        ],

        titleAudio: {
          titleContent: "CONVERSA ENTRE IGOR E KAIO",
          tagTitle: "5",
          titleClassName: "",
        },
        audioFile: audioFileFeed1,
        transcricao: transcricaoFeed1,

        textQuestionBlockAudio: [
          {
            tagElement: "p",
            className: "textQuestionAudio",
            content: (
              <Fragment>
                <strong>
                  Assim como Igor, de que outras maneiras você também pode
                  contribuir com a integridade na CDHU em seu dia a dia?
                </strong>
              </Fragment>
            ),
          },
        ],
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
          titleContent: "CONVERSA ENTRE EUNICE E LEANDRO",
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
      audioFeed: {
        textBlockAudio: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                <strong>Clique no play</strong> para ouvir a reação de Eunice.
              </Fragment>
            ),
          },
        ],

        titleAudio: {
          titleContent: "CONVERSA ENTRE	EUNICE E LEANDRO",
          tagTitle: "5",
          titleClassName: "",
        },
        audioFile: audioFileFeed2,
        transcricao: transcricaoFeed2,

        textQuestionBlockAudio: [
          {
            tagElement: "p",
            className: "textQuestionAudio",
            content: (
              <Fragment>
                <strong>
                  Assim como Eunice e Leandro, de que outras maneiras você
                  também pode contribuir com a integridade na CDHU em seu dia a
                  dia?
                </strong>
              </Fragment>
            ),
          },
        ],
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
                  Olivia é responsável pelos contratos da CDHU com fornecedores
                  e parceiros. Certo dia, ela encontrou sua amiga João no
                  corredor e as duas conversaram rapidamente.
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
                Olivia e João.
              </Fragment>
            ),
          },
        ],

        titleAudio: {
          titleContent: "CONVERSA ENTRE OLIVIA E João",
          tagTitle: "5",
          titleClassName: "",
        },

        audioFile: audioFile3,
        transcricao: transcricao3,
      },
      title: {
        titleContent: "O que Olivia deve fazer?",
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
                  Nada. Afinal, não vale a pena acreditar em boatos e conversas
                  de corredor.
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
                  Manter-se atenta e acompanhar o desenrolar dos fatos, além de
                  fazer um questionamento formal para verificar se as
                  informações sobre as ocorrências trabalhistas na empresa são
                  verdadeiras.
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
                  Se desesperar, ligar para a empresa e comentar que sua colega
                  comentou sobre a denúncia, além de querer tirar satisfações
                  com o presidente.
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
                    A CDHU deve realizar parcerias/negócios somente com empresas
                    que utilizam matéria-prima e mão de obra formal, conforme
                    previsto nas legislações pertinentes. Assim sendo, são
                    vedados negócios com organizações que utilizem trabalho
                    infantil e/ou forçado ou cuja procedência dos produtos ou
                    dos serviços fornecidos seja de origem duvidosa e/ou
                    ilícita.
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
      audioFeed: {
        textBlockAudio: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                <strong>Clique no play</strong> para ouvir a reação de Olivia.
              </Fragment>
            ),
          },
        ],

        titleAudio: {
          titleContent: "CONVERSA ENTRE OLIVIA E João",
          tagTitle: "5",
          titleClassName: "",
        },
        audioFile: audioFileFeed3,
        transcricao: transcricaoFeed3,

        textQuestionBlockAudio: [
          {
            tagElement: "p",
            className: "textQuestionAudio",
            content: (
              <Fragment>
                <strong>
                  Assim como Olivia e João, de que outras maneiras você também
                  pode contribuir com a integridade na CDHU em seu dia a dia?
                </strong>
              </Fragment>
            ),
          },
        ],
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
                  Flora trabalha em uma equipe em que muitos colaboradores
                  realizam as mesmas atividades. Em um dia de trabalho, ela
                  esqueceu a senha do sistema de cadastros e pediu um favor a
                  Tales.
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
                Flora e Tales.
              </Fragment>
            ),
          },
        ],

        titleAudio: {
          titleContent: "CONVERSA ENTRE FLORA E TALES",
          tagTitle: "5",
          titleClassName: "",
        },

        audioFile: audioFile4,
        transcricao: transcricao4,
      },
      title: {
        titleContent: "O que Tales deve fazer?",
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
                  Passar seu login e senha para a Flora. É sempre bom ajudar os
                  colegas quando eles precisam, ainda mais no ambiente de
                  trabalho.
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
                  Usar o login e a senha da Jussara, que está de férias, para
                  poder emprestar seus dados para Flora.
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
                  Deve dizer a Flora que não emprestará seu login e sua senha,
                  mas que a ajudará a entrar em contato com a área de TI para
                  recuperar as informações.
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
                    Não é permitido ceder ou emprestar a terceiros, mesmo que
                    temporariamente, senha/login/perfil de acesso a algum
                    sistema ou software da CDHU, bem como crachá de acesso
                    pessoal ou veículos.
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
      audioFeed: {
        textBlockAudio: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                <strong>Clique no play</strong> para ouvir a reação de Tales.
              </Fragment>
            ),
          },
        ],

        titleAudio: {
          titleContent: "CONVERSA ENTRE FLORA E TALES",
          tagTitle: "5",
          titleClassName: "",
        },
        audioFile: audioFileFeed4,
        transcricao: transcricaoFeed4,

        textQuestionBlockAudio: [
          {
            tagElement: "p",
            className: "textQuestionAudio",
            content: (
              <Fragment>
                <strong>
                  Assim como Tales, de que outras maneiras você também pode
                  contribuir com a integridade na CDHU em seu dia a dia?
                </strong>
              </Fragment>
            ),
          },
        ],
      },
    },
  ];
  const finalFeedComponents = (
    <Container>
      <BlocoFinalizou />
      <BotoesNavegacao />
    </Container>
  );
  const finalFeed = [{ type: "components" }, finalFeedComponents];

  return (
    <div className="relative overflow">
      <ParallaxGrafismoBolaRabisco />
      <OneAnswerWithAudio
        options={options}
        questions={questions}
        finalFeed={finalFeed}
        setCorrectCounter={setCorrectCounter}
        setTotalQuestions={setTotalQuestions}
        correctCounter={correctCounter}
      />
    </div>
  );
}

export default BlocoQuizzUnicaResposta;
