// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Col } from "react-bootstrap";
import Title from "../../../../../components/texts/title";
import List from "../../../../../components/texts/lists";
import codigoPdf from "../../../../assets/pdfs/Codigo_de_Conduta_e_Integridade.pdf";
import estatutoPdf from "../../../../assets/pdfs/Estatuto_Social_CDHU.pdf";
import lgpdPdf from "../../../../assets/pdfs/LGPD.pdf";
import programaPdf from "../../../../assets/pdfs/Programa_Integridade_CDHU.pdf";

//Imagens

function BlocoListas() {
  const listItens1 = [
    {
      className: "",

      content: (
        <Fragment>
          BLOK, Marcella. <strong>Compliance e governança corporativa.</strong>{" "}
          3. ed. Freitas Bastos Editora.
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          DONDA, Daniel. <strong>Guia Prático de Implementação da LGPD.</strong>{" "}
          Editora Labrador.
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          MALDONADO, Viviane Nobrega (coord.). LGPD – Lei Geral de Proteção de
          Dados Pessoais. Manual de Implementação. 2. ed. Revista dos Tribunais.
          <strong></strong> Ed. Thomson Reuters, 2021.
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          PINHEIRO, Caroline da Rosa (coord.). <strong>Compliance</strong> –
          entre a teoria e a prática. Reflexões Contemporâneas e Análise dos
          Programas de Integridade das Companhias Listadas no Novo Mercado.
          Editora Foco, 2022.
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          SILVEIRA, Alexandre Di Miceli da.
          <strong>Governança corporativa</strong> – O Essencial para Líderes. 2.
          ed. Editora Virtuous Company.
        </Fragment>
      ),
    },
    {
      className: "",
      content: <Fragment>Código de Conduta e Integridade CDHU</Fragment>,
      anchor: codigoPdf,
      download: true,
    },
    {
      className: "",
      content: <Fragment>Estatutos Sociais CDHU</Fragment>,
      anchor: estatutoPdf,
      download: true,
    },
    {
      className: "",
      content: <Fragment>LGPD</Fragment>,
      anchor: lgpdPdf,
      download: true,
    },
    {
      className: "",
      content: <Fragment>Programa de Integridade CDHU</Fragment>,
      anchor: programaPdf,
      download: true,
    },
  ];
  const listItens2 = [
    {
      className: "",

      content: (
        <Fragment>
          AEVO. Disponível em:{" "}
          <a href="https://aevo.com.br/" target="_blank">
            https://aevo.com.br
          </a>
          . Acesso em: 23 jun. 2022.
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          BetterUP. Disponível em:{" "}
          <a href="https://www.betterup.com/" target="_blank">
            https://www.betterup.com
          </a>
          . Acesso em: 23 jun. 2022.
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          Deliste Brasil. Disponível em:{" "}
          <a href="https://www2.deloitte.com/br/pt.html" target="_blank">
            https://www2.deloitte.com/br/pt.html
          </a>
          . Acesso em: 23 jun. 2022.
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          Ernst & Young Global. Disponível em:{" "}
          <a href="https://www.ey.com/en_br" target="_blank">
            https://www.ey.com/en_br
          </a>
          . Acesso em: 23 jun. 2022.
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          Ministério Público Federal. Disponível em:{" "}
          <a href="http://www.mpf.mp.br/o-mpf" target="_blank">
            http://www.mpf.mp.br/o-mpf
          </a>
          . Acesso em: 23 jun. 2022.
        </Fragment>
      ),
    },
  ];
  return (
    <Fragment>
      <Col lg="10" className="mb-5">
        <List tagElement="ul" listItens={listItens1} className="" />
      </Col>

      <Col lg="10" className="mb-5">
        <Title
          typeH="4"
          className=""
          content={<Fragment>Meios eletrônicos</Fragment>}
        />
        <hr />
        <List tagElement="ul" listItens={listItens2} className="" />
      </Col>
    </Fragment>
  );
}

export default BlocoListas;
