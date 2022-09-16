// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import Destaques from "../../../../../components/destaques";

function BlocoSaibaMais() {
  const textsBlock = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          <a
            href="https://www.cdhu.sp.gov.br/web/guest/-/governanca-corporativa?inheritRedirect=true&redirect=https://www.cdhu.sp.gov.br/web/guest/home?p_p_id%3Dcom_liferay_portal_search_web_portlet_SearchPortlet%26p_p_lifecycle%3D0%26p_p_state%3Dmaximized%26p_p_mode%3Dview%26_com_liferay_portal_search_web_portlet_SearchPortlet_redirect%3Dhttps://www.cdhu.sp.gov.br/web/guest/home?p_p_id%3Dcom_liferay_portal_search_web_portlet_SearchPortlet%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26_com_liferay_portal_search_web_portlet_SearchPortlet_mvcPath%3D/search.jsp%26_com_liferay_portal_search_web_portlet_SearchPortlet_keywords%3Dc%C3%B3digo%26_com_liferay_portal_search_web_portlet_SearchPortlet_formDate%3D1659443275108%26_com_liferay_portal_search_web_portlet_SearchPortlet_scope%3Dthis-site"
            target="_blank"
          >
            <strong>Clique aqui</strong>
          </a>{" "}
          para acessar o Programa de Integridade da CDHU na íntegra e saber mais{" "}
          <strong>detalhes de sua estrutura e aplicação.</strong>
        </Fragment>
      ),
    },
  ];
  return (
    <Row className="justify-content-center">
      <Col lg="10">
        <Destaques
          title="Saiba Mais"
          className="saibaMais mt-4 mb-5"
          textsBlock={textsBlock}
        />
      </Col>
    </Row>
  );
}

export default BlocoSaibaMais;
