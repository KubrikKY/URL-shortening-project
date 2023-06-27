import { useCallback, useState } from 'react';

export const useCopied = () => {
  const [isCopy, setIsCopy] = useState<string>('');

  const copy = useCallback((copyText: string): void => {
    navigator.clipboard.readText().then((text) => {
      if (text !== copyText) {
        navigator.clipboard.writeText(copyText);
        setIsCopy(copyText);
      }
    });
  }, []);

  return { copy, isCopy };
};
