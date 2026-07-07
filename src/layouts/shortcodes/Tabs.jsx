"use client";

import { useEffect, useRef, useState } from "react";
import React from "react";

function Tabs({ children }) {
  const [active, setActive] = useState(0);
  const tabItems = React.Children.toArray(children);

  return (
    <div className="relative">
      <ul className="mb-0 flex list-none items-center space-x-4 pl-0">
        {tabItems.map((item, index) => (
          <li
            key={index}
            className={`m-0 cursor-pointer rounded px-8 py-3 font-bold text-text-dark dark:text-darkmode-text-light ${
              index === active ? "active-tab" : ""
            }`}
            onClick={() => setActive(index)}
          >
            {item.props.name}
          </li>
        ))}
      </ul>
      <ul
        className="mt-1 mb-0 list-none rounded bg-light p-6 dark:bg-darkmode-dark"
      >
        {tabItems.map((item, index) => (
          <li
            key={index}
            className={`tab-item my-0 ${index === active ? "" : "hidden"}`}
          >
            {item.props.children}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
