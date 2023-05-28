import '../LinkShort.scss';
import { FC } from 'react';

type PropsLinkCard = {
  shortLink: string;
  originalLink: string;
  setCopiedButton: React.Dispatch<React.SetStateAction<string>>;
  copied: boolean;
  id: string;
};

const LinkCard: FC<PropsLinkCard> = ({
  shortLink,
  originalLink,
  setCopiedButton,
  copied,
  id,
}) => {
  const copyShortHandler = (): void => {
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
