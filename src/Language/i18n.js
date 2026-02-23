import i18n from "i18next"
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNav from "./en/nav.json";
import deNav from "./de/nav.json";
import ruNav from "./ru/nav.json";
import plNav from "./pl/nav.json";
import uaNav from "./ua/nav.json";
import byNav from "./by/nav.json";
import enFooter from "./en/footer.json";
import deFooter from "./de/footer.json";
import ruFooter from "./ru/footer.json";
import plFooter from "./pl/footer.json";
import uaFooter from "./ua/footer.json";
import byFooter from "./by/footer.json";
import enAbout from "./en/about.json";
import deAbout from "./de/about.json";
import ruAbout from "./ru/about.json";
import plAbout from "./pl/about.json";
import byAbout from "./by/about.json";
import uaAbout from "./ua/about.json";
import enGreen from "./en/green.json";
import deGreen from "./de/green.json";
import ruGreen from "./ru/green.json";
import plGreen from "./pl/green.json";
import uaGreen from "./ua/green.json";
import byGreen from "./by/green.json";
import enContact from "./en/contact.json";
import deContact from "./de/contact.json";
import ruContact from "./ru/contact.json";
import plContact from "./pl/contact.json";
import uaContact from "./ua/contact.json";
import byContact from "./by/contact.json";
import enProducts from "./en/products.json";
import deProducts from "./de/products.json";
import ruProducts from "./ru/products.json";
import plProducts from "./pl/products.json";
import uaProducts from "./ua/products.json";
import byProducts from "./by/products.json";
import enCart from "./en/cart.json";
import deCart from "./de/cart.json";
import ruCart from "./ru/cart.json";
import plCart from "./pl/cart.json";
import uaCart from "./ua/cart.json";
import byCart from "./by/cart.json";


i18n.use(LanguageDetector).use(initReactI18next).init({
    resources:{
        en:{translation:enNav, footer:enFooter, about:enAbout, green:enGreen,
            contact:enContact, products:enProducts, cart:enCart},
        de:{translation:deNav, footer:deFooter, about:deAbout, green:deGreen,
            contact:deContact, products:deProducts, cart:deCart},
        ru:{translation:ruNav, footer:ruFooter, about:ruAbout, green:ruGreen,
            contact:ruContact, products:ruProducts, cart:ruCart},
        pl:{translation:plNav, footer:plFooter, about:plAbout, green:plGreen,
            contact:plContact, products:plProducts, cart:plCart},
        ua:{translation:uaNav, footer:uaFooter, about:uaAbout, green:uaGreen,
            contact:uaContact, products:uaProducts, cart:uaCart},
        by:{translation:byNav, footer:byFooter, about:byAbout, green:byGreen,
            contact:byContact, products:byProducts, cart:byCart},
//add more langs
    },

    fallbackLng: "en",
    detection: {
        order: ["localStorage", "navigator"],
        caches:["localStorage"],
    },

})

export default i18n
