import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 MyShop. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#007bff",
    color: "white",
    marginTop: "auto",
  },
};

export default Footer;
