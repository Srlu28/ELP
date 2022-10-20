import React from "react";

const styles = {
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
    marginBottom: "1px",
  },
  CustomFooter: {
    background: "#111",
    height: "10%",
    width: "100vw",
    color: "#fff",
  },
  CustomP: {
    maxWidth: "500px",
    margin: "10px auto",
    lineHeight: "28px",
    fontSize: "1rem",
    color: "#cacdd2",
  },
};

export default function Footer() {
  return (
    <footer style={styles.CustomFooter}>
      <div style={styles.FooterCont}>
        <h3 style={styles.titleFooter}>Contexto</h3>
        <p style={styles.CustomP}>
          Esta página web se ha creado en el contexto de la asignatura Ética
          Legislación y Profesión, para que los alumnos puedan realizar un
          simulacro de entrevista, cualquier duda contactar al mail:
          example@example.com
        </p>
      </div>
    </footer>
  );
}
