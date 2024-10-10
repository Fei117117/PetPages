import "./landingPage.css";
import { useNavigate } from "react-router-dom";

function Helper() {
  const navigate = useNavigate();
  const goToLandingPage = () => {
    navigate("/");
  };
  return (
    <div className="page-background1">
      <div className="container">
        <h1 className="title-helper">What is PetPages</h1>
        <p id="text-helper">
          Using a form of narrative therapy, PetPages provides you with prompts
          to allow you & your loved ones to recall some of your most cherished
          moments with your pet. Our service will guide you through this process
          by checking-in & providing you with helpful resources & tips. Once
          you're finished all of your chapters, we will send you a beautiful,
          keepsake book. Your book will contain all of the stories & photos of
          you and your pet to cherish... forever
        </p>
        <button className="helper" onClick={goToLandingPage}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Helper;
