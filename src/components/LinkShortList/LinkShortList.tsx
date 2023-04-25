import { useSelector } from 'react-redux';
import LinkCard from './LinkCard/LinkCard';
import { rootStore } from '../../store';
import './LinkShort.scss';
import { useState } from 'react';

const LinkShortList = () => {
  const shortLinks = useSelector(
    (state: rootStore) => state.reducerShortUrl.ListShortURL
  );

  const [copiedButton, setCopiedButton] = useState<string>('');

  return (
    <div className="ShortList">
      {shortLinks.map((shortLinkData: (typeof shortLinks)[number]) => {
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
