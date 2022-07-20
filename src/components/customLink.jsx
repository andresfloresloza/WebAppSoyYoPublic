/* eslint-disable jsx-a11y/alt-text */
import style from "../styles/linkSecondary.module.css";

export const CustomLink = ({ icon, website, url, bg, bgHover }) => {
  return (
    <>
      <a
        rel="noreferrer"
        target="_blank"
        href={url}
        className={`${style.secondaryLink} ${bg} ${bgHover}`}
      >
        <img className={style.icono} src={icon} />
        <span className={style.secondaryLinkSpan}>{website}</span>
      </a>
    </>
  );
};
