import i18n from "i18next"
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNav from "./en/nav.json";
import deNav from "./de/nav.json";
import enFooter from "./en/footer.json";
import deFooter from "./de/footer.json";
import enAbout from "./en/about.json";
import deAbout from "./de/about.json";
import enGreen from "./en/green.json";
import deGreen from "./de/green.json";
import enContact from "./en/contact.json";
import deContact from "./de/contact.json";
import enProducts from "./en/products.json";
import deProducts from "./de/products.json";


i18n.use(LanguageDetector).use(initReactI18next).init({
    resources:{
        en:{translation:enNav, footer:enFooter, about:enAbout, green:enGreen,
        contact:enContact, products:enProducts},
        de:{translation:deNav, footer:deFooter, about:deAbout, green:deGreen,
        contact:deContact, products:deProducts},
//add more langs
    },

    fallbackLng: "en",
    detection: {
        order: ["localStorage", "navigator"],
        caches:["localStorage"],
    },

})

export default i18n
