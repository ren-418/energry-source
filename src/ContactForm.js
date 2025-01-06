import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contactContainer">
      {/* Left Section: Title and Description */}
      <div style={styles.leftSection}>
        <h2 style={styles.heading}>Get started today.</h2>
        <p style={styles.description}>
          Sign up for a no-cost, no-obligation energy assessment and one of our
          experts will get back to you within 24 hours.
        </p>
      </div>

      {/* Right Section: Form */}
      <div style={styles.rightSection}>
        <form>
          {/* Name */}
          <label style={styles.label}>
            Name <span style={styles.required}>(required)</span>
          </label>
          <div style={styles.nameFields}>
            <input
              type="text"
              placeholder="First Name"
              style={{ ...styles.input, marginRight: "10px" }}
            />
            <input type="text" placeholder="Last Name" style={styles.input} />
          </div>

          {/* Email */}
          <label style={styles.label}>
            Email <span style={styles.required}>(required)</span>
          </label>
          <input type="email" placeholder="Email" style={styles.input} />

          {/* Message */}
          <label style={styles.label}>
            Message <span style={styles.required}>(required)</span>
          </label>
          <textarea placeholder="Message" style={styles.textarea}></textarea>

          {/* Submit Button */}
          <button type="submit" style={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     padding: "40px 300px",
//     backgroundColor: "#333", // Dark background
//     color: "#fff",
//     marginTop: "150px",
//   },
  leftSection: {
    flex: 1,
    marginRight: "20px",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  rightSection: {
    flex: 1.5,
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  required: {
    fontSize: "0.8rem",
    color: "#ccc",
  },
  nameFields: {
    display: "flex",
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "100px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    resize: "none",
    marginBottom: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "transparent",
    border: "2px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ContactForm;
