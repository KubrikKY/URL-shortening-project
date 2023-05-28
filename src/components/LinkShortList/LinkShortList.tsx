import { useAppSelector } from '../../store/hook/hooksRedux';
import LinkCard from './LinkCard/LinkCard';
import './LinkShort.scss';
import { useState } from 'react';

const LinkShortList = () => {
  const shortLinks = useAppSelector((state) => state.shortUrl.ListShortURL);

  const [copiedButton, setCopiedButton] = useState<string>('');

  return (
    <div className="ShortList">
      {shortLinks.map((shortLinkData) => {
        const { original_link, full_short_link, code } = shortLinkData;
        let copied = false;
        if (copiedButton === code) {
          copied = true;
        }
        return (
          <LinkCard
            key={code}
            id={code}
            originalLink={original_link}
            shortLink={full_short_link}
            copied={copied}
            setCopiedButton={setCopiedButton}
          />
        );
      })}
    </div>
  );
};

export default LinkShortList;
