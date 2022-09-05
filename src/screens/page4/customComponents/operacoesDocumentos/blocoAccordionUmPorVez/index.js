// React Elements/Hooks
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

// Components
import Accordions from "../../../../../components/accordions";
import TextBlock from "../../../../../components/texts/text_block";
import imgUrl from "../../../../assets/images/img-Float.jpg";
import imgUrlBreak from "../../../../assets/images/img-Full.jpg";

//Imagens

function BlocoAccordionUmPorVez() {
  const textsBlock1 = [
    {
      tagElement: "p",
      className: "mb-0",
      content: (
        <Fragment>
          Destacamos, também, conforme artigo 6º, que as{" "}
          <strong>atividades de tratamento de dados pessoais</strong> deverão
          observar a boa-fé e os seguintes <strong>princípios</strong>:
        </Fragment>
      ),
    },
  ];
  const accordionItens = [
    {
      title: {
        titleContent: "FINALIDADE",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "right",
        colMd: "4",
        colLg: "4",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "accordion-text",
            content: (
              <Fragment>
                Realização do tratamento para{" "}
                <strong>
                  propósitos legítimos, específicos,explícitos e informados ao
                  titular,
                </strong>{" "}
                sem possibilidade de tratamento posterior de forma incompatível
                com essas finalidades.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "ADEQUAÇÃO",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "right",
        colMd: "4",
        colLg: "4",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "accordion-text",
            content: (
              <Fragment>
                <strong>Compatibilidade</strong> do tratamento com as{" "}
                <strong>finalidades informadas</strong> ao titular, de acordo
                com o contexto do tratamento.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "NECESSIDADE",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "right",
        colMd: "4",
        colLg: "4",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "accordion-text",
            content: (
              <Fragment>
                Limitação do tratamento ao <strong>mínimo necessário </strong>
                para a realização de suas finalidades, com abrangência dos dados
                pertinentes, proporcionais e não excessivos em relação às
                finalidades do tratamento de dados.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "LIVRE ACESSO",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "right",
        colMd: "4",
        colLg: "4",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "accordion-text",
            content: (
              <Fragment>
                Garantia aos titulares de
                <strong> consulta facilitada e gratuita</strong> sobre a forma e
                a duração do tratamento, bem como sobre a integralidade de seus
                dados pessoais.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "QUALIDADE DOS DADOS",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "right",
        colMd: "4",
        colLg: "4",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "accordion-text",
            content: (
              <Fragment>
                Garantia aos titulares de{" "}
                <strong> exatidão, clareza, relevância e atualização</strong>{" "}
                dos dados, de acordo com a necessidade e para o cumprimento da
                finalidade de seu tratamento.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "TRANSPARÊNCIA",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "right",
        colMd: "4",
        colLg: "4",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "accordion-text",
            content: (
              <Fragment>
                Garantia aos titulares de{" "}
                <strong>
                  informações claras, precisas e facilmente acessíveis
                </strong>{" "}
                sobre a realização do tratamento e os respectivos agentes de
                tratamento, observados os segredos comercial e industrial.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "SEGURANÇA",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "right",
        colMd: "4",
        colLg: "4",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "accordion-text",
            content: (
              <Fragment>
                Utilização de{" "}
                <strong>medidas técnicas e administrativas</strong> aptas a{" "}
                <strong>proteger os dados pessoais</strong> de acessos não
                autorizados e de situações acidentais ou ilícitas de destruição,
                perda, alteração, comunicação ou difusão.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "PREVENÇÃO",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "right",
        colMd: "4",
        colLg: "4",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "accordion-text",
            content: (
              <Fragment>
                Adoção de medidas para
                <strong> prevenir a ocorrência de danos</strong> em virtude do
                tratamento de dados pessoais.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "NÃO DISCRIMINAÇÃO",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "right",
        colMd: "4",
        colLg: "4",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "accordion-text",
            content: (
              <Fragment>
                Impossibilidade de realização do tratamento para
                <strong> fins discriminatórios ilícitos ou abusivos</strong>.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "RESPONSABILIZAÇÃO E PRESTAÇÃO DE CONTAS",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "right",
        colMd: "4",
        colLg: "4",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "accordion-text",
            content: (
              <Fragment>
                Demonstração, pelo agente, da adoção de medidas eficazes e
                capazes de{" "}
                <strong>comprovar a observância e o cumprimento </strong> das
                normas de proteção de dados pessoais e, inclusive, da{" "}
                <strong>eficácia</strong> dessas medidas.
              </Fragment>
            ),
          },
        ],
      },
    },
  ];
  return (
    <Fragment>
      <Row className="justify-content-center relative">
        <Col lg="10">
          <TextBlock textsBlock={textsBlock1} />
          <Accordions
            className=""
            accordionItens={accordionItens}
            type=""
            alwaysOpen={false}
            breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoAccordionUmPorVez;
