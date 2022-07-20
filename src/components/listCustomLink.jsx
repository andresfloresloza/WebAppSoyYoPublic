import { CustomLink } from "./customLink";

export const ListCustomLink = ({ linkList, bg, bgHover }) => {
  return (
    <>
      {linkList.length > 0 ? (
        <>
          {linkList.map((link) => (
            <CustomLink
              bg={bg}
              bgHover={bgHover}
              key={link.docId}
              icon={link.icon}
              website={link.website}
              url={link.url}
            ></CustomLink>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};
