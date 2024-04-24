import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import vn from "../../images/flag/vn.png";
import uk from "../../images/flag/uk.png";
import ko from "../../images/flag/ko.jpg";
const TransLanguage = () => {
  const locales = {
    vi: { title: "VI", flag: vn },
    en: { title: "EN", flag: uk },
    kr: { title: "KR", flag: ko },
  };
  const { i18n } = useTranslation();

  return (
    <>
      <select
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="text-[12px] py-2 px-2 big text-secondary bg-transparent border border-neutral-300 rounded-full"
      >
        {Object.keys(locales).map((locale) => (
          <option key={locale} value={locale}>
            <>
              <img
                src={locales[locale].flag}
                alt=""
                width={30}
                height={30}
                className="rounded-full h-8 w-8"
              />
              {locales[locale].title}
            </>
          </option>
        ))}
      </select>
    </>
  );
};

export default TransLanguage;
