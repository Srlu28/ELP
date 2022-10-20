import {AppBar, IconButton, Toolbar, Collapse, Box, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import LongMenu from "./LongMenu";
import { Link as LogoLink } from "react-router-dom";
import { CssBaseline } from "@mui/material";

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
          <Typography variant="h3" style={styles.AppBarTitle}>
            <span style={styles.TextColor}>Logic</span>stics.
          </Typography>
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
          <Typography variant="h1" style={styles.title}>
            <span style={styles.TextColor}>Logic</span>stics
          </Typography>
          <Box style={styles.Back} pt={1} pr={4} pl={4} pb={1}>
            <Typography variant="body1" style={styles.subtitle}>
              Ayudamos a miles de empresas de moda a
              reducir la sobreproducción.<br/>

              Nuestros valores:
              <ul style={{listStyleType: 'none'}}>
                <li><b>Menos es más</b>: creemos en que podemos hacer más con menos.
                  La eficiencia es nuestra prioridad </li>
                <li><b>Líderes</b>: queremos permanecer en la vanguardia de la revolución tecnológica</li>
              </ul>
            </Typography>
          </Box>
        </div>
      </Collapse>
    </div>
  );
}
