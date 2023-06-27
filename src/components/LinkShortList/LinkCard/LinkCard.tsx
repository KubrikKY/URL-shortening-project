import '../LinkShort.scss';
import { FC } from 'react';

type PropsLinkCard = {
  shortLink: string;
  originalLink: string;
  copied: boolean;
  copy: (a: string) => void;
};

const LinkCard: FC<PropsLinkCard> = ({
  shortLink,
  originalLink,
  copied,
  copy,
}) => {
  return (
    <div className="LinkCard">
      <p>{originalLink}</p>
      <div className="CopyLink">
        <p>{shortLink}</p>
        {copied ? (
          <button className="ButtonCopied">Copied!</button>
        ) : (
          <button className="ButtonCopy" onClick={() => copy(shortLink)}>
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default LinkCard;
