// React Elements/Hooks
import React, { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import OneAnswer from "../../../../../components/quizz/oneAnswer";

//Imagens
import imgQuestion1 from "../../../../assets/images/img-Float.jpg";
import imgQuestion1Break from "../../../../assets/images/img-Full.jpg";
import imgAnswer1 from "../../../../assets/images/icoQuestionQuizz.svg";
import imgAnswer1Break from "../../../../assets/images/img-Full.jpg";
import imgFeed from "../../../../assets/images/icoFeedPositivo.svg";
import imgFeed1_1_1Break from "../../../../assets/images/img-Full.jpg";

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
      title: {
        titleContent:
          "Um visitante deseja entrar no edifício sede da CDHU pela primeira vez e é informado de que precisa fazer um cadastro na recepção do condomínio. Como ele deve proceder?",
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
                  Informar todos os dados pessoais (nome, número de documentos
                  pessoais, endereço residencial, data de nascimento, entre
                  outros).
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
              content: <Fragment>Não informar nenhum dado pessoal. </Fragment>,
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
                <Fragment>Recusar-se a fazer o cadastro na recepção.</Fragment>
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
                  Informar apenas o nome e o número do RG e permitir tirar uma
                  foto do rosto.
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
                    Para realizar o cadastro na recepção, devem ser coletados o
                    nome completo e o número do Registro Geral (RG), além de uma
                    foto do rosto do visitante.
                  </Fragment>
                ),
              },
              {
                tagElement: "p",
                className: "",
                content: (
                  <Fragment>
                    De acordo com o artigo 6 da LGPD, o princípio da necessidade
                    é a limitação do tratamento ao mínimo necessário para a
                    realização de suas finalidades, com abrangência dos dados
                    pertinentes, proporcionais e não excessivos em relação às
                    finalidades do tratamento de dados.
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
      title: {
        titleContent:
          "O representante do departamento fiscal de um município do estado de São Paulo entrou em contato com a CDHU para solicitar a relação dos proprietários das unidades habitacionais entregues recentemente, com a finalidade de cadastro naquele órgão para a cobrança de IPTU. O pedido pode ser atendido?",
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
                  Não, porque os dados pessoais dos mutuários são sigilosos.
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
                  Sim, devendo ser fornecidas somente as informações essenciais
                  para o cadastro na prefeitura.
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
                  Não, porque o compartilhamento de dados pessoais dos mutuários
                  é proibido.
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
                  Sim, devendo ser fornecidos todos os dados cadastrais dos
                  mutuários.
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
                    A relação dos mutuários deverá conter: nome completo e CPF
                    do titular da unidade habitacional, além do endereço
                    completo do imóvel.
                  </Fragment>
                ),
              },
              {
                tagElement: "p",
                className: "",
                content: (
                  <Fragment>
                    De acordo com o artigo 26 da LGPD, o uso compartilhado de
                    dados pessoais pelo Poder Público deve atender a finalidades
                    específicas de execução de políticas públicas e atribuição
                    legal pelos órgãos e pelas entidades públicas, respeitados
                    os princípios de proteção de dados pessoais elencados no
                    artigo 6 dessa Lei.
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
