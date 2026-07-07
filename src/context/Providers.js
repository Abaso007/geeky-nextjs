"use client";

import { JsonContext } from "@/context/state";
import config from "@config/config.json";
import { ThemeProvider } from "next-themes";

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
