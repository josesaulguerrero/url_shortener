//libraries and hooks
//components
//assets
import CopyToClipboardIllustration from "../assets/images/copyToClipboard.png";

export const CopyToClipboard = ({ shortenedLink }) => {
   const copyLinkToClipboard = (link) => {
      navigator.clipboard.writeText(String(link));
   };
   return (
      <button onClick={(() => copyLinkToClipboard(shortenedLink))} className="CopyToClipboard">
         <img src={CopyToClipboardIllustration} alt="copy to clipboard" width="30px" height="30px" />
      </button>
   );
};