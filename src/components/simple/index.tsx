import "./simple.scss";
import switch1 from "../../assets/switch.svg";
import soat from "../../assets/qumsoat.png";
import vektor from "../../assets/Vector.svg";
import qaychi from "../../assets/qaychi.png";
function Simple() {
  return (
    <section className="container">
      <div className="simpleTop">
        <h2>Flexible work, Simple Price</h2>
        <p>Growth your business with using us</p>
        <div className="switch1">
          <p>Monthly</p>
          <img src={switch1} alt="This is image" />
          <p>Yearly</p>
        </div>
      </div>
      <div className="simpleBottom">
        <div className="smpleCard">
          <h3>Free</h3>
          <p>1 seat</p>
          <p>2 project</p>
          <div>
            <sup>$</sup>
            <span>0</span>
            <sub>/Forever</sub>
          </div>

          <button>Start 14 Days Trial</button>
        </div>
        <div className="nimadir">
          <div className="wektor">
            <img className="imgobsolute" src={soat} alt="" />;
            <img className="vector" src={vektor} alt="" />
          </div>
          <div className="smpleCard card2">
            <h3>Premium</h3>
            <p>Unlimited Seat</p>
            <p>Unlimited project</p>
            <div>
              <sup>$</sup>
              <span>30</span>
              <sub>/Forever</sub>
            </div>

            <button>Start 14 Days Trial</button>
          </div>
        </div>
        <img className="qaychi" src={qaychi} alt="" />
      </div>
    </section>
  );
}

export default Simple;
