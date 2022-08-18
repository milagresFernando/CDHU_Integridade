// Css
import "./index.scss";

// React Elements/Hooks
import GlobalState from "../../contexts/globalState";
import { useState, useRef, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import Title from "../texts/title";

// Components
import { Container, Row, Col, Form } from "react-bootstrap";
import BotaoMenu from "./menu/botaomenu";
import Menu from "./menu";

function Header(props) {
  const headerInitialPos = { top: "0" };
  const [headerStyle, setHeaderStyle] = useState(headerInitialPos);
  const [showHeader, setShowHeader] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const headerRef = useRef(null);
  const { pagesData, setPagesData } = useContext(GlobalState);

  let prevScrollpos = window.pageYOffset;

  useEffect(() => {
    if (props.hideOnScroll) {
      window.addEventListener("scroll", hideOnScroll);
      return () => {
        window.removeEventListener("scroll", hideOnScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (props.hideOnScroll) {
      if (showHeader) {
        setHeaderStyle(headerInitialPos);
      } else {
        setHeaderStyle({ top: `${-headerRef.current.offsetHeight}px ` });
      }
    }
  }, [showHeader]);

  function hideOnScroll() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
      setShowHeader(false);
      props.setPaddingCapaTop(false);
    } else {
      setShowHeader(true);
      props.setPaddingCapaTop(true);
    }
    prevScrollpos = currentScrollPos;
  }

  function handleThemeChange(e) {
    props.setTemaCor(e.target.value);
  }

  return (
    <header
      style={headerStyle}
      ref={headerRef}
      className={`headerComponent ${props.className}`}
    >
      <Container>
        <Row className="align-items-center ">
          <Col
            xl={{ span: 9, offset: 1 }}
            xs="10"
            className="d-flex justify-content-start align-items-center"
          >
            <Title
              typeH="2"
              className="titleHeader"
              content={<Fragment>{"Integridade"}</Fragment>}
            ></Title>

            <Title
              typeH="3"
              className="subTitleHeader"
              content={
                <Fragment>
                  {pagesData.curso.conteudo.telas[props.pageAtual - 1].titulo}
                </Fragment>
              }
            ></Title>
          </Col>

          <Col xl="1" xs="2" className="d-flex justify-content-end">
            <BotaoMenu
              setMenuIsOpen={setMenuIsOpen}
              menuIsOpen={menuIsOpen}
              className=""
            />
          </Col>
        </Row>
      </Container>
      <Menu
        mode="varias paginas"
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
        pagesData={pagesData}
        pageAtual={props.pageAtual}
        className=""
      />
    </header>
  );
}

export default Header;
