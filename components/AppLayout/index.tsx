import { ThemeProvider } from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import GlobalStyles from "../../globalStyles";
import { lightTheme, darkTheme } from "../../theme";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useEffect } from "react";
import React from "react";
import dynamic from "next/dynamic";

const AppLayout = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  setTimeout(() => {
    console.log("time out event");
    console.log(window);
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addListener(e => {
      const darkModeOn = e.matches;
      console.log(`Dark mode is ${darkModeOn ? "🌒 on" : "☀️ off"}.`);
    });
  }, 3000);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default AppLayout;
