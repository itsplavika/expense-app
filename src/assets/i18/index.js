import en from "./en.json";
import es from "./es.json";

const i18 = {
  en,
  es
};

export default function (lang = "en") {
  return { jsonData :i18[lang], lang};
};