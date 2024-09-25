import helper1 from "../../assets/helper1.jpg";
import helper2 from "../../assets/helper2.jpg";
import helper3 from "../../assets/helper3.jpg";
import helper4 from "../../assets/helper4.jpg";

function Helper() {
  return (
    <div className="container">
      <h1>What is PetPages</h1>
      <img src={helper1} alt="Helper1" />
      <img src={helper2} alt="Helper2" />
      <img src={helper3} alt="Helper3" />
      <img src={helper4} alt="Helper4" />
    </div>
  );
}

export default Helper;
