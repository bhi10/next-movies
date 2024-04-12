import { useAppSelector } from '@lib/hooks';
import { Language } from '@utils/types/configuration';

export const language = (iso_639_1: string | undefined): Language | undefined => {
  const languages = useAppSelector(state => state.config.languages);

  if (!languages || !iso_639_1) return undefined;

  return languages.find(e => e.iso_639_1 === iso_639_1);
};
