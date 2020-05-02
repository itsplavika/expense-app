
//action creator
export const loadLanguage = (jsonData, lang) => ({
    type: "loadLanguage",
    payload: {...jsonData, lang},
});