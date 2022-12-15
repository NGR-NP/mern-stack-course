import React from "react";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import "./css/ContactNumber.css";
const ContactNumber = () => {
  return (
    <div className="contactNumberMain centerADiv">
      <div className="contactNumberIcon">
        <CallTwoToneIcon color="action" fontSize="xsmall" />
      </div>
      <div className="contactNumberInfo">
        <div>
          <a href="tel:+9779812345678">
            <p className="contactNumber">(+977) 9812345678</p>
          </a>
        </div>
        <div>
          <p className="contactNumberTimes">Sun - Fri 9:00 5:00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactNumber;
