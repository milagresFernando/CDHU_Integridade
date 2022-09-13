import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { withScorm } from "react-scorm-provider";
import loadScorm_Function from "./globalFunctions/loadScorm_Function";
// import Guide from "./screens/guide";
import Page1 from "./screens/page1";
import Page2 from "./screens/page2";
import Page3 from "./screens/page3";
import Page4 from "./screens/page4";
import Page5 from "./screens/page5";
import GlobalState from "./contexts/globalState";

function ScreenRoutes(props) {
  const pagesArray = [Page1, Page2, Page3, Page4, Page5]; // adicione as chamadas de pagina desse array
  const { pagesData, setPagesData } = useContext(GlobalState);
  const { startPage, setStartPage } = useContext(GlobalState);
  const { menuPages, setMenuPages } = useContext(GlobalState);
  const [pagesAtual, setPagesAtual] = useState();
  const [allPages, setAllPages] = useState([]);
  const [checkConnect, setCheckConnect] = useState(false);
  const [checkLoaded, setCheckLoaded] = useState(false);
  const [checkPages, setCheckPages] = useState(false);
  const [counterEntry, setCounterEntry] = useState(0);
  const [errorLoader, setErrorLoader] = useState("Carregando...");
  let recebeLoad;

  useEffect(() => {
    if (counterEntry === 0) {
      setCounterEntry(counterEntry + 1);
    } else if (counterEntry > 0) {
      if (pagesData.curso.scorm && props.sco.apiConnected) {
        // console.log("CAMINHO 1");
        setCheckConnect(true);
      } else if (
        (!pagesData.curso.scorm && props.sco.apiConnected) ||
        (pagesData.curso.scorm && !props.sco.apiConnected)
      ) {
        setCheckConnect(false);
        if (props.sco.apiConnected) {
          setErrorLoader("JSON não configurado para o Scorm!");
        } else {
          setErrorLoader("SCORM Habilitado no JSON, Desabilite!");
        }
      } else {
        // console.log("CAMINHO 3");
        setCheckConnect(true);
      }
    }
  }, [props.sco.apiConnected, counterEntry]);

  useEffect(() => {
    if (checkConnect) {
      recebeLoad = loadScorm_Function(props.sco);
      setMenuPages(recebeLoad.menu);
      setStartPage(recebeLoad.paginaInicial);
      setCheckLoaded(true);
    }
  }, [checkConnect]);

  useEffect(() => {
    if (checkLoaded) {
      if (startPage !== 0) {
        let NameElement = pagesArray[startPage];
        setPagesAtual(
          <Route
            path={`/${pagesData.curso.conteudo.telas[startPage].route}`}
            element={<NameElement />}
          />
        );
      }

      setAllPages(
        pagesArray.map((Page, id) => {
          return (
            <Route
              exact
              key={id}
              path={`/${pagesData.curso.conteudo.telas[id].route}`}
              element={<Page />}
            />
          );
        })
      );

      setCheckPages(true);
    }
  }, [checkLoaded, menuPages, startPage]);

  if (checkPages == false) {
    return <div>{errorLoader}</div>;
  } else {
    return (
      <HashRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Navigate
                to={`${pagesData.curso.conteudo.telas[startPage].route}`}
              />
            }
          />
          {pagesAtual}
          {allPages}
        </Routes>
      </HashRouter>
    );
  }
}

export default withScorm()(ScreenRoutes);
