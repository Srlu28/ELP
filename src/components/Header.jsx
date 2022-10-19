import { AppBar, IconButton, Toolbar, Collapse, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LongMenu from "./LongMenu";
import { Link, animateScroll as Scroll } from 'react-scroll';


const color1 = "#A4B6DD";
const color2 = "#5AFF3D";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  AppBarCustom: {
    background: "none",
  },
  MenuIcon: {
    color: "#fff",
    height: "30px",
    width: "30px",
  },
  TextColor: {
    color: color2,
  },
  AppBarTitle: {
    flexGrow: "1",
  },
  AppBarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  subtitle: {
    color: "#f2f2f2",
    fontSize: "1.5rem",
  },
  goDown: {
    color: color2,
    fontSize: "4rem",
  },
  Logo: {
    color: "#fff",
    height: "30px",
    width: "40px",
    margin: "1rem",
  },
  Back: {
    backgroundColor: "rgba(106, 106, 106, 0.56)",
    boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    borderRadius: "20px",
  },
};

export default function Header() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div style={styles.root} id="header">
      <AppBar style={styles.AppBarCustom} elevation={0}>
        <Toolbar style={styles.AppBarWrapper}>
          <IconButton style={styles.Logo}>
            <img style={styles.Logo} src="/assets/railway.png" alt="logo" />
          </IconButton>
          <h1 style={styles.AppBarTitle}>
            <span style={styles.TextColor}>Logic</span>stics.
          </h1>
          <IconButton>
            <LongMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div style={styles.container}>
          <h1 style={styles.title}>
            Bienvenido a <br />
            <span style={styles.TextColor}>Logic</span>stics.
          </h1>
          <Box style={styles.Back} pt={1} pr={4} pl={4} pb={1}>
            <p style={styles.subtitle}>
              Logicstics es una empresa dedicada a la creación de algoritmos de
              Machine Learning <br />
              para la predicción de la demanda de prendas de ropa tienda a
              tienda.
              <br />
              De esta manera no tienen que mantener stock, evitando la
              sobreproducción <br />y apoyando que la industria de la moda sea
              más sostenible.
            </p>
          </Box>
          <Link to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon style={styles.goDown} />
            </IconButton>
          </Link>
        </div>
      </Collapse>
    </div>
  );
}
