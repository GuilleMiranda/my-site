import {i18n} from "./i18n.mjs";

const supportedLanguages = ["es", "en", "pt"];
const userPreferredLanguage = navigator.language.slice(0, 2);

let language;
if (supportedLanguages.includes(userPreferredLanguage)) {
    language = userPreferredLanguage;
} else {
    language = "en";
}

console.log("deployed with mjs")

let title = document.getElementById("title");
let description = document.getElementById("description");

title.innerHTML = i18n[language].title;
description.innerHTML = i18n[language].description;