import { useCopied } from '../../hook/useCopied';
import { useAppSelector } from '../../store/hook/hooksRedux';
import LinkCard from './LinkCard/LinkCard';
import './LinkShort.scss';

const LinkShortList = () => {
  const shortLinks = useAppSelector((state) => state.shortUrl.ListShortURL);
  const { copy, isCopy } = useCopied();

  return (
    <div className="ShortList">
      {shortLinks.map((shortLinkData) => {
        const { original_link, full_short_link, code } = shortLinkData;
        return (
          <LinkCard
            key={code}
            originalLink={original_link}
            shortLink={full_short_link}
            copied={isCopy === full_short_link}
            copy={copy}
          />
        );
      })}
    </div>
  );
};

export default LinkShortList;
