// React Elements/Hooks
import React, { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import OneAnswer from "../../../../../components/quizz/oneAnswer";

//Imagens
import imgAnswer1 from "../../../../assets/images/icoQuestionQuizz.svg";
import imgFeed from "../../../../assets/images/icoFeedPositivo.svg";
import BlocoFinalizou from "./blocoFinalizou";
import BotoesNavegacao from "./botoesNavegacao";

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
    maxQuestions: 1,
    iconFeed: false,
    scrollAnimated: true,
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
    {
      title: {
        titleContent:
          "Após o término do prazo de inscrição dos interessados na aquisição de unidade habitacional de um empreendimento em construção, a CDHU divulga a relação de todos os inscritos, considerando que esta:",
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
              content: <Fragment>Não contenha qualquer dado pessoal.</Fragment>,
            },
          ],

          correct: "wrong",
        },
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: <Fragment>Informe todos os dados pessoais.</Fragment>,
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
                  Contenha a menor quantidade de dados pessoais possível.
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
                  Informe somente os dados autorizados pelos titulares.
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
                    A relação dos inscritos deve conter o número de inscrição, o
                    grupo ao qual cada inscrito pertence, nome completo do
                    titular e do(a) cônjuge/companheiro(a), quando houver, e o
                    número do CPF pseudonimizado (com alguns dígitos ocultos).
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
          "Por força de uma lei estadual, os técnicos da CDHU são obrigados a coletar informações sobre a etnia dos membros das famílias no processo de habilitação. Perante a LGPD, esse tipo de informação é definido como:",
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
              content: <Fragment>Dado anonimizado.</Fragment>,
            },
          ],

          correct: "wrong",
        },
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: <Fragment>Dado pessoal sensível.</Fragment>,
            },
          ],
          correct: "correct",
        },

        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: <Fragment>Uso compartilhado de dados.</Fragment>,
            },
          ],
          correct: "wrong",
        },
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: <Fragment>Relatório de impacto.</Fragment>,
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
                    De acordo com o artigo 5 da LGPD, dados pessoais sensíveis
                    são: dado pessoal sobre origem racial ou étnica, convicção
                    religiosa, opinião política, filiação a sindicato ou a
                    organização de caráter religioso, filosófico ou político,
                    dado referente à saúde ou à vida sexual, dado genético ou
                    biométrico, quando vinculado a uma pessoa natural.
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
          "Heitor ouviu dizer que a LGPD regulamenta o tratamento de dados pessoais e dados pessoais sensíveis armazenados em banco de dados. Desse modo, ele entende que as cópias físicas dos documentos dos mutuários, coletadas no processo de habilitação, não estão sujeitas à LGPD. Esse entendimento está:",
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
              content: <Fragment>Correto</Fragment>,
            },
          ],

          correct: "wrong",
        },
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: <Fragment>Errado.</Fragment>,
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
                    De acordo com o artigo 5 da LGPD, o banco de dados é um
                    conjunto estruturado de dados pessoais, estabelecido em um
                    ou em vários locais, em suporte eletrônico ou físico.
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
  const finalFeedComponents = (
    <Container>
      <BlocoFinalizou />
      <BotoesNavegacao />
    </Container>
  );
  const finalFeed = [{ type: "components" }, finalFeedComponents];

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
