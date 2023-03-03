import React from "react";
import Twitch from "./Icons/Twitch";
import Instagram from "./Icons/Instagram";

export default function Social() {
  return (
    <div className="socials">
      <a href="https://www.twitch.tv/lajefaok"  rel="noopener noreferrer">
        <span aria-label="twitch">
          <Twitch />
        </span>
      </a>
      <a href="https://www.instagram.com/premioscleopatra/" rel="noopener noreferrer">
        <span aria-label="instagram">
          <Instagram />
        </span>
      </a>
    </div>
  );
}
