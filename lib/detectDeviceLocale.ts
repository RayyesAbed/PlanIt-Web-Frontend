import i18nConfig from "@/i18nConfig";

const detectDeviceLocale = (acceptLanguage: string | null) => {
  if (!acceptLanguage) return i18nConfig.defaultLocale;

  const locale = acceptLanguage?.split(",")[0].split("-")[0];

  return i18nConfig.locales.includes(locale)
    ? locale
    : i18nConfig.defaultLocale;
};

export default detectDeviceLocale;
