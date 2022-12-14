import {AppBar, IconButton, Toolbar, Collapse, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import LongMenu from "./LongMenu";
import { Link as LogoLink } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Button from '@mui/material/Button';

//const color1 = "#A4B6DD";
const color2 = "#5AFF3D";
const color3 = "#33AB5F"

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
    padding: "0 20%"
  },
  subtitle: {
    color: "#f2f2f2",
  },
  goDown: {
    color: color3,
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
  CustomButton:{
    width: '250px', 
    height: '80px', 
    fontSize:'1.5rem', 
    borderRadius: "20px",
    backgroundColor: color3
  }
};

export default function Internship() {
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
          <Typography variant="h2" style={styles.title}>
            ??Quieres desarrollar para una empresa l??der en el sector?
          </Typography>
          <Button variant="contained" style={styles.CustomButton}><a href="https://google.es" style={{textDecoration:"none",color:"white"}}>Env??anos tu CV</a></Button>
        </div>
      </Collapse>
    </div>
  );
}
