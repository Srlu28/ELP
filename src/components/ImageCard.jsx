import React from "react";
import { Card, CardContent, CardMedia, Collapse, Typography } from "@mui/material";

const styles = {
    root: {
        maxWidth: 645,
        background: "rgba(0,0,0,0.5)",
        margin: "20px",
    },
    media: {
        height: 440,
    },
    title: {
        fontFamily: "Nunito",
        fontWeight: "bold",
        fontSize: "2rem",
        color: "#fff",
    },
    desc: {
        fontFamily: "Nunito",
        fontSize: "1.1rem",
        color: "#ddd",
    },
};

const ImageCard = ({ card, checked }) => {
    return <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card style={styles.root}>
        <CardMedia
          style={styles.media}
          image={card.imageUrl}
          title="Prácticas"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            style={styles.title}
          >
            {card.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={styles.desc}
          >
            {card.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>;
}

export default ImageCard;