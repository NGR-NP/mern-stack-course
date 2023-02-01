import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./css/SocialMedia.css";
const SocialMedia = () => {
  return (
    <div className="socialMediaSec">
      <div className="socialMediaMain column">
        <FacebookOutlinedIcon
          className="socialMediaIcon"
          titleAccess="Facebook"
          fontSize="medium"
        ></FacebookOutlinedIcon>

        <InstagramIcon
          className="socialMediaIcon"
          titleAccess="Instagram"
          fontSize="medium"
        ></InstagramIcon>

        <YouTubeIcon
          className="socialMediaIcon"
          titleAccess="Youtube"
          fontSize="medium"
        ></YouTubeIcon>

        <WhatsAppIcon
          className="socialMediaIcon"
          titleAccess="What's app"
          fontSize="medium"
        ></WhatsAppIcon>
      </div>
    </div>
  );
};

export default SocialMedia;
