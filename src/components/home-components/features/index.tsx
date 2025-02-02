import "./features.scss";
import raketa from "../../../assets/features-raketa.png";
import svg2 from "../../../assets/features-svg2.svg";
import svg3 from "../../../assets/features-svg3.svg";
import positin from "../../../assets/features-svg.svg";
function Features() {
  return (
    <section className="container">
      <img className="positin" src={positin} alt="This is image" />
      <div className="features">
        <div>
          <img className="topmimg2" src={raketa} alt="This is image" />
          <div className="features_top">
            <div>
              <h2>Some excellent Features for you</h2>
              <p>
                An enim nullam tempor sapien gravida donec enim ipsum porta
                justo congue <br /> magna at pretium purus pretium ligula{" "}
              </p>
            </div>
            <img className="topmimg1" src={raketa} alt="This is image" />
          </div>
        </div>
        <div className="features_bottom">
          <div className="features_bottom-cards">
            <div className="features_bottom-card">
              <img src={svg2} alt="This is image" />
            </div>
            <h3>Preset List of Task</h3>
            <p>Make bill payments easily using the wallet app</p>
          </div>
          <div className="features_bottom-cards cards2">
            <div className="features_bottom-card">
              <img src={svg2} alt="This is image" />
            </div>
            <h3>Preset List of Task</h3>
            <p>Make bill payments easily using the wallet app</p>
          </div>
          <div className="features_bottom-cards cards3">
            <div className="features_bottom-card">
              <img src={svg3} alt="This is image" />
            </div>
            <h3>Preset List of Task</h3>
            <p>Make bill payments easily using the wallet app</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
