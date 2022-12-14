import React from "react";
import { Fragment, useEffect, useState } from "react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import PagesService from "./services/pages";
import ScreenRoutes from "./routes";
import GlobalState from "./contexts/globalState"; //state global
import { ParallaxProvider } from "react-scroll-parallax";
// import ScormProvider from "react-scorm-provider";

function App() {
  const [pagesData, setPagesData] = useState(false);

  //checagem se o navegador suporta o userAgentData
  let platform =
    navigator?.userAgentData?.platform || navigator?.platform || "unknown";

  //checagem se é um dispostivo IOS
  let iOS = /iPad|iPhone|iPod|macOS|MacIntel/.test(platform);
  // macOS|MacIntel

  let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (iOS) {
      document.body.classList.add("ios");
    }
    if (isSafari) {
      document.body.classList.add("safari");
    }
  }, []);

  async function loadData() {
    const data = await PagesService.getPages();
    setPagesData(data);
  }

  if (pagesData === false) {
    return (
      <Fragment>
        <div className="loadingContent">
          <div className="loaderSpinner">
            <div className="loadingio-spinner">
              <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    document.title = pagesData.curso.titulo;

    return (
      <GlobalState.Provider value={{ pagesData, setPagesData }}>
        <ParallaxProvider>
          <ScreenRoutes pagesData={pagesData} />
        </ParallaxProvider>
      </GlobalState.Provider>
    );
  }
}

export default App;
