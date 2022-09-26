// React Elements/Hooks
import { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";

// Components
import CarouselWithoutImg from "../../../../../components/carouselWithoutImg";
import TextBlock from "../../../../../components/texts/text_block";

//Imagens
import ParallaxIlustraCarousel from "../../../../scrollParallaxSvg/parallaxIlustraCarousel";

function BlocoCarouselComImgEstatica() {
  const textsBlock1 = [
    {
      tagElement: "p",
      className: "mt-5",
      content: (
        <Fragment>
          Além disso, tanto a <strong>atuação</strong> quanto as{" "}
          <strong>decisões</strong> da CDHU são determinadas com fundamento nos
          seguintes <strong>valores:</strong>
        </Fragment>
      ),
    },
  ];
  const carouselItens = [
    {
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "carousel-text",
            content: (
              <Fragment>
                Compromisso com o <strong>cumprimento de seus objetivos</strong>
                .
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "carousel-text",
            content: (
              <Fragment>
                <strong>Respeito</strong> como prática em seus relacionamentos
                internos ou externos, com a permanente busca por{" "}
                <strong>melhoria na qualidade de vida</strong> de todos com os
                quais se relaciona.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "carousel-text",
            content: (
              <Fragment>
                <strong>Inovação</strong> na implementação de seus bens e
                serviços, processos e métodos organizacionais nas operações da
                empresa.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "carousel-text",
            content: (
              <Fragment>
                <strong>Ética, integridade e responsabilidade</strong> na forma
                de atuar, respeitando os{" "}
                <strong>princípios e melhores práticas</strong> da cidadania.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "carousel-text",
            content: (
              <Fragment>
                Atuação com <strong>responsabilidade e zelo</strong>, baseado em
                valores sociais, lealdade e respeito mútuo, comprometido com a{" "}
                <strong>busca da excelência</strong> e o desenvolvimento da
                empresa.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "carousel-text",
            content: (
              <Fragment>
                <strong>Qualidade</strong> na prestação de seus serviços.
              </Fragment>
            ),
          },
        ],
      },
    },
  ];
  return (
    <Fragment>
      <Row className="justify-content-center mb-md-5 pb-lg-5 pb-md-3 mb-5">
        <Col lg="10">
          <TextBlock textsBlock={textsBlock1} />
        </Col>
        <Col lg="5" className="order-lg-1 order-2">
          <CarouselWithoutImg
            carouselItens={carouselItens}
            generalInterval={null} //passe um número para definir o tempo de transicao automatica entre os slides
            pauseOnHover={true} //se true pausa o carrousel quando no mouse over, é necessário possuir um "generalInterval definido"
            indicators={true} //se false remove as setas de navegação
            counter={false} // se false remove o contador de itens
            loop={false} //se for false não deixa voltar a partir do primeiro item ou avancar a partir do ultimo
            textOverImg={false} //se true deixa a imagem como background e ignora do todos os imgSides dos itens
            breakOn="sm" // quebra o carrosel em vários blocos, remove on controles e botões. Passe "xs","sm","md","lg","xl","xxl"
            breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </Col>
        <Col lg="5" className="order-lg-2 relative">
          <ParallaxIlustraCarousel />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoCarouselComImgEstatica;
