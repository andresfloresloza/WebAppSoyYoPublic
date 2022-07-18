import { FaTiktok, FaTwitterSquare } from "react-icons/fa";
import {
  RiLinkedinFill,
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTwitchFill,
} from "react-icons/ri";
import style from "../styles/linkSecondary.module.css";

export const SecondaryLink = ({ socialMedia, title, url,bg,bgHover }) => {
  function handleSocialMediaIcon() {
    switch (socialMedia) {
      case "facebook":
        return <RiFacebookBoxFill className={style.secondaryLinkIcon} />;
      case "linkedin":
        return <RiLinkedinFill className={style.secondaryLinkIcon} />;
      case "instagram":
        return <RiInstagramLine className={style.secondaryLinkIcon} />;
      case "tiktok":
        return <FaTiktok className={style.secondaryLinkIcon} />;
      case "twitter":
        return <FaTwitterSquare className={style.secondaryLinkIcon} />;
      case "twitch":
        return <RiTwitchFill className={style.secondaryLinkIcon} />;

      default:
        break;
    }
  }

  return (
    <>
      <a
        rel="noreferrer"
        target="_blank"
        // href="https://www.linkedin.com/in/irma-mrkanovic-a4638094/"
        href={url}
        // className={style.secondaryLink}
        className={`${style.secondaryLink} ${bg} ${bgHover}`}
      >
        {handleSocialMediaIcon()}
        <span className={style.secondaryLinkSpan}>{title}</span>
      </a>
    </>
  );
};
