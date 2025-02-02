import "./clinet.scss";
import sms from "../../assets/clinetsms.svg";
import smille from "../../assets/smille.svg";
import smilleSvg from "../../assets/smillesvg.svg";
import yumalo from "../../assets/yumalo.png";
import dot from "../../assets/doandor.svg";

import class1 from "../../assets/clinetClass.svg";
import class2 from "../../assets/clinetClass2.svg";

function Clinet() {
  return (
    <section className="container">
      <div className="">
        <div className="class11">
          <img className="classimg" src={class1} alt="" />
          <img className="class22" src={class2} alt="" />
        </div>
        <div className="clint__top">
          <h2>What our client says</h2>
          <p>Growth your business with using us</p>
        </div>
      </div>
      <div className="clint__bottom">
        <div className="yumalo">
          <img src={sms} alt="" />
          <img src={yumalo} alt="" />
        </div>
        <div className="yumaloTExt">
          <p>
            Leading an organization is incredibly rewarding and equally
            humbling. Confidence and humility. Every success is built on lessons
            from mistakes made is incredibly rewarding
          </p>

          <h3>Mila McSabbu</h3>
          <p>Designer</p>

          <div className="yumalodiv">
            <img className="dotnet" src={dot} alt="" />
            <div className="smille1">
              <img className="smillee1" src={smille} alt="" />
              <img className="smillesvg1" src={smilleSvg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clinet;
