import { i18n } from "./i18n.js";

const supportedLanguages = ["es", "en", "pt"];
const userPreferredLanguage = navigator.language.slice(0, 2);

let language = "en";
if (supportedLanguages.includes(userPreferredLanguage)) {
    language = userPreferredLanguage;
}

let title = document.getElementById("title");
let description = document.getElementById("description");
let projects = document.getElementById("projects");

title.innerHTML = i18n[language].title;
description.innerHTML = i18n[language].description;
projects.innerHTML = i18n[language].projects;