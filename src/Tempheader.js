import React from "react";

const Tempheader = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logo}>
          <img
            src="https://via.placeholder.com/150x50" // Replace with your logo URL
            alt="Millstreet Energy Logo"
            style={styles.logoImage}
          />
          <span style={styles.logoText}>MILLSTREET ENERGY</span>
        </div>

        {/* Navigation Menu */}
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <a href="#" style={styles.navLink}>
                <span style={styles.activeIndicator}></span> HOME <span>▾</span>
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="#" style={styles.navLink}>
                PAGES <span>▾</span>
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="#" style={styles.navLink}>
                SERVICES <span>▾</span>
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="#" style={styles.navLink}>
                PORTFOLIO <span>▾</span>
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="#" style={styles.navLink}>
                BLOG <span>▾</span>
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="#" style={styles.navLink}>
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Inline Styles
const styles = {
  header: {
    backgroundColor: "#fff",
    padding: "10px 20px",
    borderBottom: "1px solid #ccc",
    position: "fixed",
    zIndex:100,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    height: "50px",
    marginRight: "10px",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#000",
  },
  nav: {
    display: "flex",
    alignItems: "center",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 15px",
    position: "relative",
  },
  navLink: {
    textDecoration: "none",
    fontSize: "1rem",
    color: "#000",
    fontWeight: "bold",
  },
  activeIndicator: {
    display: "inline-block",
    width: "8px",
    height: "8px",
    backgroundColor: "green",
    borderRadius: "50%",
    marginRight: "5px",
  },
};

export default Tempheader;
