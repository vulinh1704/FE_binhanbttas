import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
const TransLanguage = () => {
  const locales = {
    vi: { title: "VI" },
    en: { title: "EN" },
  };
  const { i18n } = useTranslation();

  return (
    <>
      {Object.keys(locales).map((locale) => (
        <Button
          variant="ghost"
          className={`text-[12px] py-0 px-2 big text-secondary ${
            i18n.resolvedLanguage === locale ? "bg-neutral-100" : ""
          }`}
          onClick={() => i18n.changeLanguage(locale)}
        >
          {locales[locale].title}
        </Button>
      ))}
    </>
  );
};

export default TransLanguage;
