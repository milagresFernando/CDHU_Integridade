// Css
import "./index.scss";

// React Elements/Hooks
import { useState, useEffect } from "react";

// Components
import { Tab, Nav } from "react-bootstrap";
import TextBlock from "../texts/text_block";
import FlexImgWithText from "../images/flexImgWithText";

//Functions
import generateId from "../../globalFunctions/generateId";

function TabsBootstrap(props) {
  const [randomId, setRandomId] = useState("");
  const [tabIsImgFull, setTabIsImgFull] = useState(false);
  const [clickTab, setClickTab] = useState(false);

  //imgSide pode ser "top", "left", "bottom" ,"right" "fullRight" ou "fullLeft"

  async function handleClickTabs(images, id) {
    // seta a imgFull quando a tab abre
    setClickTab(!clickTab);
    if (
      images &&
      (images.imgSide === "fullLeft" || images.imgSide === "fullRight")
    ) {
      setTabIsImgFull(true);
    } else {
      setTabIsImgFull(false);
    }
  }

  useEffect(() => {
    setRandomId(generateId());
  }, []);

  const tabsHeaders = props.tabsItens.map((tabItem, id) => {
    return (
      <Nav.Item key={id} onClick={() => handleClickTabs(tabItem.images, id)}>
        <Nav.Link eventKey={id} className={tabItem.title.titleClassName}>
          {tabItem.title.titleContent}
        </Nav.Link>
      </Nav.Item>
    );
  });
  const tabsItens = props.tabsItens.map((tabItem, id) => {
    return (
      <Tab.Pane
        eventKey={id}
        key={id}
        className={`${tabItem.images ? "bodyWithImg" : ""} 
        ${
          tabItem.images
            ? tabItem.images.imgSide === "fullLeft"
              ? "fullLeft"
              : tabItem.images.imgSide === "left"
              ? "left"
              : tabItem.images.imgSide === "right"
              ? "right"
              : tabItem.images.imgSide === "fullRight"
              ? "fullRight"
              : tabItem.images.imgSide === "bottom"
              ? "bottom"
              : tabItem.images.imgSide === "top"
              ? " top"
              : ""
            : ""
        } ${tabItem.contents.contentClassName}`}
      >
        {tabItem.images && (
          <FlexImgWithText
            isTabs={true}
            breakContent={props.breakContent}
            typeHeaderTabs={props.typeHeader}
            clickTab={clickTab}
            tabIsImgFull={tabIsImgFull}
            textsBlock={tabItem.contents.textBlocks}
            imgSide={tabItem.images.imgSide}
            imgUrl={tabItem.images.imgUrl}
            imgUrlBreak={tabItem.images.imgUrlBreak}
            rowClasses={tabItem.images.rowClasses}
            colXs={tabItem.images.colXs}
            colSm={tabItem.images.colSm}
            colMd={tabItem.images.colMd}
            colLg={tabItem.images.colLg}
            colXl={tabItem.images.colXl}
            colXXl={tabItem.images.colXXl}
          />
        )}

        {!tabItem.images && (
          <div
            className={`${
              props.typeHeader === "vertical" ? "p-tabs-vertical" : ""
            }`}
          >
            <TextBlock textsBlock={tabItem.contents.textBlocks} />
          </div>
        )}
      </Tab.Pane>
    );
  });
  return (
    <div className={`tabs ${props.className}`}>
      <Tab.Container defaultActiveKey={0} id={randomId} className="mb-3 ">
        <Nav className={`${props.typeHeader ? props.typeHeader : ""}`}>
          {tabsHeaders}
        </Nav>

        <Tab.Content className="">{tabsItens}</Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default TabsBootstrap;
