import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/CategoriesPage.css";

function ContactPage() {
  const styles = {
    container: {
      minHeight: "100vh",
      background:
        "linear-gradient(to bottom, var(--space-black), var(--space-deep-blue))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    },
    card: {
      width: "100%",
      maxWidth: "768px",
      backgroundColor: "#fff",
      borderRadius: "1rem",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      padding: "2rem",
    },
    heading: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "2.5rem",
      textAlign: "center",
    },
    form: {
      padding: "1.25rem",
    },
    label: {
      display: "block",
      fontSize: "0.875rem",
      fontWeight: 600,
      color: "#374151",
      marginBottom: "0.625rem",
    },
    input: {
      width: "100%",
      height: "2.5rem",
      borderRadius: "0.75rem",
      border: "1px solid #d1d5db",
      padding: "0.75rem 1rem",
      color: "#374151",
      fontSize: "1rem",
      outline: "none",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      transition: "all 0.2s",
    },
    textarea: {
      width: "100%",
      borderRadius: "0.75rem",
      border: "1px solid #d1d5db",
      padding: "0.75rem 1rem",
      color: "#374151",
      fontSize: "1rem",
      outline: "none",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      transition: "all 0.2s",
      resize: "none",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.5rem",
    },
    fullWidth: {
      marginTop: "1rem",
    },
    button: {
      width: "100%",
      backgroundColor: "#2563eb",
      color: "#fff",
      fontWeight: 600,
      padding: "0.75rem",
      borderRadius: "0.75rem",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      transition: "background-color 0.3s",
    },
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Contact Us</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.grid}>
            <div>
              <label style={styles.label}>Name</label>
              <input type="text" placeholder="Your name" style={styles.input} />
            </div>
            <div>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="Your email"
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.fullWidth}>
            <label style={styles.label}>Subject</label>
            <input type="text" placeholder="Subject" style={styles.input} />
          </div>

          <div style={styles.fullWidth}>
            <label style={styles.label}>Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              style={styles.textarea}
            ></textarea>
          </div>

          <div style={styles.fullWidth}>
            <button
              type="submit"
              style={{
                ...styles.button,
                backgroundColor: isSubmitting ? "#3b82f6" : "#2563eb",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner"
                    style={{
                      width: "16px",
                      height: "16px",
                      border: "2px solid white",
                      borderTop: "2px solid transparent",
                      borderRadius: "50%",
                      marginRight: "8px",
                      animation: "spin 1s linear infinite",
                    }}
                  ></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default ContactPage;
