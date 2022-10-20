import React from "react";
import "./App.css";
import About from "./components/About";
import Internship from "./components/Internship";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import {createTheme, CssBaseline, responsiveFontSizes, ThemeProvider} from "@mui/material";

const styles = {
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg1.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  FooterCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  titleFooter: {
    fontSize: "2.1rem",
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: "3rem",
    marginBottom:"1px"
  },
  CustomFooter:{
    background: "#111",
    height: "10%",
    width: "100vw",
    color: "#fff",
  },
  CustomP:{
    maxWidth: "500px",
    margin: "10px auto",
    lineHeight: "28px",
    fontSize: "1rem",
    color: "#cacdd2",
  }
};

const theme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: "Nunito"
  }
}));

theme.typography.h1 = {
  fontSize: '1.5rem',
  '@media (max-width:800px)': {
    fontSize: '3.5rem',
  },
};

theme.typography.h2 = {
  fontSize: '1.5rem',
  '@media (max-width:800px)': {
    fontSize: '2.5rem',
  },
};

theme.typography.h3 = {
  fontSize: '1rem',
  '@media (max-width:800px)': {
    fontSize: '1.5rem',
  },
};


theme.typography.body1 = {
  fontSize: '0.5rem',
  '@media (max-width:800px)': {
    fontSize: '1.25rem',
  },
};


export default () => <div style={styles.root} className="rootCl">
  <ThemeProvider  theme={theme}>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Internship" element={<Internship />} />
    </Routes>
  </ThemeProvider>
</div>;
