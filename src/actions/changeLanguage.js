export const CHANGE_LANGUAGE = "change_language";

export const changeLanguage = (language, callback) => ({
    type: CHANGE_LANGUAGE,
    language
});