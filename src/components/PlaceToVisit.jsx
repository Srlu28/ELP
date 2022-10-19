import React from 'react';
import ImageCard from './ImageCard';
import cards from '../static/cards';
import useWindowPosition from '../hook/useWindowPosition';

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
        <ImageCard card={cards[1]} checked={checked} />
        <ImageCard card={cards[0]} checked={checked} />
      </div>
    );
};
export default Visit;