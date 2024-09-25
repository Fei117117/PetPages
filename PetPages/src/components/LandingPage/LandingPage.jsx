import "./landingPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";

function LandingPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const goToHelperPage = () => {
    navigate("/Helper");
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailPattern.test(email)) {
      const templateParams = {
        user_email: email,
      };

      emailjs
        .send(
          "service_s1zycp3", // Replace with your EmailJS service ID
          "template_54o2e5v", // Replace with your EmailJS template ID
          templateParams,
          "JlpmbJo_CxRsT0bcV" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log(
              "Email successfully sent!",
              response.status,
              response.text
            );
            setMessage("Email sent successfully!");
          },
          (err) => {
            console.log("Failed to send email. Error: ", err);
            setMessage("Failed to send email. Please try again.");
          }
        );
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="container">
      <img src="../../assets/logo.jpg" alt="Logo" className="logo" />
      <h1 className="text">✨Launching soon ...✨</h1>
      <div className="email">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
          required
        />
        <button onClick={handleEmailSubmit} className="submit-button">
          Notify Me
        </button>
        <p>{message}</p>
      </div>
      <button onClick={goToHelperPage}>What is PetPages</button>
    </div>
  );
}

export default LandingPage;
