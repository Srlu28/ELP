import React from 'react';
import ImageCard from './ImageCard';
import cards from '../static/cards';
import useWindowPosition from '../hook/useWindowPosition';
import { Link } from "react-router-dom";

const styles = {
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

const Visit = () => {
    const checked = useWindowPosition('header');
    return (
      <div style={styles.root} id="place-to-visit">
        <Link style={{textDecoration:"none"}}to={'/Internship'}>
          <ImageCard card={cards[1]} checked={checked} />
        </Link>
        <Link style={{textDecoration:"none"}}to={'/About'}>
          <ImageCard card={cards[0]} checked={checked} />
        </Link>
      </div>
    );
};
export default Visit;