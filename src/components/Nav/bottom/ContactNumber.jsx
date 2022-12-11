import React from "react";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import "./css/ContactNumber.css";
const ContactNumber = () => {
  return (
    <div className="contactNumberMain centerADiv">
      <div className="contactNumberIcon">
        <CallTwoToneIcon />
      </div>
      <div className="contactNumberinfo">
        <div>
          <p className="contactNumbers">(+977) 9812345678</p>
        </div>
        <div>
          <p className="contactNumberTimes">Sun - Fri 9:00 5:00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactNumber;
