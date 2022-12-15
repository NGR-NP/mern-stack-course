import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./css/SocialMedia.css";
const SocialMedia = () => {
  return (
    <div className="socialMediaSec">
      <div className="socialMediaMain">
        <FacebookOutlinedIcon
          className="socialMediaIcon"
          titleAccess="Facebook"
          fontSize="xsmall"
          color="action"
        ></FacebookOutlinedIcon>

        <InstagramIcon
          className="socialMediaIcon"
          titleAccess="Instagram"
          fontSize="xsmall"
          color="action"
        ></InstagramIcon>

        <YouTubeIcon
          className="socialMediaIcon"
          titleAccess="Youtube"
          fontSize="xsmall"
          color="action"
        ></YouTubeIcon>

        <WhatsAppIcon
          className="socialMediaIcon"
          titleAccess="What's app"
          fontSize="xsmall"
          color="action"
        ></WhatsAppIcon>
      </div>
    </div>
  );
};

export default SocialMedia;
