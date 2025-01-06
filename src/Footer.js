import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Social Media Section */}
        <div style={styles.socialMedia}>
          <p style={styles.followUs}>Follow us.</p>
          <div style={styles.icons}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div style={styles.contact}>
          <p style={styles.phone}>678-490-7555</p>
          <a href="mailto:info@energysource.com" style={styles.email}>
            info@energysource.com
          </a>
        </div>
      </div>
    </footer>
  );
};

// Inline styles
const styles = {
  footer: {
    backgroundColor: "#f9f9f9", // Light gray background
    padding: "20px 40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
  },
  socialMedia: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  followUs: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  icons: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    width: "40px",
    height: "40px",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    fontSize: "1.2rem",
    textDecoration: "none",
  },
  contact: {
    textAlign: "right",
  },
  phone: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  email: {
    textDecoration: "underline",
    color: "#000",
  },
};

export default Footer;
