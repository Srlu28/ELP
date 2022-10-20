import React from "react";
import "./App.css";
import About from "./components/About";
import Internship from "./components/Internship";
import { Route, Routes } from "react-router";
import Home from "./components/Home";

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

export default function App() {
  return (
    <div style={styles.root} className="rootCl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Internship" element={<Internship />} />
      </Routes>
    </div>
  );
}
