import { createInstance, i18n, Resource } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import i18nConfig from "@/i18nConfig";

/**
 *
 * @param locale The device current locale
 * @param namespaces The groupings of translations
 * @param i18nInstance The i18n instance used for setting up internationalization
 * @param resources An optional object containing preloaded translation data
 * @returns An object containing
 * - `i18n` The initialized i18next instance
 * - `resources` The loaded translations for the given locale
 * - `t` The translation function
 */
const initTranslations = async (
  locale: string,
  namespaces: string[],
  i18nInstance?: i18n,
  resources?: Resource
) => {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next); // Bridges Next.js to i18n core library

  if (!resources) {
    // Load all my locales to i18n instance
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/locales/${language}/${namespace}.json`)
      )
    );
  }

  // Initialize an i18n instance
  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: { [locale]: i18nInstance.services.resourceStore.data[locale] },
    t: i18nInstance.t,
  };
};

export default initTranslations;
