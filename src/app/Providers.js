"use client";

import { ThemeProvider } from "next-themes";
import { JsonContext } from "src/context/state";
import config from "@config/config.json";

const { default_theme } = config.settings;

const Providers = ({ children }) => {
  return (
    <JsonContext>
      <ThemeProvider attribute="class" defaultTheme={default_theme}>
        {children}
      </ThemeProvider>
    </JsonContext>
  );
};

export default Providers;
