import helper1 from "../../assets/helper1.jpg";
import helper2 from "../../assets/helper2.jpg";
import helper3 from "../../assets/helper3.jpg";
import helper4 from "../../assets/helper4.jpg";

function Helper() {
  return (
    <div className="page-background1">
      <div className="container">
        <h1 className="title-helper">What is PetPages</h1>
        <div className="images">
          <img src={helper1} alt="Helper1" className="helper-image" />
          <img src={helper2} alt="Helper2" className="helper-image" />
          <img src={helper3} alt="Helper3" className="helper-image" />
          <img src={helper4} alt="Helper4" className="helper-image" />
        </div>
      </div>
    </div>
  );
}

export default Helper;
