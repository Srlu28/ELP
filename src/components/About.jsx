import { AppBar, IconButton, Toolbar, Collapse, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LongMenu from "./LongMenu";
import { Link as LogoLink } from "react-router-dom";
import { CssBaseline } from "@mui/material";

//const color1 = "#A4B6DD";
const color2 = "#5AFF3D";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg1.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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

export default function About() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div style={styles.root} id="header">
      <CssBaseline />
      <AppBar style={styles.AppBarCustom} elevation={0}>
        <Toolbar style={styles.AppBarWrapper}>
          <LogoLink to={"/"}>
            <IconButton style={styles.Logo}>
              <img style={styles.Logo} src="/assets/railway.png" alt="logo" />
            </IconButton>
          </LogoLink>
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
            ¿Qué es <br />
            <span style={styles.TextColor}>Logic</span>stics?
          </h1>
          <Box style={styles.Back} pt={1} pr={4} pl={4} pb={1}>
            <p style={styles.subtitle}>
              Cuando Maider Mansilla , Arantxa Rosell y Luisa Galvan fundaron
              Logicstics en 1969, no sabían que <br />
              estaban revolucionando el mundo de la logística. Hoy, Logicstics
              es la empresa de logística líder en el <br />
              mundo. Nuestros 380 000 empleados en más de 220 países y
              territorios trabajan todos los días para <br />
              ayudarle a superar barreras, llegar a nuevos mercados y hacer
              crecer su negocio. La metodología que ha <br />
              llevado al éxito a Logicstics ha sido la implementación de
              Inteligencia Artificial en su flujo de trabajo,
              <br />
              ayudando a miles de empresas dedicadas al sector de la moda a
              reducir la sobreproducción de ropa, <br />
              facilitando un modelo que sea sostenible con el Medio Ambiente y
              que ayude a evitar el desperdicio de ropa. <br />
            </p>
          </Box>
        </div>
      </Collapse>
    </div>
  );
}
