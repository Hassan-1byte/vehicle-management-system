import React from "react";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
import dotsLogo from "../../assets/dots-pic.png";

export default function Appointment() {
  return (
    <div className="appointment">
      <div className="appo-container">
        <div className="appo-head">
          <div className="appo-head-left">
            <h1>Appointment List</h1>
          </div>
          <div className="appo-head-right">
            <img className="prev" src={prev} alt="" />
            <div className="date">
              <h4>08 MARCH 2021</h4>
            </div>
            <img className="next" src={next} alt="" />
          </div>
        </div>
        <div className="appo-box-text">
          <div className="appo-row-one">
            <div className="row-text">
              <h3>Oil Change</h3>
              <p className="para-grey">
                Mr. Aslam have a appointment for Oil change.
              </p>
              <p className="para-blue">08 March 2021 at 03:00 pm</p>
            </div>
            <div className="dots">
              <img src={dotsLogo} alt="" />
            </div>
          </div>
          <div className="appo-row-two">
            <div className="row-text">
              <h3>Engine Repairing</h3>
              <p className="para-grey">
                Mr. Aslam have a appointment for Oil change.
              </p>
              <p className="para-blue">08 March 2021 at 03:00 pm</p>
            </div>
            <div className="dots">
              <img src={dotsLogo} alt="" />
            </div>
          </div>
          <div className="appo-row-three">
            <div className="row-text">
              <h3>Oil Change</h3>
              <p className="para-grey">
                Mr. Aslam have a appointment for Oil change.
              </p>
              <p className="para-blue">08 March 2021 at 03:00 pm</p>
            </div>
            <div className="dots">
              <img src={dotsLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
