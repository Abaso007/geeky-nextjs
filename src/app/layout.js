import Header from "@layouts/partials/Header";
import Footer from "@layouts/partials/Footer";
import config from "@config/config.json";
import theme from "@config/theme.json";
import TwSizeIndicator from "@layouts/components/TwSizeIndicator";
import Providers from "./Providers";
import "@/styles/style.scss";

const { site } = config;
const { font_family } = theme.fonts;
const { favicon } = config.site;

export const metadata = {
  title: site.title,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href={favicon} />
        <meta name="theme-name" content="geeky-nextjs" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${font_family.secondary}&family=${font_family.primary}&display=swap`}
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        <TwSizeIndicator />
      </body>
    </html>
  );
}
