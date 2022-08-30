import React, { useState, useEffect } from "react";
import { tabs } from "../data/Utils";

const Tabs = () => {
  const [newTabs, setNewTabs] = useState(tabs);
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-inner-container">
        {newTabs.map((item, i) => {
          const { title } = item;
          return (
            <ul key={i} className="tabs-items-container">
              <li onClick={() => handleClick(i)}>{title}</li>
            </ul>
          );
        })}
      </div>

      <div className="tabs-description-container">
        {newTabs.map((item, i) => {
          const { title, image, paragraph, content } = item;
          return (
            <div
              key={i}
              className={`tabs-inner-description ${index !== i && "hidden"}`}
            >
              <img src={image} alt={title} />
              <div className="tab-description">
                {paragraph && <p>{paragraph}</p>}
                <ul>
                  {content.map((contentArray, i) => {
                    return <li key={i}>{contentArray}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
