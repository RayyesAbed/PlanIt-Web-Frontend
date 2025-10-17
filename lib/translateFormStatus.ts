import { headers } from "next/headers";
import detectDeviceLocale from "./detectDeviceLocale";
import initTranslations from "@/app/i18n";

/**
 * Initializes translation function for form status messages
 * based on the user's device/browser locale.
 * @returns a localized `t` function.
 */
const translateFormStatus = async () => {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const locale = detectDeviceLocale(acceptLanguage);

  const { t } = await initTranslations(locale, ["FormStatus"]);

  return t;
};

export default translateFormStatus;
