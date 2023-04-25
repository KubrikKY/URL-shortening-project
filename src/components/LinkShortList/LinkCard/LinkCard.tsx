import '../LinkShort.scss';

type PropsLinkCard = {
  shortLink: string;
  originalLink: string;
  setCopiedButton: React.Dispatch<React.SetStateAction<string>>;
  copied: boolean;
  id: string;
};

const LinkCard = ({
  shortLink,
  originalLink,
  setCopiedButton,
  copied,
  id,
}: PropsLinkCard) => {
  const copyShortHandler = () => {
    navigator.clipboard.readText().then((text) => {
      if (text !== shortLink) {
        navigator.clipboard.writeText(shortLink);
        setCopiedButton(id);
      }
    });
  };

  return (
    <div className="LinkCard">
      <p>{originalLink}</p>
      <div className="CopyLink">
        <p>{shortLink}</p>
        {copied ? (
          <button className="ButtonCopied">Copied!</button>
        ) : (
          <button className="ButtonCopy" onClick={copyShortHandler}>
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default LinkCard;
