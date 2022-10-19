import { CssBaseline } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Header from './components/Header'
import Visit from './components/PlaceToVisit';

const styles = {
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg1.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
};

export default function App(){
  return (
      <div style={styles.root}>
        <CssBaseline/>
        <Header/>
        <Visit/>
      </div>
  );
}