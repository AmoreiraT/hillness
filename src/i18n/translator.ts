import { useTranslation } from 'react-i18next';

export const Translator = (path: string): string => {
  const { t, i18n } = useTranslation(['home']);

  const translator = t(path, { ns: ['home'] });
  return translator;
};
