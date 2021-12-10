import React from "react";
import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Footer() {
  return (
    <div className="footer">
      <div className="footerRow1">
        <div className="footerColumn">
          {/* Need to add cursor effect when hovering */}
          <ul className="footerNav">
            <li>About Funimation</li>
            <li>Customer Support</li>
            <li>Terms of Use</li>
            <li>Terms of Sale</li>
            <li>Privacy Policy</li>
            <li>Do Not Sell My Personal Information</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footerColumn2">
          {/* Need to add cursor effect when hovering */}
          <ul className="socialMedia">
            <li>
              <FacebookRoundedIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <PinterestIcon />
            </li>
            <li>
              <img
                src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/discord.svg"
                alt="discord"
                width="20px"
                height="20px"
              />
            </li>
            <li>
              <img
                src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/tiktok.svg"
                alt="tiktok"
                width="20px"
                height="20px"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="footerRow2">
        {/* Need to swap out the Sony text for the image */}
        <div className="footerColumn">
          <p>Sony Pictures</p>
        </div>
        <div className="copyWright">
          <p>©2017-21 Funimation Global Group, LLC. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
