const defaultState = {
    jsonData: null,
    lang: "en"
};

export const langReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "loadLanguage": return { ...state, jsonData: action.payload.jsonData, lang: action.payload.lang};
    default: return state;
  }
};
