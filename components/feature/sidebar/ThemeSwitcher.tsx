"use client";

import React from "react";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";

const ThemeSwitcher = () => {
  return (
    <Expand
      // onClickCapture={onClick}
      className="text-secondary-text-dark text-xl max-lg:m-auto"
      duration={750}
    />
  );
};

export default ThemeSwitcher;
