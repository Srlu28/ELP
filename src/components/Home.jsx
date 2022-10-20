import { CssBaseline } from '@mui/material';
import React from 'react';
import Header from './Header'
import Visit from './PlaceToVisit';
import Footer from './Footer';

const styles = {
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg1.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    
};

export default function Home(){
  
  return (
      <div style={styles.root} className="rootCl">
        <CssBaseline/>
        <Header className="section"/>
        <Visit  className="section"/>
        <Footer/>
      </div>
  );
}